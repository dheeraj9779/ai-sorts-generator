"use client"
import { Textarea } from "@/components/ui/textarea";
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const ai = new GoogleGenAI({apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY})

export default function Dashboard() {
    const [userPrompt,setUserPrompt] = useState("")
    const handleChange = (e) => {
        setUserPrompt(e.target.value)
    }
    return (
        <div className="min-h-screen p-4 pb-6 w-full flex items-end justify-center">
            <div>
                <Textarea className={`w-2xl border-black`} onChange={handleChange}/>
            </div>
        </div>
    )
}