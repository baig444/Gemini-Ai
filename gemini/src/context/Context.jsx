/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext()


const ContextProvider = (props) => {
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayPara = (index,next) => {
        setTimeout(() => {
            setResultData((prev) => prev + next);
        }, 100 * index)
    }

    const onSent = async (input) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        setPrevPrompt((prev) => [...prev, input]);
    const response = await runChat(input);

    let responseArray = response.split("**");
    let newResponse="";
    for(let i=0; i<responseArray.length; i++){
        {
            if(i === 0 || i%2  !== 1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }
    }
   let newResponse2 = newResponse.split("*").join("<br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
        const next = newResponseArray[i];
        delayPara(i, next+ " ");
    }
    setLoading(false);
    setInput("");
    }
         

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        onSent,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData
}

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider