import Configuration from "openai";
import OpenAIApi from "openai";
import fs from 'fs';
import { NextResponse } from "next/server";


const configuration = new Configuration({
    apiKey:"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",
  });
// @ts-ignore
  const openai = new OpenAIApi(configuration);

  export const POST = async (req: Request) => {
    console.log("run POST")

    // Check if the OpenAI API key is configured
    if (!configuration.apiKey) {
      return NextResponse.json({ error: "OpenAI API key not configured, please follow instructions in README.md" }, {status:500});
    }
  try {
    // Convert the audio data to text
    const audioFile = "./src/app/Apollinaire-Guillaume_01_Le-Pont-Mirabeau_1913.mp3"
    const audioData = fs.readFileSync(audioFile);
    //@ts-ignore
    // const response = await openai.createTranscription(fs.createReadStream(audioFile) as any, 'whisper-1');
    const transcription = await openai.createTranscription({
      audio: audioData.toString("base64"),
      model: "whisper-1",
    });
    // The API response contains the transcribed text
    const transcribedText = transcription.text;
    console.log('transcribed text:', transcribedText)
    return transcribedText;
   
  } 

  catch(error) {
    // Handle any errors that occur during the request


    if (error.response) {
      console.error(error.response.status, error.response.data);
      return NextResponse.json({ error: error.response.data }, {status:500});
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return NextResponse.json({ error: "An error occurred during your request." }, {status:500});
    }
  }
}




  


 


