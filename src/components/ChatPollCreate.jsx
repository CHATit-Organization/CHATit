import React, { useState } from "react";

function ChatPollCreate() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="chat-box border border-[#E39DE5] w-max overflow-auto max-h-[300px] max-w-[300px] py-[13px] px-[10px]  my-[10px] text-justify rounded-[20px]">
      <div className="poll-container box-border w-full relative">
        <p className="poll-question font-bold text-xl ">
          Should we have a token of our own?
        </p>
        <div className="poll-options flex flex-col gap-[10px]">
          <hr />
          <label htmlFor="">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            {"  "}Yes, it will help
          </label>
          <hr />
          <label htmlFor="">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            {"   "}No, we don't need it
          </label>
        </div>
        <small className="vote-count text-xs bg-[#44444C] rounded-lg px-2 py-1 option-1 absolute top-16 right-4">
          13
        </small>
        <small className="vote-count text-xs bg-[#44444C] rounded-lg px-2 py-1 option-2 absolute top-[104px] right-4">
          3346
        </small>
      </div>
      <p className="time-sent text-[#E39DE5] font-extrabold text-xs poll-time text-end mt-4">
        12:54 pm
      </p>
    </div>
  );
}

export default ChatPollCreate;
