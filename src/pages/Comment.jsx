import React, { useContext, useEffect, useRef, useState } from "react";
import { LangContext } from "../App";


function Comment() {
    const [areaText, setAreaText] = useState("")
    
    const handleTextArea = (e) => setAreaText(e.target.value)
    
    const langs = useContext(LangContext);
    
    const textSelect = useRef(null)
    const textAreaRef = useRef(null)
    
    const handleSubmit = async () => {
        
        const botToken = import.meta.env.VITE_BOT_TOKEN;
        const chatId = import.meta.env.VITE_CHAT_ID;
        if(areaText.length){

            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `${areaText}\nlang:${textSelect.current.value}`,
                }),
            });
            alert("Habar yuborildi")
            setAreaText(""); 
        }
    };
    
    useEffect(() => {
        textAreaRef.current.focus()
    })

    return (
        <div className="flex flex-col items-center gap-5 mt-5">
            <div className="w-[600px]">
                <select ref={textSelect} name="lang" id="lang" className="w-[600px] border rounded">
                    {langs.map((lang) => {
                        return (
                            <option key={lang.val} value={lang.val}>{lang.val.toUpperCase()}</option>
                        )
                    })}
                </select>
            </div>
            < textarea className="w-[1000px] h-50 border rounded p-2.5" ref={textAreaRef} value={areaText} onChange={handleTextArea} />
            <button className="border rounded px-4 py-1 active:bg-blue-200" onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}

export default Comment