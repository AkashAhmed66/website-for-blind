import { NextRequest, NextResponse } from 'next/server';

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'qwen2.5:14b';

// Valid site navigation routes
const VALID_ROUTES: Record<string, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  'web development': '/services/web-development',
  'app development': '/services/app-development',
  'mobile app': '/services/app-development',
  'sqa testing': '/services/test-service',
  'test service': '/services/test-service',
  'resource sharing': '/services/tech-resource-sharing',
  products: '/products',
  'pharma eureka': '/products/pharma-eureka',
  'con eureka': '/products/con-eureka',
  'leather eureka': '/products/leather-eureka',
  hrms: '/products/human-resource-management-system',
  'human resource': '/products/human-resource-management-system',
  'web products': '/products/web-products',
  'app products': '/products/app-products',
  'custom software': '/products/customized-software',
  trainings: '/trainings',
  'sqa training': '/trainings/sqa-training',
  'dot net': '/trainings/dot-net-training',
  'spring boot': '/trainings/spring-boot-training',
  team: '/team',
  gallery: '/gallery',
  blog: '/blog',
  career: '/career',
  contact: '/contact',
  feedback: '/feedback',
  registration: '/registration',
  login: '/login',
  'student portal': '/portal/students',
  'students': '/portal/students',
  'admin portal': '/portal/admin',
  'payments': '/portal/payments',
  'payment portal': '/portal/payments',
  'qa blog': '/blog/quality-assurance',
  'microservices blog': '/blog/microservices',
};

const SYSTEM_PROMPT = `You are the AI Voice Agent for Tech Eureka (a software & IT firm specializing in Pharma/Chemical/Leather ERPs, Web/App Engineering, and IT Trainings like SQA, .NET Core, Spring Boot).

Your job is to understand the user's spoken command and decide which tool to execute.
Always return pure JSON in the following exact format without any markdown wrappers or extra text:

{
  "thought": "short explanation of user intent",
  "action": {
    "tool": "<tool_name>",
    "params": { ... }
  },
  "speech": "<concise, natural spoken response for TTS to read aloud>"
}

Available Tools:
1. navigatePage:
   params: { "path": "<route_path>", "announcement": "<e.g. Opening Pharma Eureka ERP.>" }
   Valid paths:
   - "/" (Home)
   - "/about" (About Us)
   - "/services" (Services Overview)
   - "/services/web-development" (Web Development)
   - "/services/app-development" (Mobile App Development)
   - "/services/test-service" (SQA and Test Service)
   - "/services/tech-resource-sharing" (Tech Resource Sharing)
   - "/products" (Products Overview)
   - "/products/pharma-eureka" (Pharma Eureka ERP)
   - "/products/con-eureka" (Con Eureka ERP)
   - "/products/leather-eureka" (Leather Eureka ERP)
   - "/products/human-resource-management-system" (HRMS)
   - "/products/web-products" (Web Products)
   - "/products/app-products" (App Products)
   - "/products/customized-software" (Custom Software)
   - "/trainings" (Trainings Overview)
   - "/trainings/sqa-training" (SQA Automation Training)
   - "/trainings/dot-net-training" (Dot Net Core Training)
   - "/trainings/spring-boot-training" (Spring Boot Training)
   - "/team" (Team)
   - "/gallery" (Gallery)
   - "/blog" (Blog)
   - "/career" (Careers)
   - "/contact" (Contact)
   - "/feedback" (Feedback)
   - "/registration" (Registration)
   - "/login" (Login Portal)
   - "/portal/students" (Student Learning Dashboard & Class Recordings)
   - "/portal/admin" (Admin Management Portal)
   - "/portal/payments" (Course Fee & Payment Instructions)
   - "/blog/quality-assurance" (Software QA Article)
   - "/blog/microservices" (Microservices Architecture Article)

2. readPageSummary:
   params: {}
   Trigger when user asks to read summary, summarize page, or overview.

3. readFullPage:
   params: {}
   Trigger when user asks to read complete page, full page, everything, or all content.

4. readMainMenu:
   params: {}
   Trigger when user asks for menu, list of pages, or navigation options.

5. readSubMenu:
   params: { "section": "services" | "products" | "trainings" }
   Trigger when user asks for sub-menu of services, products, or trainings.

6. toggleAutoRead:
   params: { "enabled": true | false }
   Trigger when user asks to stop, start, enable, or disable automatic page reading.

7. scrollPage:
   params: { "direction": "up" | "down" }
   Trigger when user says scroll up, scroll down, top of page.

8. provideHelp:
   params: {}
   Trigger when user asks for help or commands.

9. stopSpeech:
   params: {}
   Trigger when user says stop, pause, shut up, or quiet.

10. generalAnswer:
   params: { "answer": "<concise answer>" }
   Trigger when user asks a general question about Tech Eureka, software services, or course details.`;

