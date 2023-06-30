import React from "react";
import audio from "../assets/svg/chat/audio-chat.svg";

function ShareMediaAudio() {
  return (
    <div className="chat-box border border-[#E39DE5] w-max overflow-auto max-h-[300px] max-w-[300px] py-[13px] px-[10px]  my-[10px] text-justify rounded-[20px]">
      <img src={audio} alt="" className="audio-chat w-full h-auto" />
      <div className="audio-time flex items-center justify-between">
        <p className="audio-duration text-[#44444C] font-semibold text-xs">
          0:35
        </p>
        <p className="time-sent text-[#E39DE5] font-extrabold text-xs text-end">
          12:30am
        </p>
      </div>
    </div>
  );
}

export default ShareMediaAudio;
