"use client"

import { useEffect } from "react";
import upload from "./api/upload/route";


export default function Home() {

  // useEffect(() => {
  //   const getTranscription = async () => {
  //     const response = await(fetch("/api/whisper", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ key: "./src/app/Apollinaire-Guillaume_01_Le-Pont-Mirabeau_1913.mp3" }) 
  //     }))
  //     if (response.ok) {
  //     const data = await response.json()
  //     console.log(data)
  //     }
  //   }
  //   getTranscription()
  // })

 async function handleFormSubmit(event: any) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const form = event.target;
    const formData = new FormData(form);
  
   await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API route
        if (data.message) {
          // Show a success message or perform any other actions
          console.log(data.message);
        } else {
          // Handle errors from the API route
          console.error(data.error);
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error('Error:', error);
      });
  }
  

  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action="/api/upload" method="POST" onSubmit={(event) => handleFormSubmit(event)}>
        <h2>Upload your mp3 file</h2>
        <input name="file" type="file"/>
        <input type="submit" value="Upload File"></input>
      </form>
    </main>
  )
}
