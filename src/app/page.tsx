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
      <form action="">
        <h2>Upload your mp3 file</h2>
        <input name="file" type="file"/>
      </form>
    </main>
  )
}
