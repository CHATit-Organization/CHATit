import React from "react";
import Button from "./Button";
import success from "../assets/svg/chat/success.svg";

function ReportSuccessful() {
  return (
    <div className="reportSuccess  h-auto text-white top-[35%] shadow-xl w-[446px] relative left-[15%]  bg-[#222226] rounded-[20px] p-[30px] z-50 flex flex-col items-center justify-between gap-[30px] ">
      <img src={success} alt="" />
      <p className="success-msg font-extralight  italic text-center">
        Hurray! You hit the jackpot, you got this user banned. your reward is
        0.9997 CHT token, you should get it any moment from now
      </p>
      <Button>Done</Button>
    </div>
  );
}

export default ReportSuccessful;
