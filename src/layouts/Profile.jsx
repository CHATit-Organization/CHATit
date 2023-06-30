import React, { useState } from "react";
import Settings from "../assets/svg/profile/gear_icon.svg";
import Logout from "../assets/svg/profile/logout_icon.svg";
import ProfileIcon from "../assets/svg/profile/profile_icon.svg";
import Copy from "../assets/svg/profile/CopySimple.svg";
import ProfilePicture from "../assets/images/dp.png";
import avatar from "../assets/svg/auth/avatar.svg";
import { Users } from "../data/Users";
import { store } from "../store/zustand";

function Profile() {
  const storeState = store((state) => state);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  setTimeout(() => {
    if (copied1) {
      setCopied1(false);
    }
  }, 2000);
  setTimeout(() => {
    if (copied2) {
      setCopied2(false);
    }
  }, 2000);

  function handleCopy1() {
    const textToCopy = storeState.accounts[0];
    navigator.clipboard.writeText(textToCopy);
    setCopied1(true);
  }
  function handleCopy2(userId) {
    navigator.clipboard.writeText(userId);
    setCopied2(true);
  }

  return (
    <div className="profile w-[21vw] h-[95vh] bg-[#212333] pt-[15px] rounded-tr-lg rounded-br-lg">
      <div className="profile_settings flex justify-evenly py-[8px] mb-[11px]">
        <button>
          <img
            className="profile_icon scale-125"
            src={ProfileIcon}
            alt="profile"
          />
        </button>
        <button>
          <img
            className="profile_icon scale-125"
            src={Settings}
            alt="settings"
          />
        </button>
        <button>
          <img className="profile_icon scale-125" src={Logout} alt="logout" />
        </button>
      </div>
      <hr />

      <div className="profile_card flex flex-col justify-center items-center  border-[#FFFFFF]/10 mt-[15px] gap-[10px]">
        {storeState.userProfile.imgUrl === "" && (
          <img
            className="profile_card_image rounded-full border-[#7758D1] border-2  w-[100px]"
            src={avatar}
            alt="profile"
          />
        )}
        {storeState.userProfile.imgUrl !== "" && (
          <img
            className="profile_card_image rounded-full border-[#7758D1] border-2  w-[100px]"
            src={storeState.userProfile.imgUrl}
            alt="profile"
          />
        )}
        <div className="profile_combined flex flex-col items-center justify-center">
          {storeState.userProfile.username === "" && (
            <h3 className="profile_card_name text-[#FFFFFF] font-bold text-xl">
              NO USERNAME
            </h3>
          )}
          {storeState.userProfile.username !== "" && (
            <h3 className="profile_card_name text-[#FFFFFF] font-bold text-xl">
              {storeState.userProfile.username}
            </h3>
          )}
          <div className="profile_card_combined flex items-center gap-2 w-[150px]">
            <p
              className="profile_card_username text-[#FFFFFF]/40 text-sm truncate cursor-pointer hover:underline active:text-blue-100"
              onClick={handleCopy1}
            >
              {storeState.accounts[0]}
            </p>
            <div className="relative">
              <button onClick={handleCopy1} className="active:bg-white/50">
                <img src={Copy} alt="" className="w-[50px]" />
              </button>
              {copied1 && (
                <div className="absolute top-0 bg-black text-white text-xs rounded-lg px-4 py-2">
                  copied
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <div className=" my-[10px] mx-[14px]">
        <h3 className=" text-[#FFFFFF]/40 mb-[12px]">All Users</h3>
        <div className=" h-[40vh] overflow-y-scroll">
          {storeState.friendsList.map((query, index) => {
            return (
              <div
                key={index}
                className=" flex gap-2 pl-2 py-2 items-center w-full  h-[65px] bg-[#1A1B1F] rounded-lg cursor-pointer my-2 active:bg-opacity-20"
              >
                <img
                  className="users_card_image w-[55px] h-[55px] rounded-full border-2 border-[#ffffff] border-opacity-50"
                  src={query.imgUrl}
                  alt="users profile"
                />
                <div className="users_card_combined flex flex-col">
                  <h3 className="users_card_name font-bold text-[#FFFFFF]/60">
                    {query.username}
                  </h3>
                  <h3
                    id={index}
                    className="users_card_username text-[#FFFFFF]/40 text-xs w-[150px] truncate "
                    onClick={() => handleCopy2(query.wallet)}
                  >
                    {copied2 ? "copied..." : query.wallet}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
