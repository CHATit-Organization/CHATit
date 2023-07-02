import React from "react";
import Back from "../assets/svg/toggle/btn1.svg";
import Hide from "../assets/svg/toggle/btn2.svg";
import Minimize from "../assets/svg/toggle/btn3.svg";
import Logo from "../assets/svg/index/Chatit.svg";
import Rectangle from "../assets/svg/toggle/Rectangle.svg";
import Avatar1 from "../assets/svg/toggle/action1.svg";
import Avatar2 from "../assets/svg/toggle/action2.svg";
import Avatar3 from "../assets/svg/toggle/action3.svg";
import featuredCommunitiesData from "../data/featuredCommunitiesData";
import { useChat } from "../context/chatContext";

function Toggle() {
  const chat = useChat();
  return (
    <div className=" flex flex-col w-[76px] items-center  h-[85vh] py-[13px]  ">
      <div className="app_logo w-[70px] flex justify-center mb-[20px]">
        <img src={Logo} alt="logo" />
      </div>
      <button
        className="action-button  flex justify-center gap-[8px] dm-button rounded-full  h-[50px] w-[50px] items-center  bg-[#0a0b0b]/30 font-bold text-sm p-1 action-logo"
        onClick={chat.handleDM}
      >
        DM
      </button>
      <div className="actions  flex flex-col items-center h-[450px] mt-[20px]">
        <div className="communities_button flex  flex-col gap-4 w-[70px] ml-2 h-[45vh] overflow-y-auto">
          {featuredCommunitiesData.map((query, index) => {
            return (
              <button
                className="action-button px-[13px] flex justify-center gap-[8px]"
                key={index}
              >
                <img
                  className="actions_logo h-[30px] w-[30px] bg-[#212333]  rounded-full border-2 border-white hover:p-2 hover:bg-[#1D203E]/50"
                  src={query.innerImage}
                  alt={query.name}
                />
              </button>
            );
          })}
        </div>

        <div className="instructions_button flex flex-col gap-2 pt-6">
          <button className="action-button  px-[13px] flex justify-center gap-[8px]">
            <img
              className="actions_logo h-[30px] w-[30px] bg-[#212333]  rounded-full border-2 border-white hover:p-2 hover:bg-[#1D203E]/50"
              src={Avatar2}
              alt="chat button"
            />
          </button>
          <button className="action-button px-[13px] flex justify-center gap-[8px]">
            <img className="actions_logo" src={Avatar1} alt="add button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
