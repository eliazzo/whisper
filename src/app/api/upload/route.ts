import { writeFile } from 'fs/promises'

import { NextRequest, NextResponse } from 'next/server'

import { transcribe } from '../whisper/route'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)


  try {
    // Call your main function with the uploaded file
    // const transcriptionResult = await transcribe(buffer);
    console.log(bytes)
    const transcriptionResult = "hello"

    return NextResponse.json({ success: true, transcription: transcriptionResult });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}


