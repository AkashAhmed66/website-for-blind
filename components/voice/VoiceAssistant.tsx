'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Mic, MicOff, Volume2, HelpCircle, 
  Sliders, Minus,
  Play, Pause, X, Bot
} from 'lucide-react';

// ─── Site Structure for menu/submenu reading ─────────────────────────────────
const SITE_MENU = [
  { label: 'Home', path: '/', submenus: [] },
  {
    label: 'Services', path: '/services',
    submenus: [
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'App Development', path: '/services/app-development' },
      { label: 'SQA and Testing', path: '/services/test-service' },
      { label: 'Tech Resource Sharing', path: '/services/tech-resource-sharing' },
    ]
  },
  {
    label: 'Products', path: '/products',
    submenus: [
      { label: 'Pharma Eureka ERP', path: '/products/pharma-eureka' },
      { label: 'Con Eureka ERP', path: '/products/con-eureka' },
      { label: 'Leather Eureka ERP', path: '/products/leather-eureka' },
      { label: 'HR Management System', path: '/products/human-resource-management-system' },
      { label: 'Web Products', path: '/products/web-products' },
      { label: 'App Products', path: '/products/app-products' },
      { label: 'Customized Software', path: '/products/customized-software' },
    ]
  },
  {
    label: 'Trainings', path: '/trainings',
    submenus: [
      { label: 'SQA Automation Training', path: '/trainings/sqa-training' },
      { label: 'Dot Net Core Training', path: '/trainings/dot-net-training' },
      { label: 'Spring Boot and Microservices Training', path: '/trainings/spring-boot-training' },
    ]
  },
  { label: 'About Us', path: '/about', submenus: [] },
  { label: 'Our Team', path: '/team', submenus: [] },
  { label: 'Gallery', path: '/gallery', submenus: [] },
  { label: 'Blog', path: '/blog', submenus: [] },
  { label: 'Career', path: '/career', submenus: [] },
  { label: 'Contact', path: '/contact', submenus: [] },
  { label: 'Register for Training', path: '/registration', submenus: [] },
  { label: 'Login Portal', path: '/login', submenus: [] },
  { label: 'Feedback', path: '/feedback', submenus: [] },
];

// ─── Spoken Help Script ───────────────────────────────────────────────────────
const SPOKEN_HELP = `Here is everything your Voice Navigator can do.

Keyboard shortcuts:
Press F to read the current page aloud. Press F again to pause or resume reading.
Hold J to speak a voice command. Release J when you finish speaking.
Pressing J while reading will immediately stop the reading.

Reading commands:
Say "Read summary" or "Page summary" to hear a short description of this page.
Say "Read complete page" or "Read full page" to hear the entire page content read aloud from top to bottom.
Say "Read page" or "Read highlights" to hear the key headings and paragraphs.
Say "Stop" or "Pause" to immediately silence the voice.
Say "Stop auto read" to turn off automatic reading on page changes.
Say "Start auto read" to turn on automatic reading on page changes.

Navigation commands:
Say "Go to Home" to navigate to the home page.
Say "Go to Services" to open the Services section.
Say "Go to Products" to open the Products section.
Say "Go to Trainings" to open the Trainings section.
Say "Open About" to go to the About Us page.
Say "Open Team" to meet our team.
Say "Open Gallery" to view photos.
Say "Open Blog" to read articles.
Say "Open Career" to explore job opportunities.
Say "Open Contact" to reach us.
Say "Register" or "Enroll" to open course registration.
Say "Login" or "Portal" to open the login page.

Menu commands:
Say "Read the menu" or "List all pages" to hear every available page.
Say "Read sub menu of services" to hear the Services sub-pages.
Say "Read sub menu of products" to hear the Products sub-pages.
Say "Read sub menu of trainings" to hear the Training programs.

Scroll commands:
Say "Scroll down" to scroll down the page.
Say "Scroll up" or "Go to top" to return to the top.

Say "Help" at any time to hear this guide again.`;

// ─── Female Voice Preference Priority ─────────────────────────────────────────
const FEMALE_VOICE_KEYWORDS = [
  'Jenny', 'Aria', 'Sara', 'Amber', 'Ana', 'Ashley', 'Cora', 'Elizabeth',
  'Samantha', 'Karen', 'Victoria', 'Fiona', 'Moira', 'Tessa', 'Veena', 'Sangeeta',
  'Google US English', 'Google UK English Female',
  'Microsoft Zira', 'Microsoft Jenny', 'Microsoft Aria', 'Microsoft Michelle',
  'Microsoft Hazel', 'Microsoft Susan', 'Microsoft Heera',
  'Female', 'female', 'en-US-JennyNeural', 'en-US-AriaNeural'
];

const MALE_VOICE_BLACKLIST = [
  'david', 'guy', 'daniel', 'george', 'mark', 'richard', 'james', 'john',
  'michael', 'robert', 'william', 'male', 'google uk english male', 'desktop david',
  'microsoft david', 'microsoft guy', 'microsoft mark', 'microsoft george', 'microsoft ravi',
  'alex', 'fred', 'oliver', 'rishi'
];

function isMaleVoice(name: string): boolean {
  const lower = name.toLowerCase();
  return MALE_VOICE_BLACKLIST.some(k => lower.includes(k));
}

function pickBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  for (const keyword of FEMALE_VOICE_KEYWORDS) {
    const match = voices.find(v =>
      !isMaleVoice(v.name) &&
      (v.name.toLowerCase().includes(keyword.toLowerCase()) || v.lang === keyword)
    );
    if (match) return match;
  }
  const nonMaleEng = voices.find(v => v.lang.startsWith('en') && !isMaleVoice(v.name));
  if (nonMaleEng) return nonMaleEng;

  const anyNonMale = voices.find(v => !isMaleVoice(v.name));
  if (anyNonMale) return anyNonMale;

  return voices[0] || null;
}

