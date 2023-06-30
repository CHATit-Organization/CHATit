import React from "react";
import coins from "../assets/svg/chat/coins.svg";
import receive from "../assets/svg/chat/receive.svg";
import chip from "../assets/svg/chat/chip.svg";
import poll from "../assets/svg/chat/poll.svg";
import { useToken } from "../context/tokenContext";

function Deals() {
  const token = useToken();

  const { handleEarnToken, handlePoll, handleReceiveToken, handleSendToken } =
    token;
  return (
    <div className="deals-container flex flex-col justify-between gap-[30px] items-center text-white">
      {/* Todo */}
      <div className="media-flex flex items-center gap-[30px] mb-[20px]">
        <button className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl" onClick={handleSendToken}>
          <img src={coins} alt="" className="media-uploadImage" />
        </button>
        <button className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl" onClick={handleReceiveToken}>
          <img src={receive} alt="" className="media-uploadImage" />
        </button>
        <button className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl" onClick={handleEarnToken}>
          <img src={chip} alt="" className="media-uploadImage" />
        </button>
        <button className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl" onClick={handlePoll}>
          <img src={poll} alt="" className="media-uploadImage" />
        </button>
      </div>
    </div>
  );
}

export default Deals;
