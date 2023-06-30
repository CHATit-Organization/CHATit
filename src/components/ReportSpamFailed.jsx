import React from "react";

import failed from "../assets/svg/chat/failed.svg";

function ReportSpamFailed() {
  return (
    <div className="reportFailed h-auto text-white top-[35%] shadow-xl w-[446px] relative left-[15%]  bg-[#222226] rounded-[20px] p-[30px] z-50 flex flex-col items-center justify-between gap-[30px]">
      <img src={failed} alt="" />
      <p className="failed-msg font-extralight  italic text-center">
        Opps! this user is not considered to be a spammer this time. Don’t worry
        there’s no escaping our spam haunters we will get this user banned soon.
      </p>
      <button className="failed-btn flex w-[200px] h-[50px] bg-[#f83e76] rounded-lg items-center justify-center hover:bg-opacity-75 active:bg-opacity-60 shadow-2xl">Done</button>
    </div>
  );
}

export default ReportSpamFailed;
