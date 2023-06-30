import React from "react";
import audio from "../assets/svg/chat/audio.svg";

function MediaShareAudio() {
  return (
    <div className="mediaShareContainer apply w-[550px] h-[100%]  shadow-xl bg-[#222226] rounded-[20px] p-[30px] z-50 text-white">
      <p className="header-mediaShare text-2xl font-bold mb-4">Share Audio</p>
      <div className="mediaShare-div flex items-center py-5 px-5 bg-[#FFFFFF] bg-opacity-20 rounded-lg justify-between">
        <input type="file" accept="audio/*" />
        <div className="mediaShareImg bg-[#222226] rounded-full border border-[#ffffff] border-opacity-10 flex items-center justify-center w-[50px] h-[50px] p-2">
          {" "}
          <img src={audio} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MediaShareAudio;