export default function VoiceAssistant() {
  const router = useRouter();
  const pathname = usePathname();

  const [isMinimized, setIsMinimized] = useState(true);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [actionMessage, setActionMessage] = useState('Ready — Press F to read, Hold J to speak');
  const [speechRate, setSpeechRate] = useState(0.92);
  const [speechPitch, setSpeechPitch] = useState(1.05);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [autoReadEnabled, setAutoReadEnabled] = useState(true);
  const [agentSource, setAgentSource] = useState<'whisper-ollama' | 'local'>('whisper-ollama');

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastSpeakEndRef = useRef<number>(0);
  const speakTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSpeakingRef = useRef<boolean>(false);
  const isNavigatingWithSpeechRef = useRef<boolean>(false);
  const isHoldingJRef = useRef<boolean>(false);
  const currentTranscriptRef = useRef<string>('');
  
  // MediaRecorder audio capture refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // ─── Page Summaries ───────────────────────────────────────────────────────
  const pageSummaries: Record<string, string> = {
    '/': "Welcome to Tech Eureka — the software and IT division of Techno Green Carbon Limited. We build compliant enterprise ERPs, modern web and mobile applications, automated quality assurance, and offer professional technology training programs.",
    '/about': "About Tech Eureka. We are a quality-driven software firm under TGCL. We provide custom ERP systems, cloud architecture design, and long-term technology partnerships for businesses across industries.",
    '/services': "Tech Eureka Services. We offer four core engineering services: web development, mobile app development, software quality assurance and testing, and technical resource sharing with experienced engineers.",
    '/services/web-development': "Web Development Service. We engineer robust, high-performance web platforms with modern interfaces, API integrations, and cloud backend systems tailored to your business.",
    '/services/app-development': "Mobile App Development. We build native and cross-platform mobile applications for iOS and Android, featuring intuitive user experience and offline synchronization capabilities.",
    '/services/test-service': "SQA and Test Service. We provide automated regression testing with Selenium and Appium, performance testing with JMeter, and comprehensive end-to-end security verification.",
    '/services/tech-resource-sharing': "Tech Resource Sharing. We deploy pre-vetted senior software engineers, SQA leads, and cloud architects directly into your development workflow.",
    '/products': "Tech Eureka Enterprise Products. Explore our product lineup including Pharma Eureka, Con Eureka for chemicals, Leather Eureka, Human Resource Management System, and custom mobile field apps.",
    '/products/pharma-eureka': "Pharma Eureka ERP. A fully compliant pharmaceutical enterprise resource planning system built to meet GMP, FDA, and 21 CFR Part 11 regulations, covering batch production, QA and QC, procurement, and inventory management.",
    '/products/con-eureka': "Con Eureka ERP. Designed for chemical and cosmetics manufacturing with BSTI compliance, master production planning, and full supply chain control.",
    '/products/leather-eureka': "Leather Eureka ERP. Purpose-built for the leather manufacturing industry, with batch recipes, chemical loan tracking, export LC management, and integrated payroll.",
    '/products/human-resource-management-system': "Human Resource Management System. A comprehensive HRMS covering the full employee lifecycle, biometric attendance integration, payroll processing, leave management, and training tracking.",
    '/products/web-products': "Web Product Suite. Cloud-ready portals for eCommerce, CRM, point of sale, ISP billing, tender management, and e-learning platforms.",
    '/products/app-products': "Enterprise Mobile Apps. Field applications including the Sales Automation System, Electronic Doctor Call Log, and Electronic Sales Order Management System.",
    '/products/customized-software': "Customized Software. Purpose-built software engineered precisely to your unique business workflow and data management requirements.",
    '/trainings': "Professional IT Training Programs. We offer three-month intensive career-building training tracks in SQA Test Automation, Dot Net Core MVC, and Spring Boot Microservices.",
    '/trainings/sqa-training': "SQA Automation Training. An eleven-chapter, three-month weekend course covering Java programming, Selenium WebDriver, Appium mobile testing, Postman API testing, JMeter performance testing, and CI/CD with GitHub Actions.",
    '/trainings/dot-net-training': "Dot Net Core Enterprise Training. Covering MVC architecture, Razor views, Entity Framework Core, eighteen SQL Server modules, and a full eCommerce capstone project.",
    '/trainings/spring-boot-training': "Spring Boot and Microservices Training. Covering Spring MVC, Spring Data JPA, Spring Security, API Gateway patterns, Docker containerization, and production deployment strategies.",
    '/team': "Tech Eureka Team. Meet our senior software engineers, SQA leads, and strategic technology consultants who drive our engineering excellence.",
    '/gallery': "Tech Eureka Gallery. Capturing team milestones, corporate workshops, and live training activities across the TGCL group.",
    '/career': "Careers at Tech Eureka. Explore our culture, workplace values, and open positions. Submit your resume for full-stack development, SQA engineering, or mobile development roles.",
    '/blog': "Engineering Blog. In-depth technical articles on quality assurance automation, automated testing strategies, and microservices architecture.",
    '/blog/quality-assurance': "Quality Assurance Article. A deep dive into the strategic benefits of test automation and how to choose the right testing frameworks for your product.",
    '/blog/microservices': "Microservices Architecture Article. Covering architectural patterns, API gateway design, failure resilience, and independent service scaling for complex distributed systems.",
    '/contact': "Contact Tech Eureka. Reach our Banani, Dhaka headquarters by phone at plus eight eight zero one three two six eight nine two four three seven, or by email at info at Tech Eureka dot com.",
    '/feedback': "Client Feedback Portal. Share your review, suggestions, or star rating to help us continuously improve our service quality.",
    '/login': "Login Portal. Access your student training dashboard with class recordings and materials, or enter the admin management console.",
    '/registration': "Training Registration. Enroll in our three-month SQA Automation, Dot Net Core, or Spring Boot Microservices training programs.",
    '/portal/admin': "Admin Management Portal. Live telemetry for ERP deployments, student registrations, and system health status.",
    '/portal/students': "Student Learning Dashboard. View your weekly curriculum progress, access class recordings, and download lab materials.",
    '/portal/payments': "Payment and Billing Portal. Find copy-ready bKash, Nagad, and bank wire transfer instructions for course fee payments.",
  };

  // ─── Voice Loading with female natural preference ─────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    synthRef.current = window.speechSynthesis;

    const loadVoices = () => {
      const voices = synthRef.current?.getVoices() || [];
      setAvailableVoices(voices);
      if (voices.length > 0) {
        if (!selectedVoice || isMaleVoice(selectedVoice)) {
          const best = pickBestVoice(voices);
          if (best) setSelectedVoice(best.name);
        }
      }
    };

    loadVoices();
    if (synthRef.current) {
      synthRef.current.onvoiceschanged = loadVoices;
    }
  }, [selectedVoice]);

  // ─── Native Web Speech Recognition Setup (as fast real-time preview) ───────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 3;

    recognition.onstart = () => {
      setIsListening(true);
      setActionMessage('Listening… speak while holding J');
    };

    recognition.onresult = (event: any) => {
      let fullText = '';
      for (let i = 0; i < event.results.length; i++) {
        fullText += event.results[i][0].transcript + ' ';
      }
      const clean = fullText.trim();
      currentTranscriptRef.current = clean;
      setTranscript(clean);
    };

    recognition.onerror = (event: any) => {
      if (event.error !== 'no-speech') {
        console.warn('SpeechRecognition error:', event.error);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      if (isHoldingJRef.current) {
        try {
          recognition.start();
        } catch (e) {}
      }
    };

    recognitionRef.current = recognition;
  }, []);

  // ─── Dynamic fallback page summary ───────────────────────────────────────
  const getDynamicPageSummary = () => {
    if (typeof document === 'undefined') return '';
    const h1 = document.querySelector('h1')?.textContent?.trim();
    const p = document.querySelector('main p')?.textContent?.trim() || document.querySelector('p')?.textContent?.trim();
    if (h1 && p) return `${h1}. ${p.slice(0, 200)}`;
    return h1 ? `${h1}. Welcome to Tech Eureka.` : 'Welcome to Tech Eureka.';
  };

  // ─── Auditory feedback chimes ─────────────────────────────────────────────
  const playBeep = (type: 'start' | 'stop') => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'start') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);         // C5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.14); // A5
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.3);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.14);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.14, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.24);
      }
    } catch (err) {
      console.warn('Chime failed:', err);
    }
  };

  // ─── Core TTS function: Female Voice Only + Strict Anti-Overlap & 0.5-sec Gap ─
  const speakText = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    
    if (speakTimerRef.current) {
      clearTimeout(speakTimerRef.current);
      speakTimerRef.current = null;
    }

    window.speechSynthesis.cancel();
    if (synthRef.current) {
      synthRef.current.cancel();
    }

    // 0.5s pause
    const GAP_MS = 500;
    const elapsed = Date.now() - lastSpeakEndRef.current;
    const delay = Math.max(80, elapsed < GAP_MS ? GAP_MS - elapsed : 80);

    speakTimerRef.current = setTimeout(() => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      if (!synthRef.current) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speechRate;
      utterance.pitch = speechPitch;
      utterance.volume = 1;

      const voices = synthRef.current.getVoices();
      let femaleVoice: SpeechSynthesisVoice | undefined;
      
      if (selectedVoice && !isMaleVoice(selectedVoice)) {
        femaleVoice = voices.find(v => v.name === selectedVoice && !isMaleVoice(v.name));
      }
      if (!femaleVoice) {
        const best = pickBestVoice(voices);
        if (best) {
          femaleVoice = best;
          setSelectedVoice(best.name);
        }
      }
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.onstart = () => { 
        setIsSpeaking(true); 
        isSpeakingRef.current = true;
        setIsPaused(false); 
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        isSpeakingRef.current = false;
        setIsPaused(false);
        lastSpeakEndRef.current = Date.now();
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        isSpeakingRef.current = false;
        setIsPaused(false);
        lastSpeakEndRef.current = Date.now();
        if (onEnd) onEnd();
      };

      synthRef.current.speak(utterance);
    }, delay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speechRate, speechPitch, selectedVoice]);

  // ─── Automatic page summary readout on navigation ─────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined' || !autoReadEnabled) return;

    if (navTimerRef.current) {
      clearTimeout(navTimerRef.current);
      navTimerRef.current = null;
    }

    const checkAndNarrateSummary = () => {
      if (synthRef.current?.speaking || isSpeakingRef.current || isNavigatingWithSpeechRef.current || isProcessing) {
        navTimerRef.current = setTimeout(checkAndNarrateSummary, 150);
        return;
      }

      const elapsed = Date.now() - lastSpeakEndRef.current;
      const waitTime = Math.max(500 - elapsed, 80);

      navTimerRef.current = setTimeout(() => {
        const summary = pageSummaries[pathname] || getDynamicPageSummary();
        if (summary) {
          speakText(summary);
          const cleanName = pathname === '/'
            ? 'Home'
            : pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') || 'Page';
          setActionMessage(`Now reading: ${cleanName.charAt(0).toUpperCase() + cleanName.slice(1)}`);
        }
      }, waitTime);
    };

    navTimerRef.current = setTimeout(checkAndNarrateSummary, 200);

    return () => {
      if (navTimerRef.current) {
        clearTimeout(navTimerRef.current);
        navTimerRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, autoReadEnabled]);

  // ─── Stop Speaking ────────────────────────────────────────────────────────
  const stopSpeaking = useCallback(() => {
    if (speakTimerRef.current) {
      clearTimeout(speakTimerRef.current);
      speakTimerRef.current = null;
    }
    if (navTimerRef.current) {
      clearTimeout(navTimerRef.current);
      navTimerRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    isNavigatingWithSpeechRef.current = false;
    isSpeakingRef.current = false;
    lastSpeakEndRef.current = Date.now();
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  // ─── Toggle F key read/pause/resume ──────────────────────────────────────
  const toggleReadPage = useCallback(() => {
    if (isSpeaking) {
      if (isPaused) {
        synthRef.current?.resume();
        setIsPaused(false);
        setActionMessage('Resumed reading');
      } else {
        synthRef.current?.pause();
        setIsPaused(true);
        setActionMessage('Reading paused — Press F to resume');
      }
    } else {
      readCurrentPage();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpeaking, isPaused]);

  // ─── Reading helpers ──────────────────────────────────────────────────────
  const readPageSummary = useCallback(() => {
    const summary = pageSummaries[pathname] || getDynamicPageSummary();
    speakText(summary);
    const cleanName = pathname === '/'
      ? 'Home'
      : pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') || 'Page';
    setActionMessage(`Reading summary: ${cleanName.charAt(0).toUpperCase() + cleanName.slice(1)}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, speakText]);

  const readFullPage = useCallback(() => {
    const mainEl = document.querySelector('main') || document.querySelector('#main-content') || document.body;
    const content = Array.from(mainEl.querySelectorAll('h1, h2, h3, h4, h5, p, li'))
      .map(el => el.textContent?.trim())
      .filter(t => t && t.length > 4 && !t.includes('©') && !t.includes('All rights reserved'))
      .slice(0, 40)
      .join('. ');

    if (content) {
      speakText(content);
      setActionMessage('Reading full page content…');
    } else {
      readPageSummary();
    }
  }, [speakText, readPageSummary]);

  const readCurrentPage = useCallback(() => {
    const mainEl = document.querySelector('main') || document.querySelector('#main-content') || document.body;
    const highlights = Array.from(mainEl.querySelectorAll('h1, h2, h3, p'))
      .map(el => el.textContent?.trim())
      .filter(t => t && t.length > 5 && !t.includes('©'))
      .slice(0, 10)
      .join('. ');

    if (highlights) {
      speakText(highlights);
      setActionMessage('Reading page highlights…');
    } else {
      speakText('Welcome to Tech Eureka, your trusted software and training partner.');
    }
  }, [speakText]);

  // ─── Read full main menu ──────────────────────────────────────────────────
  const readMainMenu = useCallback(() => {
    const items = SITE_MENU.map(item => {
      if (item.submenus.length > 0) {
        return `${item.label}, which has ${item.submenus.length} sub-pages`;
      }
      return item.label;
    });
    const text = `The main navigation has ${SITE_MENU.length} items: ${items.join(', ')}.`;
    speakText(text);
    setActionMessage('Reading main navigation menu');
  }, [speakText]);

  // ─── Read submenu for a given section ────────────────────────────────────
  const readSubMenu = useCallback((section: string) => {
    const lower = section.toLowerCase();
    const found = SITE_MENU.find(m => m.label.toLowerCase().includes(lower));
    if (!found) {
      speakText(`I could not find a sub-menu for ${section}. Please say services, products, or trainings.`);
      return;
    }
    if (found.submenus.length === 0) {
      speakText(`${found.label} does not have any sub-pages. Say "Go to ${found.label}" to open it directly.`);
      return;
    }
    const subNames = found.submenus.map(s => s.label).join(', ');
    speakText(`${found.label} has ${found.submenus.length} sub-pages: ${subNames}. Say the name of any of these to navigate to it.`);
    setActionMessage(`Sub-menu of ${found.label}`);
  }, [speakText]);

  // ─── Speak full help guide ────────────────────────────────────────────────
  const readHelp = useCallback(() => {
    setIsHelpOpen(true);
    speakText(SPOKEN_HELP);
    setActionMessage('Reading voice command guide…');
  }, [speakText]);

  // ─── Seamless Nav with Speech (Completes opening speech fully before summary) ─
  const navigateWithSpeech = useCallback((targetPath: string, announcement: string, actionMsg: string) => {
    setActionMessage(actionMsg);
    isNavigatingWithSpeechRef.current = true;

    speakText(announcement, () => {
      isNavigatingWithSpeechRef.current = false;
      if (pathname !== targetPath) {
        router.push(targetPath);
      } else {
        setTimeout(() => {
          readPageSummary();
        }, 500);
      }
    });
  }, [pathname, router, speakText, readPageSummary]);

  // ─── Execute Agent Action returned by Ollama / Local Engine ───────────────
  const executeAgentAction = useCallback((action: any, speech: string) => {
    if (!action || !action.tool) {
      if (speech) speakText(speech);
      return;
    }

    const { tool, params = {} } = action;

    switch (tool) {
      case 'navigatePage': {
        const targetPath = params.path || '/';
        const announcement = speech || params.announcement || `Navigating to ${targetPath}`;
        const actionLabel = `Opening ${targetPath === '/' ? 'Home' : targetPath.split('/').pop()?.replace(/-/g, ' ')}`;
        navigateWithSpeech(targetPath, announcement, actionLabel);
        break;
      }
      case 'readPageSummary':
        if (speech) {
          speakText(speech, () => readPageSummary());
        } else {
          readPageSummary();
        }
        break;
      case 'readFullPage':
        if (speech) {
          speakText(speech, () => readFullPage());
        } else {
          readFullPage();
        }
        break;
      case 'readMainMenu':
        readMainMenu();
        break;
      case 'readSubMenu':
        readSubMenu(params.section || 'services');
        break;
      case 'toggleAutoRead': {
        const enabled = params.enabled !== undefined ? params.enabled : !autoReadEnabled;
        setAutoReadEnabled(enabled);
        const reply = speech || (enabled ? 'Automatic page reading is now started.' : 'Automatic page reading is now stopped.');
        speakText(reply);
        setActionMessage(enabled ? 'Auto-read started' : 'Auto-read stopped');
        break;
      }
      case 'scrollPage': {
        const dir = params.direction || 'down';
        if (dir === 'up') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          speakText(speech || 'Back to top.');
          setActionMessage('Scrolled to top');
        } else {
          window.scrollBy({ top: 500, behavior: 'smooth' });
          speakText(speech || 'Scrolled down.');
          setActionMessage('Scrolled down');
        }
        break;
      }
      case 'provideHelp':
        readHelp();
        break;
      case 'stopSpeech':
        stopSpeaking();
        setActionMessage('Stopped');
        break;
      case 'generalAnswer':
      default:
        if (speech) {
          speakText(speech);
          setActionMessage('Agent replied');
        }
        break;
    }
  }, [autoReadEnabled, navigateWithSpeech, readFullPage, readHelp, readMainMenu, readPageSummary, readSubMenu, speakText, stopSpeaking]);

  // ─── Process Transcript through Ollama Agent Endpoint ─────────────────────
  const processTranscriptWithAgent = useCallback(async (textToProcess: string) => {
    if (!textToProcess || !textToProcess.trim()) return;

    setIsProcessing(true);
    setActionMessage(`Thinking… "${textToProcess.slice(0, 35)}"`);

    try {
      const res = await fetch('/api/voice/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript: textToProcess,
          currentPage: pathname,
          autoReadEnabled,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setAgentSource(data.source === 'ollama' ? 'whisper-ollama' : 'local');
        executeAgentAction(data.action, data.speech);
      } else {
        throw new Error(`Agent API returned ${res.status}`);
      }
    } catch (err: any) {
      console.warn('[Agent Fallback Triggered]:', err?.message);
      // Fallback local matching
      handleVoiceCommand(textToProcess);
    } finally {
      setIsProcessing(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoReadEnabled, executeAgentAction, pathname]);

  // ─── Process Audio Blob with Python faster-whisper STT Service ────────────
  const processAudioWithAgent = useCallback(async (audioBlob: Blob) => {
    setIsProcessing(true);
    setActionMessage('Transcribing with faster-whisper…');

    try {
      const formData = new FormData();
      formData.append('file', audioBlob, 'voice_command.webm');

      const sttRes = await fetch('/api/voice/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (sttRes.ok) {
        const data = await sttRes.json();
        const whisperText = (data.text || '').trim();
        if (whisperText) {
          setTranscript(whisperText);
          await processTranscriptWithAgent(whisperText);
          return;
        }
      }
      throw new Error('STT returned empty or offline');
    } catch (err: any) {
      console.warn('[STT Service Fallback]:', err?.message);
      // Fallback to text captured by Web Speech API
      const fallbackText = currentTranscriptRef.current.trim();
      if (fallbackText) {
        await processTranscriptWithAgent(fallbackText);
      } else {
        setActionMessage('Ready — Press F to read, Hold J to speak');
      }
    } finally {
      setIsProcessing(false);
    }
  }, [processTranscriptWithAgent]);

  // ─── Local Fallback Command Intent Handler ────────────────────────────────
  const handleVoiceCommand = useCallback((cmd: string) => {
    const lower = cmd.toLowerCase().trim();

    if (
      lower.includes('stop auto read') || 
      lower.includes('disable auto read') || 
      lower.includes('turn off auto read') || 
      lower.includes('auto read off')
    ) {
      setAutoReadEnabled(false);
      speakText('Automatic page reading is now stopped.');
      setActionMessage('Auto-read stopped');
      return;
    }

    if (
      lower.includes('start auto read') || 
      lower.includes('enable auto read') || 
      lower.includes('turn on auto read') || 
      lower.includes('auto read on')
    ) {
      setAutoReadEnabled(true);
      speakText('Automatic page reading is now started.');
      setActionMessage('Auto-read started');
      return;
    }

    if (lower.includes('toggle auto read')) {
      setAutoReadEnabled(prev => {
        const next = !prev;
        speakText(next ? 'Automatic page reading is now started.' : 'Automatic page reading is now stopped.');
        setActionMessage(next ? 'Auto-read started' : 'Auto-read stopped');
        return next;
      });
      return;
    }

    if (lower.includes('stop') || lower.includes('pause') || lower.includes('be quiet') || lower.includes('shut up') || lower.includes('quiet')) {
      stopSpeaking();
      setActionMessage('Stopped');
      return;
    }

    if (lower.includes('help') || lower.includes('what can you do') || lower.includes('commands') || lower.includes('guide')) {
      readHelp();
      return;
    }

    if (lower.includes('summary') || lower.includes('summarize') || lower.includes('brief') || lower.includes('overview')) {
      readPageSummary();
      return;
    }

    if (lower.includes('complete') || lower.includes('full page') || lower.includes('whole page') || lower.includes('entire page') || lower.includes('everything') || lower.includes('all content') || lower.includes('read all')) {
      readFullPage();
      return;
    }

    if (lower.includes('read page') || lower.includes('read this') || lower.includes('read content') || lower.includes('read highlights')) {
      readCurrentPage();
      return;
    }

    if (lower.includes('menu') || lower.includes('list pages') || lower.includes('all pages') || lower.includes('navigation') || lower.includes('list navigation')) {
      readMainMenu();
      return;
    }

    if (lower.includes('services sub') || (lower.includes('sub') && lower.includes('service'))) {
      readSubMenu('services');
      return;
    }
    if (lower.includes('products sub') || (lower.includes('sub') && lower.includes('product'))) {
      readSubMenu('products');
      return;
    }
    if (lower.includes('trainings sub') || (lower.includes('sub') && lower.includes('training'))) {
      readSubMenu('trainings');
      return;
    }

    if (lower.includes('scroll down') || lower.includes('go down')) {
      window.scrollBy({ top: 500, behavior: 'smooth' });
      setActionMessage('Scrolled down');
      speakText('Scrolled down.');
      return;
    }
    if (lower.includes('scroll up') || lower.includes('go to top') || lower.includes('top of page')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActionMessage('Scrolled to top');
      speakText('Back to top.');
      return;
    }

    if (lower === 'home' || lower.includes('go home') || lower.includes('go to home')) {
      navigateWithSpeech('/', 'Opening the Home page.', 'Opening Home');
      return;
    }
    if (lower.includes('about') || lower.includes('who are you') || lower.includes('company info')) {
      navigateWithSpeech('/about', 'Opening the About Us page.', 'Opening About');
      return;
    }
    if (lower.includes('web development') || lower.includes('web dev')) {
      navigateWithSpeech('/services/web-development', 'Opening Web Development services.', 'Opening Web Development');
      return;
    }
    if (lower.includes('app development') || lower.includes('mobile app') || lower.includes('mobile development')) {
      navigateWithSpeech('/services/app-development', 'Opening Mobile App Development services.', 'Opening App Development');
      return;
    }
    if (lower.includes('resource sharing') || lower.includes('tech resource')) {
      navigateWithSpeech('/services/tech-resource-sharing', 'Opening Tech Resource Sharing services.', 'Opening Resource Sharing');
      return;
    }
    if (lower.includes('test service') || lower.includes('sqa service') || lower.includes('testing service')) {
      navigateWithSpeech('/services/test-service', 'Opening SQA and Testing services.', 'Opening Test Service');
      return;
    }
    if (lower.includes('service') || lower.includes('services')) {
      navigateWithSpeech('/services', 'Opening the Services section.', 'Opening Services');
      return;
    }
    if (lower.includes('sqa training') || lower.includes('sqa') || lower.includes('automation training') || lower.includes('selenium')) {
      navigateWithSpeech('/trainings/sqa-training', 'Opening SQA Automation Training program.', 'Opening SQA Training');
      return;
    }
    if (lower.includes('dot net') || lower.includes('.net') || lower.includes('dotnet')) {
      navigateWithSpeech('/trainings/dot-net-training', 'Opening Dot Net Core Training program.', 'Opening .NET Training');
      return;
    }
    if (lower.includes('spring boot') || lower.includes('microservice')) {
      navigateWithSpeech('/trainings/spring-boot-training', 'Opening Spring Boot and Microservices Training.', 'Opening Spring Boot Training');
      return;
    }
    if (lower.includes('training') || lower.includes('trainings') || lower.includes('course') || lower.includes('courses')) {
      navigateWithSpeech('/trainings', 'Opening the Trainings section.', 'Opening Trainings');
      return;
    }
    if (lower.includes('pharma')) {
      navigateWithSpeech('/products/pharma-eureka', 'Opening Pharma Eureka ERP.', 'Opening Pharma Eureka');
      return;
    }
    if (lower.includes('con eureka') || lower.includes('chemical')) {
      navigateWithSpeech('/products/con-eureka', 'Opening Con Eureka ERP for chemical manufacturing.', 'Opening Con Eureka');
      return;
    }
    if (lower.includes('leather')) {
      navigateWithSpeech('/products/leather-eureka', 'Opening Leather Eureka ERP.', 'Opening Leather Eureka');
      return;
    }
    if (lower.includes('hrms') || lower.includes('human resource') || lower.includes('hr system')) {
      navigateWithSpeech('/products/human-resource-management-system', 'Opening the Human Resource Management System.', 'Opening HRMS');
      return;
    }
    if (lower.includes('web product')) {
      navigateWithSpeech('/products/web-products', 'Opening Web Products.', 'Opening Web Products');
      return;
    }
    if (lower.includes('app product') || lower.includes('mobile product')) {
      navigateWithSpeech('/products/app-products', 'Opening App Products.', 'Opening App Products');
      return;
    }
    if (lower.includes('customized') || lower.includes('custom software')) {
      navigateWithSpeech('/products/customized-software', 'Opening Customized Software solutions.', 'Opening Customized Software');
      return;
    }
    if (lower.includes('product') || lower.includes('products')) {
      navigateWithSpeech('/products', 'Opening the Products section.', 'Opening Products');
      return;
    }
    if (lower.includes('gallery') || lower.includes('photos') || lower.includes('pictures')) {
      navigateWithSpeech('/gallery', 'Opening the Photo Gallery.', 'Opening Gallery');
      return;
    }
    if (lower.includes('team') || lower.includes('our team') || lower.includes('staff')) {
      navigateWithSpeech('/team', 'Opening the Team page.', 'Opening Team');
      return;
    }
    if (lower.includes('career') || lower.includes('job') || lower.includes('vacancy') || lower.includes('hire')) {
      navigateWithSpeech('/career', 'Opening the Careers page.', 'Opening Career');
      return;
    }
    if (lower.includes('blog') || lower.includes('article') || lower.includes('read blog')) {
      navigateWithSpeech('/blog', 'Opening the Engineering Blog.', 'Opening Blog');
      return;
    }
    if (lower.includes('feedback') || lower.includes('review') || lower.includes('rating')) {
      navigateWithSpeech('/feedback', 'Opening the Feedback portal.', 'Opening Feedback');
      return;
    }
    if (lower.includes('contact') || lower.includes('reach') || lower.includes('phone') || lower.includes('email')) {
      navigateWithSpeech('/contact', 'Opening the Contact page. You can reach us by phone at plus eight eight zero one three two six eight nine two four three seven, or by email at info at Tech Eureka dot com.', 'Opening Contact');
      return;
    }
    if (lower.includes('register') || lower.includes('enroll') || lower.includes('sign up')) {
      navigateWithSpeech('/registration', 'Opening the Training Registration form.', 'Opening Registration');
      return;
    }
    if (lower.includes('login') || lower.includes('log in') || lower.includes('sign in') || lower.includes('portal')) {
      navigateWithSpeech('/login', 'Opening the Login portal.', 'Opening Login');
      return;
    }

    speakText(`Sorry, I did not understand that. Say "help" to hear all available voice commands.`);
    setActionMessage(`Heard: "${cmd.slice(0, 40)}"`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, readHelp, readPageSummary, readFullPage, readCurrentPage, readMainMenu, readSubMenu, speakText, stopSpeaking, navigateWithSpeech]);

  // ─── Start Listening (MediaRecorder + Native preview) ─────────────────────
  const startListening = useCallback(() => {
    isHoldingJRef.current = true;
    currentTranscriptRef.current = '';
    setTranscript('');
    stopSpeaking();
    playBeep('start');
    setIsListening(true);
    setActionMessage('Listening… speak while holding J');

    // Start raw audio recording via MediaRecorder for Whisper STT with noise suppression
    if (typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          channelCount: 1,
          sampleRate: { ideal: 48000 },
        },
      }).then((stream) => {
        mediaStreamRef.current = stream;
        try {
          const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
            ? 'audio/webm;codecs=opus'
            : MediaRecorder.isTypeSupported('audio/webm')
            ? 'audio/webm'
            : '';
          const recorder = mimeType 
            ? new MediaRecorder(stream, { mimeType, audioBitsPerSecond: 128000 }) 
            : new MediaRecorder(stream, { audioBitsPerSecond: 128000 });
          audioChunksRef.current = [];
          
          recorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) {
              audioChunksRef.current.push(e.data);
            }
          };

          recorder.start(100);
          mediaRecorderRef.current = recorder;
        } catch (recErr) {
          console.warn('MediaRecorder init error:', recErr);
        }
      }).catch((streamErr) => {
        console.warn('Microphone stream error, falling back to Web Speech API:', streamErr);
      });
    }

    // Start native speech recognition as real-time visual feedback
    try {
      recognitionRef.current?.start();
    } catch (e) {}
  }, [stopSpeaking]);

  // ─── Stop Listening (Triggers Whisper STT ➔ Ollama Agent Execution) ───────
  const stopListening = useCallback(() => {
    isHoldingJRef.current = false;
    setIsListening(false);
    playBeep('stop');

    // Stop native recognition
    try {
      recognitionRef.current?.stop();
    } catch (e) {}

    // Finalize MediaRecorder audio stream
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.onstop = async () => {
        const mimeType = mediaRecorderRef.current?.mimeType || 'audio/webm';
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });

        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach((track) => track.stop());
          mediaStreamRef.current = null;
        }

        if (audioBlob.size > 1200) {
          await processAudioWithAgent(audioBlob);
        } else {
          const finalCmd = currentTranscriptRef.current.trim();
          if (finalCmd) {
            await processTranscriptWithAgent(finalCmd);
          } else {
            setActionMessage('Ready — Press F to read, Hold J to speak');
          }
        }
      };

      try {
        mediaRecorderRef.current.stop();
      } catch (e) {}
    } else {
      const finalCmd = currentTranscriptRef.current.trim();
      if (finalCmd) {
        processTranscriptWithAgent(finalCmd);
      } else {
        setActionMessage('Ready — Press F to read, Hold J to speak');
      }
    }
  }, [processAudioWithAgent, processTranscriptWithAgent]);

  // ─── Keyboard shortcuts (F for read/pause, J for push-to-talk) ────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleReadPage();
      } else if (e.key.toLowerCase() === 'j') {
        e.preventDefault();
        if (e.repeat) return;
        stopSpeaking();
        if (!isListening && !isProcessing) startListening();
      } else if (e.key === 'Escape') {
        stopSpeaking();
        if (isListening) stopListening();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key.toLowerCase() === 'j') {
        e.preventDefault();
        if (isListening) stopListening();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isSpeaking, isPaused, isListening, isProcessing, toggleReadPage, startListening, stopListening, stopSpeaking]);

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 select-none" role="region" aria-label="Voice Assistant">

      {/* Floating Pill when minimized */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#070d1e]/90 hover:bg-[#0b132b] text-white border border-[#7dc535]/40 shadow-2xl shadow-[#7dc535]/15 backdrop-blur-xl transition-all duration-300 hover:scale-105"
          aria-label="Open Voice Assistant. Press F to read page, hold J to speak a command."
          title="Voice Assistant — Press F to read, Hold J to speak"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7dc535] animate-ping absolute"></span>
            <div className="p-1.5 rounded-full bg-[#7dc535] text-[#070d1e]">
              <Mic className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              Voice Navigator 
              <span className="text-[10px] text-[#7dc535] font-normal">• Active</span>
            </span>
            <span className="text-[10px] text-slate-400">[F] Read · [J] Hold to Talk · [Esc] Stop</span>
          </div>
        </button>
      ) : (

        /* Full Panel */
        <div className="w-[calc(100vw-2rem)] max-w-[22rem] sm:w-88 sm:max-w-sm flex flex-col rounded-2xl glass-panel-glow border border-[#7dc535]/30 shadow-2xl backdrop-blur-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200" style={{ maxHeight: 'min(90vh, 640px)' }}>

          {/* Header */}
          <div className="p-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-[#7dc535]/20 text-[#7dc535]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  Voice Agent
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-[#7dc535] border border-emerald-500/30">
                    Qwen + Whisper
                  </span>
                </h3>
                <p className="text-[10px] text-slate-400">Accessibility Audio Agent · Tech Eureka</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => { isHelpOpen ? setIsHelpOpen(false) : readHelp(); setIsHelpOpen(v => !v); }}
                className={`p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors ${isHelpOpen ? 'text-[#7dc535] bg-white/10' : ''}`}
                title="Voice Command Guide — or say Help"
                aria-label="Toggle voice command guide"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsSettingsOpen(v => !v)}
                className={`p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors ${isSettingsOpen ? 'text-[#7dc535] bg-white/10' : ''}`}
                title="Voice Settings"
                aria-label="Open voice settings"
              >
                <Sliders className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Minimize"
                aria-label="Minimize voice assistant"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Help Overlay */}
          {isHelpOpen && (
            <div className="p-3.5 bg-black/90 border-b border-white/10 space-y-2 text-xs text-slate-300 max-h-72 overflow-y-auto">
              <div className="flex items-center justify-between text-white font-semibold pb-1 border-b border-white/10">
                <span>Voice Command Guide</span>
                <button onClick={() => setIsHelpOpen(false)} aria-label="Close help" className="text-slate-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="text-[#7dc535] font-semibold text-[10px] uppercase tracking-wider">Keyboard</div>
                <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#7dc535] text-[10px] self-start">F</kbd>
                  <span>Read page · Pause · Resume</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#7dc535] text-[10px] self-start">J</kbd>
                  <span>Hold to record, release to execute command.</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#7dc535] text-[10px] self-start">Esc</kbd>
                  <span>Stop reading or listening at any time.</span>
                </div>

                <div className="text-[#7dc535] font-semibold text-[10px] uppercase tracking-wider pt-1">Reading &amp; Auto-Read</div>
                <ul className="space-y-0.5 text-slate-300 list-none">
                  <li>🔉 "Read summary" — short page description</li>
                  <li>📖 "Read complete page" — full page content</li>
                  <li>📄 "Read page" — key headings and paragraphs</li>
                  <li>⏹ "Stop" — silence immediately</li>
                  <li>🔇 "Stop auto read" — disable reading on page changes</li>
                  <li>🔊 "Start auto read" — enable reading on page changes</li>
                </ul>

                <div className="text-[#7dc535] font-semibold text-[10px] uppercase tracking-wider pt-1">Menu &amp; Navigation</div>
                <ul className="space-y-0.5 text-slate-300 list-none">
                  <li>🗂 "Read the menu" — hear all main pages</li>
                  <li>📂 "Sub menu of Services" — hear service pages</li>
                  <li>📂 "Sub menu of Products" — hear product pages</li>
                  <li>📂 "Sub menu of Trainings" — hear courses</li>
                  <li>🏠 "Go to Home" / "Open About"</li>
                  <li>⚡ "Go to Services" / "Open Pharma"</li>
                  <li>🎓 "Open SQA Training" / "Dot Net" / "Spring Boot"</li>
                  <li>📞 "Open Contact" / "Register" / "Login"</li>
                </ul>

                <div className="text-[#7dc535] font-semibold text-[10px] uppercase tracking-wider pt-1">Scroll</div>
                <ul className="space-y-0.5 text-slate-300 list-none">
                  <li>⬇ "Scroll down" — scroll down the page</li>
                  <li>⬆ "Scroll up" or "Go to top" — jump to top</li>
                </ul>

                <div className="text-[10px] text-slate-500 pt-1 border-t border-white/5 mt-1">
                  Say <strong className="text-slate-300">"Help"</strong> anytime to hear this guide read aloud.
                </div>
              </div>
            </div>
          )}

          {/* Settings Overlay */}
          {isSettingsOpen && (
            <div className="p-3.5 bg-black/90 border-b border-white/10 space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between text-white font-semibold pb-1 border-b border-white/10">
                <span>Voice Settings</span>
                <button onClick={() => setIsSettingsOpen(false)} aria-label="Close settings" className="text-slate-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {availableVoices.length > 0 && (
                <div className="space-y-1">
                  <label htmlFor="voice-select" className="text-[11px] text-slate-400">Voice (Female Natural):</label>
                  <select
                    id="voice-select"
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full p-1.5 rounded-lg bg-white/10 text-white text-xs border border-white/10 focus:outline-none"
                  >
                    {availableVoices
                      .filter(v => v.lang.startsWith('en') && !isMaleVoice(v.name))
                      .map((v, i) => (
                        <option key={i} value={v.name} className="bg-slate-900 text-white">
                          {v.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <label htmlFor="rate-slider">Reading Speed:</label>
                  <span className="text-[#7dc535] font-mono">{speechRate}×</span>
                </div>
                <input id="rate-slider" type="range" min="0.7" max="1.3" step="0.05" value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  className="w-full accent-[#7dc535]"
                  aria-label="Speech reading speed"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <label htmlFor="pitch-slider">Voice Pitch:</label>
                  <span className="text-[#7dc535] font-mono">{speechPitch}</span>
                </div>
                <input id="pitch-slider" type="range" min="0.8" max="1.3" step="0.05" value={speechPitch}
                  onChange={(e) => setSpeechPitch(parseFloat(e.target.value))}
                  className="w-full accent-[#7dc535]"
                  aria-label="Speech voice pitch"
                />
              </div>

              <div className="pt-1 border-t border-white/10 flex items-center justify-between">
                <label htmlFor="auto-read-toggle" className="text-[11px] text-slate-300 cursor-pointer">
                  Auto-read page on navigation:
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input id="auto-read-toggle" type="checkbox" checked={autoReadEnabled}
                    onChange={(e) => setAutoReadEnabled(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle automatic page reading on navigation"
                  />
                  <div className="w-8 h-4 bg-white/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#7dc535]"></div>
                </label>
              </div>
            </div>
          )}

          {/* Main Body — scrollable */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

            {/* Status Bar */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5" aria-live="polite" aria-atomic="true">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isProcessing ? 'bg-amber-400 animate-spin' : isSpeaking ? 'bg-sky-400 animate-pulse' : isListening ? 'bg-red-500 animate-ping' : 'bg-[#7dc535]'}`}></span>
                <span className="text-xs font-medium text-white">
                  {isProcessing
                    ? 'Reasoning with Agent…'
                    : isSpeaking
                    ? isPaused ? 'Paused — Press F to resume' : 'Reading aloud…'
                    : isListening ? 'Listening… Release J when done'
                    : 'Ready'}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                  {agentSource === 'whisper-ollama' ? 'AI Agent' : 'Fast STT'}
                </span>
              </div>
            </div>

            {/* Action / Transcript card */}
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs" aria-live="polite">
              <div className="text-[10px] text-[#7dc535] font-semibold uppercase tracking-wider mb-1">
                {actionMessage}
              </div>
              <div className="text-slate-300 italic min-h-[1.25rem]">
                {transcript ? `"${transcript}"` : 'Hold J anywhere to speak a command…'}
              </div>
            </div>

            {/* Reading Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={readPageSummary}
                className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white/8 hover:bg-white/15 text-white text-[11px] font-medium border border-white/10 transition-colors"
                aria-label="Read a short summary of this page"
                title="Say: Read summary"
              >
                <Volume2 className="w-3.5 h-3.5 text-[#7dc535]" />
                <span>Read Summary</span>
              </button>
              <button
                onClick={readFullPage}
                className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white/8 hover:bg-white/15 text-white text-[11px] font-medium border border-white/10 transition-colors"
                aria-label="Read the complete page content in full"
                title="Say: Read full page"
              >
                <Play className="w-3.5 h-3.5 text-sky-400" />
                <span>Read Complete</span>
              </button>
            </div>

            {/* Pause / Stop row */}
            {isSpeaking && (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { synthRef.current?.pause(); setIsPaused(true); setActionMessage('Paused — Press F to resume'); }}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-[11px] font-medium border border-amber-500/25 transition-colors"
                  aria-label="Pause reading"
                >
                  <Pause className="w-3.5 h-3.5" /><span>{isPaused ? 'Paused' : 'Pause'}</span>
                </button>
                <button
                  onClick={stopSpeaking}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-400 text-[11px] font-medium border border-red-500/25 transition-colors"
                  aria-label="Stop reading"
                >
                  <X className="w-3.5 h-3.5" /><span>Stop</span>
                </button>
              </div>
            )}
            {isSpeaking && isPaused && (
              <button
                onClick={() => { synthRef.current?.resume(); setIsPaused(false); setActionMessage('Resumed reading'); }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#7dc535]/15 hover:bg-[#7dc535]/25 text-[#7dc535] text-[11px] font-medium border border-[#7dc535]/30 transition-colors"
                aria-label="Resume reading"
              >
                <Play className="w-3.5 h-3.5" /><span>Resume Reading</span>
              </button>
            )}

            {/* Push-to-Talk Button */}
            <button
              onPointerDown={(e) => { e.preventDefault(); if (!isListening && !isProcessing) startListening(); }}
              onPointerUp={(e) => { e.preventDefault(); if (isListening) stopListening(); }}
              onPointerLeave={() => { if (isHoldingJRef.current) stopListening(); }}
              className={`w-full flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-semibold text-xs transition-all ${
                isProcessing
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : isListening
                  ? 'bg-red-500/25 text-red-300 border-2 border-red-500/60 animate-pulse'
                  : 'btn-brand'
              }`}
              aria-label={isListening ? 'Release to process command' : 'Hold to speak a voice command'}
              title="Hold J key anywhere to speak"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="text-amber-300">Processing with Agent…</span>
              ) : isListening ? (
                <><MicOff className="w-4 h-4" /><span className="text-red-300">Listening… Release to Send</span></>
              ) : (
                <><Mic className="w-4 h-4 text-slate-950" /><span className="text-slate-950">Hold J to Speak</span></>
              )}
            </button>

            {/* Quick Navigation Chips */}
            <div className="space-y-1.5">
              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Quick Commands:</div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: '🗂 Menu', cmd: 'read the menu' },
                  { label: '📄 Summary', cmd: 'read summary' },
                  { label: '📖 Full Page', cmd: 'read complete page' },
                  { label: autoReadEnabled ? '🔇 Stop Auto-Read' : '🔊 Start Auto-Read', cmd: autoReadEnabled ? 'stop auto read' : 'start auto read' },
                  { label: '⚡ Services', cmd: 'services' },
                  { label: '📦 Products', cmd: 'products' },
                  { label: '🎓 Trainings', cmd: 'trainings' },
                  { label: 'ℹ️ About', cmd: 'about' },
                  { label: '📞 Contact', cmd: 'contact' },
                  { label: '❓ Help', cmd: 'help' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => processTranscriptWithAgent(item.cmd)}
                    className="px-2 py-1 rounded-lg bg-white/5 hover:bg-[#7dc535]/20 hover:text-[#7dc535] text-[11px] text-slate-300 border border-white/5 transition-colors"
                    aria-label={`Quick command: ${item.cmd}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
