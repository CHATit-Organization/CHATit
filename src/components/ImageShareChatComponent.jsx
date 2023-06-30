import React from "react";
// import src from "../assets/svg/chat/src.svg";
import src from "../assets/svg//chat/my-avatar.jpg";

function ShareMediaImage() {
  return (
    <div className="share-media-image w-full h-full  object-cover chat-box border border-[#E39DE5] overflow-none max-h-[300px] max-w-[300px]   my-[10px] text-justify rounded-[20px]">
      <img src={src} alt="" className="img-src rounded-[20px]" />
    </div>
  );
}

export default ShareMediaImage;
