import React from "react";
import avatar from "../assets/images/avatar.png";
import add from "../assets/svg/chat/add.svg";
import send from "../assets/svg/chat/senderr.svg";

function ShareMediaContact(props) {
  return (
    <div className="shareMediaContact flex gap-[15px] items-center chat-box border border-[#E39DE5] w-max overflow-auto max-h-[300px] max-w-[300px] py-[13px] px-[10px]  my-[10px] text-justify rounded-[20px]">
      <img
        src={avatar}
        alt=""
        className="card-img  rounded-full border border-[#FFFFFF] border-opacity-60 h-[50px] w-[50px]"
      />

      <div>
        <h2 className="contact-name font-bold text-base">Gamer</h2>
        <h2 className="contact-username font-extralight text-xs ">@gamer</h2>
        <div className="contact-button-flex flex justify-between items-center mt-2">
          <button className="contact-send flex items-center justify-center w-[18px] h-[14px] bg-[#44444C] rounded-sm hover:bg-opacity-60">
            <img src={add} alt="" />
          </button>
          <button className="contact-send flex items-center justify-center w-[18px] h-[14px] bg-[#44444C] rounded-sm hover:bg-opacity-60">
            <img src={send} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareMediaContact;
