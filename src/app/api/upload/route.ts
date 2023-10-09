import { writeFile, readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

import { transcribe } from "../whisper/route";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: any | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  try {
    const tempFilePath = `src/app/temporary/uploaded_audio.wav`; // Change the file extension if necessary

    const buffer = Buffer.from(await file.arrayBuffer());

    await writeFile(tempFilePath, buffer);

    const transcriptionResult = await transcribe(tempFilePath);

    return NextResponse.json({
      success: true,
      transcription: transcriptionResult,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
