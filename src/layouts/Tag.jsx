import React from "react";
import Avatar from "../assets/images/avatar.png";
import Settings from "../assets/svg/toggle/GearSix.svg";
import Logout from "../assets/svg/toggle/logout.svg";
import { store } from "../store/zustand";

function Tag() {
  const storeState = store((state) => state);
  return (
    <div className="tag  flex items-center justify-between bg-[#1D203E] w-full h-[10vh] px-[20px] rounded-bl-lg">
      <div className="tag_profile flex gap-[8px] items-center">
        {storeState.userProfile.imgUrl === "" && (
          <img
            className="tag_profile_logo w-[50px] h-[50px] border-2 border-white/60 rounded-full"
            src={Avatar}
            alt="profile"
          />
        )}
        {storeState.userProfile.imgUrl !== "" && (
          <img
            className="tag_profile_logo w-[50px] h-[50px] border-2 border-white/60 rounded-full"
            src={storeState.userProfile.imgUrl}
            alt="profile"
          />
        )}
        {storeState.userProfile.username === "" && (
          <h3 className="tag_profile_text font-bold text-sm text-[#FFFFFF]">
            @NO USERNAME
          </h3>
        )}
        {storeState.userProfile.username !== "" && (
          <h3 className="tag_profile_text font-bold text-sm text-[#FFFFFF]">
            @{storeState.userProfile.username}
          </h3>
        )}
      </div>
      <div className="tag_settings flex gap-[22px] items-center">
        <button>
          <img
            className="tag_settings_logo scale-150"
            src={Settings}
            alt="settings"
          />
        </button>
        <button>
          <img
            className="tag_settings_logo scale-150"
            src={Logout}
            alt="logout"
          />
        </button>
      </div>
    </div>
  );
}

export default Tag;
