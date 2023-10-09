"use client"

import { useState } from "react";
import { FormEvent } from 'react'



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

const [file, setFile] = useState<File>()
 async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!file) return
  
    try {
    const formData = new FormData(event.currentTarget)
    formData.set('file', file)
  
   const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    }
    catch (e: any) {
      // Handle errors here
      console.error(e)
    }

 }
  

  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <form onSubmit={handleFormSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Upload" />
    </form>
    </main>
  )
}
