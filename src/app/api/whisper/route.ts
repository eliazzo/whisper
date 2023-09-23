import OpenAI from "openai";
import fs from "fs";

// const configuration = ({ apiKey: process.env.OPENAI_API_KEY });


const openai = new OpenAI({ apiKey: "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" } );

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("src/app/Apollinaire-Guillaume_01_Le-Pont-Mirabeau_1913.mp3"),
    model: "whisper-1",
  });

  console.log(transcription.text);
}
main();



 


