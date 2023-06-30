import React from "react";
import { Friends } from "../data/friends";
import { useMedia } from "../context/mediaContext";
import Button from "./Button";
import { store } from "../store/zustand";

function FriendsSearch() {
  const media = useMedia();
  const { loadContact, shareContact,removeLoadedContact,handleMedia } = media;
  const storeState = store((state) => state);
  console.log("selected: ", shareContact)

  return (
    <div className="friends flex flex-col justify-between bg-[#222226] py-2 rounded-lg items-center text-white h-[450px]">
      <h2 className="friends-header font-bold text-xl mb-[10px]">Friends</h2>
      <form action="" className="search-container  flex items-center justify-center">
        <input
          type="text"
          className="search-bar w-[200px] h-[30px] bg-[#44444C] rounded-[8px] pl-[19px] mb-[20px]"
          placeholder="Search friends"
        />
      </form>
      <div className="friendsList flex flex-col gap-[20px] mt-[20px] mx-[14px] h-[45vh]  overflow-y-scroll friends-list w-[300px] mb-[20px]">
        {storeState.friendsList.map((query, index) => {
          const isSelected =
            shareContact &&
            shareContact.friends.some((friend) => friend.wallet === query.wallet);
          return (
            <div className="friends-container  flex items-center justify-between" key={index}>
              <div
                className="friendsList_card flex gap-[15px] items-center py-2 cursor-pointer friends-card w-full px-[20px] mr-[30px] hover:bg-[#000000]/50 rounded-lg hover:py-2"
                onClick={() => isSelected ? removeLoadedContact(query) : loadContact(query)}
              >
                <img
                  className="friendsList_logo w-[50px] h-[50px] border-2 border-[#ffffff] border-opacity-50 rounded-full"
                  src={query.imgUrl}
                  alt="profile"
                />
                <div className="friendsList_content flex flex-col">
                  <h3 className="friendsList_content_name font-bold text-sm text-[#FFFFFF]">{query.username}</h3>
                  <p className="friendsList_content_username text-xs text-[#FFFFFF]">
                    {query.about}
                  </p>
                </div>
              </div>
              <div
                className={`${isSelected ? "checkbox_selected w-[20px] h-[20px] bg-[#7758d1]  rounded-[5px] mr-[10px] pr-[10px]" : "checkbox w-[20px] h-[20px] bg-[#FFFFFF] bg-opacity-[15%] rounded-[5px] mr-[10px] pr-[10px] active:bg-[#7758D1]"}`}
                onClick={() => isSelected ? removeLoadedContact(query) : loadContact(query)}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="search-friends-button  mt-[10px] pb-[20px]">
        <Button>Done</Button>
      </div>
    </div>
  );
}

export default FriendsSearch;
