import React, { useEffect, useState } from "react";
import Search from "../assets/svg/toggle/search.svg";
import UsersThree from "../assets/svg/toggle/UsersThree.svg";
import Plus from "../assets/svg/toggle/Plus.svg";
import { useChat } from "../context/chatContext";

import { Friends } from "../data/friends";
import {store} from "../store/zustand";
import { getMessageFor, getUserDetails } from "../lib/filebase";

function SideNav() {
  const storeState = store((state) => state);
  const chat = useChat()
  const {LoadUserChat} = chat

  return (
    <div className="  h-[85vh] w-[50vw]  bg-[#1D203E]/70 ">
      <div className="relative px-[18px]  flex justify-center items-center mt-[15px] ">
        <input class=" w-[206px] h-[25px] rounded-lg border-white text-white bg-[#1D203E]" />
        <div className="absolute right-[50px]">
          <button>
            <img className="scale-50 z-10" src={Search} alt="" />
          </button>
        </div>
      </div>

      <hr className="mt-[22px] " />

      <div className=" w-full relative -z-0">
        <div className="friendsRequest_content h-[20vh]  flex flex-col overflow-y-scroll items-start pl-[28px] ">
          <div className="content  flex flex-col gap-[20px] mt-[21px]">
            <div className="content_row flex gap-[15px] items-center">
              <img
                className="content_logo scale-100"
                src={UsersThree}
                alt="users"
              />
              <h4 className="content_text text-[#FFFFFF] font-bold text-lg font-mono">
                Friends
              </h4>
            </div>
            <div className="content_row flex gap-[15px] items-center">
              <img
                className="content_logo scale-100"
                src={UsersThree}
                alt="users"
              />
              <h4 className="content_text text-[#FFFFFF] font-bold text-lg font-mono">
                Request
              </h4>
            </div>
          </div>
        </div>

        <div className="directMessage text-red-600 mx-[20px] flex justify-between">
          <p className="directMessage_text text-[#FFFFFF]/70 font-bold">
            Direct Message
          </p>
          <button>
            <img
              className="directMessage_logo scale-125"
              src={Plus}
              alt="plus"
            />
          </button>
        </div>
      </div>

      <hr className="mt-4" />

      <div className="friendsList flex flex-col gap-[20px] mt-[20px] mx-[14px] h-[45vh]  overflow-y-scroll pb-4">
        {storeState.friendsList.map((query, index) => {
          return (
            <div
              key={index}
              className=" flex gap-[15px] items-center px-4 py-2 cursor-pointer bg-[#000000]/30 hover:bg-[#000000]/50 rounded-lg hover:py-2 active:bg-[#ffffff]/10"
              onClick={async() => await LoadUserChat(storeState, storeState.accounts[0], query.wallet, query)}
            >
              <img
                className="friendsList_logo w-[50px] h-[50px] border-2 border-[#ffffff] border-opacity-50 rounded-full "
                src={query.imgUrl}
                alt="profile"
              />
              <div className="friendsList_content flex flex-col">
                <h3 className="friendsList_content_name font-bold text-sm text-[#FFFFFF]">
                  {query.username}
                </h3>
                <p className="friendsList_content_username text-xs text-[#FFFFFF] w-[100px] truncate ">
                  {query.about}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;