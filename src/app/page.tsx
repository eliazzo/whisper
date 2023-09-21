"use client"

import { useState, useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const getTranscription = async () => {
      const response = await(fetch("/api/whisper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ key: "./src/app/Apollinaire-Guillaume_01_Le-Pont-Mirabeau_1913.mp3" }) 
      }))
      if (response.ok) {
      const data = await response.json()
      console.log(data)
      }
    }
    getTranscription()
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Convert audio to text</h1>
      <p>"src/app/Apollinaire-Guillaume_01_Le-Pont-Mirabeau_1913.mp3</p>
    </main>
  )
}
