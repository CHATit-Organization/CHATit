import React from "react";

function ChatBox({ children, time }) {
  return (
    <div className=" border border-[#E39DE5] w-max overflow-auto max-h-[300px] max-w-[300px] py-[13px] px-[10px]  my-[10px] text-justify rounded-[20px] chatBox-container flex flex-col">
      <p className="text-content">{children}</p>
      <p className="time-sent text-[#E39DE5] font-extrabold text-xs text-end time-sent-chat  self-end">
        {time}
      </p>
    </div>
  );
}

export default ChatBox;
