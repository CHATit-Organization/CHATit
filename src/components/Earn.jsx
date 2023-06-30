import React, { useState } from "react";
import hunterz from "../assets/svg/earn/hunter.svg";
import bet from "../assets/svg/earn/bet.svg";
import { useHunter } from "../context/hunterContext";
import { useBet } from "../context/betContext";
function Earn() {
  const hunter = useHunter();
  const betz = useBet();

  const { initiateHunt } = hunter;
  const { initiateBet } = betz;
//
  return (
    <div className="upload flex flex-col justify-between gap-[30px] items-center text-white earnContainer w-[350px] relative left-[30%]  h-[100%]  shadow-xl bg-[#222226] rounded-[20px] p-[30px] z-50">
      <h2 className="upload-header font-bold text-2xl">Earn</h2>
      {/* media buttons */}
      <div className="media-flex earn-flex w-full flex justify-between items-center">
        <button
          className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl"
          onClick={initiateHunt}
        >
          <img src={hunterz} alt="" className="media-uploadImage" />
        </button>
        <button
          className="media-item flex items-center w-[80px] h-[80px] justify-center p-[17px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[25px] hover:bg-opacity-20 shadow-xl"
          onClick={initiateBet}
        >
          <img src={bet} alt="" className="media-uploadImage" />
        </button>
      </div>
    </div>
  );
}

export default Earn;
