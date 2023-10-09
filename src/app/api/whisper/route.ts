import OpenAI from "openai";
import fs from "fs";

const configuration = { apiKey: process.env.OPENAI_API_KEY };

const openai = new OpenAI(configuration);

export async function transcribe(upload: any) {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(upload),
    model: "whisper-1",
  });

  console.log(transcription.text);
}
