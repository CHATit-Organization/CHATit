import React from "react";
import plus from "../assets/svg/chat/Plus.svg";
import arrowsend from "../assets/svg/chat/export.svg";
import { usePool } from "../context/poolContext";

function CreatePoll() {
  const pool = usePool();
  const { poolQuestion, setPool } = pool;
  console.log(poolQuestion, "trfbsdvs");
  return (
    <div className="text-white createPoll-container w-[400px] flex flex-col justify-between gap-[30px] items-center text-sm">
      <h2 className="createPoll-header font-bold text-xl">Create Poll</h2>
      <form
        action=""
        className="questions-container w-full flex flex-col items-center"
      >
        {/* questionn */}
        <input
          type="text"
          className="question w-full h-[30px] py-2 bg-[#FFFFFF] bg-opacity-[15%] rounded-[10px] p-[10px] text-white font-semibold text-sm shadow-xl"
          placeholder="Question "
          onChange={(e) => setPool(e)}
        />
        {/* divider */}
        <div className="w-[19px] self-center h-[19px] bg-[#FFFFFF] bg-opacity-[15%] shadow-xl "></div>
        {/* question */}
        <input
          type="text"
          className="question w-full h-[30px] py-2 bg-[#FFFFFF] bg-opacity-[15%] rounded-[10px] p-[10px] text-white font-semibold text-sm shadow-xl"
          placeholder="Option 1"
          onChange={(e) => setPool(e)}
        />
        {/* divider */}
        <div className="w-[19px] self-center h-[19px] bg-[#FFFFFF] bg-opacity-[15%] shadow-xl "></div>
        {/* question */}
        <input
          type="text"
          className="question w-full h-[30px] py-2 bg-[#FFFFFF] bg-opacity-[15%] rounded-[10px] p-[10px] text-white font-semibold text-sm shadow-xl"
          placeholder="Option 2"
          onChange={(e) => setPool(e)}
        />
      </form>
      <div className="btns-flex flex justify-between w-full">
        <button className="add-question flex w-[30px] h-[30px] bg-opacity-[10%] bg-white rounded-lg items-center justify-center hover:bg-opacity-20 active:bg-[#7758D1] shadow-xl">
          <img src={plus} alt="" />
        </button>
        <button className="add-question flex w-[30px] h-[30px] bg-opacity-[10%] bg-white rounded-lg items-center justify-center hover:bg-opacity-20 active:bg-[#7758D1] shadow-xl">
          <img src={arrowsend} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CreatePoll;
