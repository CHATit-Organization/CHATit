import React, { useState } from "react";
import contacts from "../assets/svg/chat/contacts.svg";
import audio from "../assets/svg/chat/audio.svg";
import picture from "../assets/svg/chat/picture.svg";
import video from "../assets/svg/chat/video.svg";
import { useMedia } from "../context/mediaContext";

function UploadMedia() {
  const media = useMedia();
  const {
    handleShareFriendsContact,
    handleShareAudio,
    handleShareImage,
    handleShareVideo,
    friendsMedia,
  } = media;


  return (
    <div className="upload w-full flex flex-col justify-between gap-[30px] items-center text-white">
      <h2 className="upload-header font-bold text-2xl">Upload</h2>
      {/* media buttons */}
      <div className="media-flex flex items-center gap-[30px] mb-[20px]">
        <button className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl" onClick={handleShareFriendsContact}>
          <img src={contacts} alt="" className="media-uploadImage" />
        </button>
        <button className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl" onClick={handleShareAudio}>
          <input type="file" accept="audio/*" className="media-uploadInput" />
          <img src={audio} alt="" className="media-uploadImage" />
        </button>
        <button className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl" onClick={handleShareImage}>
          <input type="file" accept="image/*" className="media-uploadInput" />
          <img src={picture} alt="" className="media-uploadImage" />
        </button>
        <button className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl" onClick={handleShareVideo}>
          <input type="file" accept="video/*" className="media-uploadInput" />
          <img src={video} alt="" className="media-uploadImage" />
        </button>
      </div>
      {/* subcomponents */}

     
    </div>
  );
}

export default UploadMedia;