export async function POST(request: NextRequest) {
  try {
    const { transcript, currentPage, autoReadEnabled } = await request.json();

    if (!transcript || typeof transcript !== 'string' || !transcript.trim()) {
      return NextResponse.json({
        action: { tool: 'none', params: {} },
        speech: 'I did not catch any command. Please hold J and speak again.',
      });
    }

    const cleanTranscript = transcript.trim();

    // 1. Try to query Ollama locally with dynamic model selection
    try {
      // Discover available installed model in Ollama
      let modelToUse = OLLAMA_MODEL;
      try {
        const tagsRes = await fetch(`${OLLAMA_BASE_URL}/api/tags`, { signal: AbortSignal.timeout(1200) });
        if (tagsRes.ok) {
          const tagsData = await tagsRes.json();
          const installedNames: string[] = (tagsData.models || []).map((m: any) => m.name || '');
          
          // Priority preference for RTX 4090: 14b / 32b / 7b Qwen models
          const match = installedNames.find(n => n.includes('qwen2.5:14b') || n.includes('qwen2.5-14b'))
            || installedNames.find(n => n.includes('qwen2.5:32b') || n.includes('qwen2.5-32b'))
            || installedNames.find(n => n.includes('qwen2.5:7b') || n.includes('qwen2.5-7b'))
            || installedNames.find(n => n.includes('qwen2.5') || n.includes('qwen'))
            || installedNames.find(n => n.includes('llama3.3') || n.includes('llama3'))
            || installedNames.find(n => n.includes('deepseek'))
            || installedNames[0];
            
          if (match) {
            modelToUse = match;
          }
        }
      } catch (tagErr) {
        // Use default OLLAMA_MODEL if tags query times out
      }

      const ollamaRes = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: modelToUse,
          system: SYSTEM_PROMPT,
          prompt: `Current Page: ${currentPage || '/'}\nAuto-Read Enabled: ${autoReadEnabled}\nUser Spoken Command: "${cleanTranscript}"`,
          stream: false,
          format: 'json',
          options: {
            temperature: 0.1,
            top_p: 0.9,
          },
        }),
      });

      if (ollamaRes.ok) {
        const ollamaData = await ollamaRes.json();
        const responseText = ollamaData.response || '';
        
        try {
          const parsed = JSON.parse(responseText);
          if (parsed && parsed.action && parsed.action.tool) {
            return NextResponse.json({
              action: parsed.action,
              speech: parsed.speech || '',
              thought: parsed.thought || '',
              source: `ollama (${modelToUse})`,
            });
          }
        } catch (jsonErr) {
          console.warn('[Ollama JSON Parse Warning]:', jsonErr, responseText);
        }
      }
    } catch (ollamaErr: any) {
      console.warn('[Ollama Agent Query Skipped / Offline]:', ollamaErr?.message);
    }

    // 2. Deterministic Tool Calling Heuristic Fallback
    const fallbackDecision = parseCommandHeuristically(cleanTranscript);
    return NextResponse.json({
      action: fallbackDecision.action,
      speech: fallbackDecision.speech,
      thought: fallbackDecision.thought,
      source: 'local-engine',
    });
  } catch (err: any) {
    console.error('[Agent Route Error]:', err);
    return NextResponse.json(
      { error: 'Agent execution failed', details: err?.message },
      { status: 500 }
    );
  }
}

