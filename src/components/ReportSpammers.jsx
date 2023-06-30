import React from "react";
import { useHunter } from "../context/hunterContext";

function ReportSpammers() {
  const hunter = useHunter();
  const { ProceedToHunt, proceedHunt, initiateHunt } = hunter;
  console.log("hehbfe", proceedHunt);
  return (
    <div className="upload w-full flex flex-col justify-between gap-[30px] items-center text-white earnContainer  w-[350px] relative left-[30%]  h-[100%]  shadow-xl bg-[#222226] rounded-[20px] p-[30px] z-50">
      <h2 className="upload-header font-bold text-2xl">Report</h2>
      <p className="report font-extralight text-lg italic text-center">
        Are you sure you want to report @gamer001 as a spammer?
      </p>
      <div className="report-buttons flex items-center justify-between w-full">
        <button className="report-button flex items-center justify-center w-[52px] h-[30px] rounded-lg hover:bg-opacity-60 no bg-[#f83e76]" onClick={initiateHunt}>
          No
        </button>
        <button className="report-button flex items-center justify-center w-[52px] h-[30px] rounded-lg hover:bg-opacity-60 yes bg-[#7758D1]" onClick={ProceedToHunt}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default ReportSpammers;
