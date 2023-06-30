import React from "react";
import topbg from "../../assets/svg/landing/topbg.svg";
import contentbg from "../../assets/svg/landing/contentbg.svg";
import featuredData from "../../data/featuredCommunitiesData";
import onlineMembers from "../../assets/svg/landing/onlineMembers.svg";
import members from "../../assets/svg/landing/members.svg";
import search from "../../assets/svg/landing/search.svg";

function Landing() {
  return (
    <div className="landing w-full px-[32px] pt-[20px] pb-[10px] text-[#ffffff]">
      <div
        className="top mb-[5vh] w-full h-[33vh] border border-red-500 rounded-[16px]  flex flex-col items-center pt-[3vh]"
        style={{
          backgroundImage: `url(${topbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="top_header text-white font-bold text-[2rem]">
          Find The right community for you
        </h2>
        <p className="top_para text-[#ffffff] text-xs font-bold mt-[26px] mb-[6vh]">
          From Music, to Gaming, to Entertainment, to Learning, there’s a place
          for you{" "}
        </p>
        <form action="" className="form-container relative">
          <input
            type="text"
            placeholder="Search for communities"
            className="top_input w-[33vw] h-[7vh] bg-[#D9D9D9] rounded-[8px] pl-[19px] placeholder:text-[#1D203E] text-[#1D203E] text-xs font-bold"
          />
          <img
            src={search}
            alt=""
            className="search  absolute top-[8px] right-[10px] w-[20px] h-[3.2vh]"
          />
        </form>
      </div>
      {/* Featured Communities */}
      <p className="featured text-white font-bold text-xl mb-[3vh]">
        Featured Communities
      </p>
      {/* grid 3x... */}
      <div className="grid_container grid grid-cols-3 gap-x-[17px] gap-y-[4vh] mb-[20px] overflow-y-scroll h-[40vh] ">
        {/* <div className="grid_item"></div> */}
        {featuredData.map((item) => {
          return (
            <div
              className="grid-item bg-red-100 rounded-lg pl-[10px] pb-[6px] pr-[21px] pt-[140px] h-[217px] relative z-10"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: `no-repeat`,
              }}
            >
              <div className="content relative top-[-5px]  z-[100] font-bold">
                <h2 className="item_name text-white text-center font-bold mb-[20px]">
                  {item.name}
                </h2>
                <p className="item_description text-white text-[8px] text-center">
                  {item.description}
                </p>
                <div className="members_flex flex justify-between items-center text-[8px]">
                  <div className="flex-content flex items-center gap-1">
                    <img src={members} alt="" className="members" />
                    <p className="item_members">{item.members} members</p>
                  </div>
                  <div className="flex-content flex items-center gap-1">
                    <img src={onlineMembers} alt="" className="onlineMembers" />
                    <p className="item_members">{item.onlineMembers} online</p>
                  </div>
                </div>
              </div>
              <img
                src={contentbg}
                alt=" "
                className="contentbg w-full absolute left-0 bottom-0 z-20"
              />
              <img
                src={item.innerImage}
                alt=""
                className="innerImage absolute top-[100px] left-[60px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Landing;
