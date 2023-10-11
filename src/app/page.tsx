"use client";

import React from "react";
import { useState } from "react";
import { FormEvent } from "react";
import "./globals.css";

export interface Result {
  success: boolean;
  transcription: string; 
}

export default function Home() {
  const [file, setFile] = useState<File>();
  const [text, setText] = useState<string[]>([]);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file) return;
    try {
      const formData = new FormData(event.currentTarget);
      formData.set("file", file);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data: Result = await response.json(); // Use the ApiResponse interface
      const dataArr = data.transcription.split('\n');
      setText(dataArr);
    } catch (e: any) {
      console.error(e);
    }
  }

  return (
    <main>
      <div className="py-10 px-10 text-center">
        <h1>Upload audio file to convert to text</h1>
      <form className="py-10 px-10 border-black border-2 flex flex-col mt-5 justify-center items-center" onSubmit={handleFormSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit" value="Upload" className="mt-5 py-2 px-5 rounded-full border-black border-2">Submit</button>
      </form>
      {text && <p className="py-10 px-10 mt-10 border-black border-2">{text}</p>}
      {/* <p className="py-10 px-10 mt-10 border-black border-2">temporary</p> */}
      </div>
    </main>
  );
}
