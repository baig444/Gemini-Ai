/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";
import { UserButton, useUser } from "@clerk/clerk-react";
import { PiSignInLight } from "react-icons/pi";
import { Link } from "react-router-dom";


const Main = () => {
  const {user} = useUser()
  const {
    onSent,
    resultData,
    recentPrompt,
    setRecentPrompt,
    setInput,
    setShowResult,
    loading,
    showResult,
    setLoading,
    input,
    prevPrompt,
    setPrevPrompt,
  } = useContext(Context);
  return (
    <div className="h-screen flex-1">
      <div className="flex items-center justify-between font-[22px] p-6 text-[#585858]">
        <h1 className="text-2xl">Gemini</h1>
        {
          user ? <UserButton/> : <Link to={"/signin"}><PiSignInLight size={30} className="cursor-pointer" /></Link>


        }
      </div>
      <div className="main max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="greet my-2 mx-0 leading-[60px] text-[56px] font-medium text-[#c4c7c5] max-sm:px-4">
              <p>
                <span>Hello, {user?.firstName}</span>
              </p>
              <p>How can I help you Today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readibility of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="flex items-center gap-3">
              {
                user ? <img src={user.profileImageUrl} alt="" className="w-8 rounded-full" /> : null
              }
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-3 mt-6">
              <img src={assets.gemini_icon} alt="" className="w-10" />
              {loading
              ? <div className="loader w-full flex flex-col gap-3">
              <hr/>
              <hr/>
              <hr/>
              </div>
              : <p className="text-[17px] font-normal leading-7" dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
              
            </div>
          </div>
        )}

<div className="sm:absolute bottom-4 w-full max-w-[900px] px-[20px] md:absolute">
  <div className="flex items-center justify-between bg-[#f0f4f9] py-4 px-[20px] rounded-full">
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="text"
      placeholder="Enter a Prompt Here"
      className="flex-1 bg-transparent border-none outline-none p-[3px] text-[18px] max-sm:flex-none max-sm:w-[150px]"
    />
    <div className="flex items-center gap-3">
      <img src={assets.gallery_icon} alt="" className="w-[24px]" />
      <img src={assets.mic_icon} alt="" className="w-[24px]" />
      <img
        onClick={() => onSent(input)}
        src={assets.send_icon}
        alt=""
        className="w-[24px] cursor-pointer"
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Main;
