import React from "react";
import vid from "../assets/svg/chat/video.svg";

function MediaShareVideo() {
  return (
    <div className="mediaShareContainer  w-[550px] h-[100%]  shadow-xl bg-[#222226] rounded-[20px] p-[30px] z-50 text-white">
      <p className="header-mediaShare text-2xl font-bold mb-4">Share Video</p>
      <div className="mediaShare-div flex items-center py-5 px-5 bg-[#FFFFFF] bg-opacity-20 rounded-lg justify-between">
        <input type="file" accept="video/*" />
        <div className="mediaShareImg bg-[#222226] rounded-full border border-[#ffffff] border-opacity-10 flex items-center justify-center w-[50px] h-[50px] p-2">
          {" "}
          <img src={vid} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MediaShareVideo;
