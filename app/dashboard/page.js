"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const ai = new GoogleGenAI({apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY})

export default  function Dashboard() {
     
    async function generateText(){
        setLoading(true)
        try{
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: userPrompt,
            })
            setLoading(false)
            setGeneratedText(response.text)
        }
        catch(error){
            setLoading(false)
        }
        
    }
    const [userPrompt,setUserPrompt] = useState("")
    const [loading,setLoading] = useState(false)
    const [generatedText,setGeneratedText] = useState("")
    const handleChange = (e) => {
        setUserPrompt(e.target.value)
    }
    return (
        <div className="min-h-screen p-4 pb-6 w-full flex items-end justify-center bg-zinc-900">
        <div className="">
        <section className="p-4">
        <div className="w-full">
        {generatedText && <pre className="max-w-[500px] overflow-auto text-white">{generatedText}</pre>}
        </div>
            
            </section>
            <section className="border-white  rounded-4xl p-2 bg-zinc-800">
                <div>
                    <Textarea className={`w-2xl border-none outline-[0px] text-white max-h-[200px] resize-none focus`}  onChange={handleChange}/>
                </div>
                <div className="flex justify-end p-2"><Button disabled={loading} onClick={generateText}>Generate</Button></div>
            </section>
        </div>
            
        </div>
    )
}