// Robust rule-based heuristic parser for high-speed fallback
function parseCommandHeuristically(cmd: string) {
  const lower = cmd.toLowerCase().trim();

  // Stop
  if (lower.includes('stop') && !lower.includes('auto read')) {
    return {
      thought: 'User asked to stop',
      action: { tool: 'stopSpeech', params: {} },
      speech: 'Stopped',
    };
  }

  // Auto-read controls
  if (
    lower.includes('stop auto read') ||
    lower.includes('disable auto read') ||
    lower.includes('turn off auto read') ||
    lower.includes('auto read off')
  ) {
    return {
      thought: 'User asked to disable auto-read',
      action: { tool: 'toggleAutoRead', params: { enabled: false } },
      speech: 'Automatic page reading is now stopped.',
    };
  }
  if (
    lower.includes('start auto read') ||
    lower.includes('enable auto read') ||
    lower.includes('turn on auto read') ||
    lower.includes('auto read on')
  ) {
    return {
      thought: 'User asked to enable auto-read',
      action: { tool: 'toggleAutoRead', params: { enabled: true } },
      speech: 'Automatic page reading is now started.',
    };
  }

  // Help
  if (lower.includes('help') || lower.includes('what can you do') || lower.includes('commands')) {
    return {
      thought: 'User asked for help',
      action: { tool: 'provideHelp', params: {} },
      speech: 'Opening the voice guide.',
    };
  }

  // Summary
  if (lower.includes('summary') || lower.includes('summarize') || lower.includes('overview') || lower.includes('brief')) {
    return {
      thought: 'User requested page summary',
      action: { tool: 'readPageSummary', params: {} },
      speech: '',
    };
  }

  // Complete / Full page
  if (lower.includes('complete') || lower.includes('full page') || lower.includes('whole page') || lower.includes('entire page') || lower.includes('everything') || lower.includes('read all')) {
    return {
      thought: 'User requested full page read',
      action: { tool: 'readFullPage', params: {} },
      speech: '',
    };
  }

  // Submenu
  if (lower.includes('sub') && lower.includes('service')) {
    return {
      thought: 'User requested services submenu',
      action: { tool: 'readSubMenu', params: { section: 'services' } },
      speech: '',
    };
  }
  if (lower.includes('sub') && lower.includes('product')) {
    return {
      thought: 'User requested products submenu',
      action: { tool: 'readSubMenu', params: { section: 'products' } },
      speech: '',
    };
  }
  if (lower.includes('sub') && lower.includes('training')) {
    return {
      thought: 'User requested trainings submenu',
      action: { tool: 'readSubMenu', params: { section: 'trainings' } },
      speech: '',
    };
  }

  // Main menu
  if (lower.includes('menu') || lower.includes('list pages') || lower.includes('all pages') || lower.includes('navigation')) {
    return {
      thought: 'User requested main navigation menu',
      action: { tool: 'readMainMenu', params: {} },
      speech: '',
    };
  }

  // Scroll
  if (lower.includes('scroll down') || lower.includes('go down')) {
    return {
      thought: 'User requested scroll down',
      action: { tool: 'scrollPage', params: { direction: 'down' } },
      speech: 'Scrolled down.',
    };
  }
  if (lower.includes('scroll up') || lower.includes('top of page') || lower.includes('go to top')) {
    return {
      thought: 'User requested scroll up',
      action: { tool: 'scrollPage', params: { direction: 'up' } },
      speech: 'Back to top.',
    };
  }

  // Navigation matching
  for (const [key, path] of Object.entries(VALID_ROUTES)) {
    if (lower.includes(key)) {
      const cleanName = key.charAt(0).toUpperCase() + key.slice(1);
      return {
        thought: `Matched navigation keyword '${key}' to '${path}'`,
        action: {
          tool: 'navigatePage',
          params: {
            path,
            announcement: `Opening the ${cleanName} page.`,
          },
        },
        speech: `Opening the ${cleanName} page.`,
      };
    }
  }

  // General fallback
  return {
    thought: 'Unrecognized command',
    action: { tool: 'generalAnswer', params: { answer: 'Sorry, I did not understand that command. Say help to hear what I can do.' } },
    speech: 'Sorry, I did not understand that command. Say help to hear what I can do.',
  };
}
