import { NextRequest, NextResponse } from 'next/server';

const STT_SERVICE_URL = process.env.STT_SERVICE_URL || 'http://localhost:8000';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('file') as Blob | null;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided in request' },
        { status: 400 }
      );
    }

    // Prepare outgoing formData to the Python STT service
    const outgoingFormData = new FormData();
    outgoingFormData.append('file', audioFile, 'recording.webm');

    // Call the Python faster-whisper STT service
    const sttResponse = await fetch(`${STT_SERVICE_URL}/transcribe?language=en`, {
      method: 'POST',
      body: outgoingFormData,
      headers: {
        // fetch handles multipart/form-data boundary automatically when passing FormData
      },
    });

    if (!sttResponse.ok) {
      const errText = await sttResponse.text();
      console.warn(`[STT Service Error]: ${sttResponse.status} - ${errText}`);
      return NextResponse.json(
        { error: 'STT service transcription failed', details: errText },
        { status: sttResponse.status }
      );
    }

    const data = await sttResponse.json();
    return NextResponse.json({
      text: data.text || '',
      language: data.language || 'en',
      duration: data.duration || 0,
    });
  } catch (error: any) {
    console.warn('[STT Service Connection Failed]:', error?.message);
    return NextResponse.json(
      {
        error: 'Unable to reach local Python STT service at ' + STT_SERVICE_URL,
        fallback: true,
      },
      { status: 503 }
    );
  }
}
