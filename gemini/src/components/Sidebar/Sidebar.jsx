import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
function Sidebar() {
    const [open, setOpen] = useState(false);
    const {prevPrompt} = useContext(Context)
  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] max-sm:hidden">
      <div className="topbar">
        <img onClick={() => setOpen(!open)} className="block ml-[6px] cursor-pointer" src={assets.menu_icon} alt="" />
        <div className="mt-[50px] inline-flex items-center gap-[10px] bg-[#e6eaf1] rounded-[50px]  text-gray-600 cursor-pointer p-2 px-3" onClick={() => window.location.reload()}>
          <img src={assets.plus_icon} alt="" className="plus" />
         {open ? <p>New Chat</p> : null}
        </div>
        {
            open ? <div className="flex flex-col">
            <p className="recent-title my-5 font-bold">Recent</p>
           {
            prevPrompt.map((prompt, index) => (
              <div key={index} className="flex items-start gap-[10px] p-[8px] pr-[43px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-slate-200">
              <img src={assets.message_icon} alt="" />
              <p>{prompt.slice(0, 15)}...</p>
          </div>
            ))
           }
        </div> : null
        }
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 p-2 hover:bg-slate-200 rounded-full">
      <img src={assets.question_icon} alt="" />
       {open ? <p>Help</p> : null}
        </div>
        <div className="flex gap-2 p-2 hover:bg-slate-200 rounded-full">
      <img src={assets.history_icon} alt="" />
      {open ? <p>Activity</p> : null}
        </div>
        <div className="flex gap-2 p-2 hover:bg-slate-200 rounded-full">
      <img src={assets.setting_icon} alt="" />
      {open ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
