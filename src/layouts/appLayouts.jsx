import React from "react";
import Toggle from "./Toggle";
import SideNav from "./SideNav";
import Main from "./Main";
import Profile from "./Profile";
import Tag from "./Tag";
import Index from "../components/Index";
import Discover from "./Discover";
import { useGeneral } from "../context/generalContext";
import { useChat } from "../context/chatContext";
import Landing from "../pages/home/Landing";
import Chat from "../pages/home/Chat";

function AppLayouts() {
  const general = useGeneral();
  const chat = useChat();

  const { isHome } = general;
  const { openChat, isDm } = chat;

  return (
    <div className="appLayouts relative  h-[95vh] w-[100vw]">
      <div className="appLayouts_side flex">
        <div className="combineDiv flex flex-col">
          <div className="toggle-sidenav flex w-[25vw]">
            <div className=" bg-[#1D203E]/50 rounded-tl-lg">
              <Toggle />
            </div>

            {isDm ? <SideNav /> : <Discover />}
          </div>
          <Tag />
        </div>

        <div className="mainContainer  w-[50vw] bg-gradient-to-t from-[#1F1E1E] to-[#1D203E]">
          {isHome && <Landing />}

          {!isHome && (openChat ? <Chat /> : <Main />)}
          {/* <Chat /> */}
        </div>
        <Profile />
      </div>
      <div className="overlay">
        <div className="indexContainer flex justify-center items-center">
          <Index />
        </div>
      </div>
    </div>
  );
}

export default AppLayouts;
