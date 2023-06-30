import React from "react";
import token from "../assets/svg/chat/eth.svg";

function RequestTokenChatComponent() {
  return (
    <div className="chat-box border border-[#E39DE5] w-max overflow-auto max-h-[300px] max-w-[300px] py-[13px] px-[10px]  my-[10px] text-justify rounded-[20px]">
      <div className="send-token-flex flex gap-2 items-center">
        <p>Requested 3 ETH</p>
        <img src={token} alt="" />
      </div>
      <p className="time-sent text-[#E39DE5] font-extrabold text-xs text-end ">
        12:30 am
      </p>
    </div>
  );
}

export default RequestTokenChatComponent;
