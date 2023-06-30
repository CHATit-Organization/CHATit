import React from "react";
import home from "../assets/svg/discover/home.svg";
import music from "../assets/svg/discover/music.svg";
import game from "../assets/svg/discover/game.svg";
import ent from "../assets/svg/discover/tv.svg";
import tech from "../assets/svg/discover/Atom.svg";
import edu from "../assets/svg/discover/edu.svg";
import { useGeneral } from "../context/generalContext";

function Discover() {
  const general = useGeneral();
  const { handleHome } = general;
  const discoverObjects = [
    {
      id: 1,
      img: home,
      title: "Home",
      navigate: "/",
    },
    {
      id: 2,
      img: music,
      title: "Music",
      navigate: "/music",
    },
    {
      id: 3,
      img: game,
      title: "Gaming",
      navigate: "/gaming",
    },
    {
      id: 4,
      img: ent,
      title: "Entertainment",
      navigate: "/entertainment",
    },
    {
      id: 5,
      img: tech,
      title: "Tech and Science",
      navigate: "/tech",
    },
    {
      id: 6,
      img: edu,
      title: "Education",
      navigate: "/education",
    },
  ];

  return (
    <div className="discover-wrapper w-[50vw] text-white bg-[#1D203E]/70">
      <h2 className="discover-header font-bold text-2xl pb-[12px] pl-[25px] pt-[15px]">
        Discover
      </h2>
      <hr color="#D9D9D9" className="mt-[3px]" />
      <div className="discover-items flex flex-col mt-[20px]">
        {discoverObjects.map((item) => {
          return (
            <div
              className="discover-item flex  gap-[10px] items-center p-[10px] cursor-pointer font-bold py-[10px] mx-[16px] pl-[9px] rounded-lg hover:bg-[#000000]/50"
              onClick={handleHome}
            >
              <div className="discover-item-img w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-white">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Discover;
