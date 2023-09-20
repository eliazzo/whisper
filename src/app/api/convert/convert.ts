const openAI = require('openai');
const fs = require('fs');
// // const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
// // const ffmpeg = require("fluent-ffmpeg");
// const filePath = "src/app/Apollinaire-Guillaume_01_Le-Pont-Mirabeau_1913.mp3"



// // @ts-ignore
// async function transcribeAudio(filename) {
//   try {
//     const transcript = await openai.audio.transcribe("whisper-1", {
//       audio: {
//         stream: fs.createReadStream(filename),
//       },
//     });
//     console.log(transcript.data.text)
//     return transcript.data.text;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error; // You can choose to handle the error as needed
//   }
// }

//   const transcription = transcribeAudio(filePath);
//   console.log('Transcription:', transcription);



// Replace '/path/to/file/audio.mp3' with the actual path to your audio file
const audioFilePath = "src/app/Apollinaire-Guillaume_01_Le-Pont-Mirabeau_1913.mp3";

// Create a Readable Stream from the audio file
const audioStream = fs.createReadStream(audioFilePath);
console.log(audioStream)
// Set your OpenAI API key (replace 'YOUR_API_KEY_HERE' with your actual API key)
const openaiClient = new openAI({
  apiKey: "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"
})


async function transcribeAudio() {
  try {
    // Transcribe the audio using the Whisper model
    const transcript = await openaiClient.Audio.create({
      model: "whisper-1",
      audio: {
        stream: audioStream,
      },
    });

    // Access the transcribed text
    console.log('Transcription:', transcript.data.text);
  } catch (error) {
    console.error('Error:', error);
    // Handle the error as needed
  }
}

// Call the transcribeAudio function to perform the transcription
transcribeAudio();
