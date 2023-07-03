import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { store } from "../store/zustand";
import ChatIt from "../assets/svg/index/Chatit.svg";
import back from "../assets/svg/auth/back.svg";

const RenderAvatar = () => {
  const subdomain = "stb";
  const iFrameRef = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const navigate = useNavigate();
  const storeState = store((state) => state);

  function subscribe(event) {
    const json = parse(event);
    if (json?.source !== "readyplayerme") {
      return;
    }
    if (json.eventName === "v1.frame.ready") {
      let iFrame = iFrameRef.current;
      if (iFrame && iFrame.contentWindow) {
        iFrame.contentWindow.postMessage(
          JSON.stringify({
            target: "readyplayerme",
            type: "subscribe",
            eventName: "v1.**",
          }),
          "*"
        );
      }
    }
    if (json.eventName === "v1.avatar.exported") {
      console.log(`Avatar URL: ${json.data.url}`);
      storeState.setAvatarUrl(json.data.url);
      navigate("/auth");
    }
    // Get user id
    if (json.eventName === "v1.user.set") {
      console.log(`User with id ${json.data.id} set:
  ${JSON.stringify(json)}`);
    }
  }
  function parse(event) {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  }

  useEffect(() => {
    let iFrame = iFrameRef.current;
    if (iFrame) {
      iFrame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`;
    }
  });
  
  useEffect(() => {
    window.addEventListener("message", subscribe);
    document.addEventListener("message", subscribe);
    return () => {
      window.removeEventListener("message", subscribe);
      document.removeEventListener("message", subscribe);
    };
  });

  return (
    <div className="w-[90vw] h-[95vh] flex flex-col justify-center items-center  bg-[#44444C]  rounded-lg mx-auto ml-[-50px]">
      <div className="avatar-container flex flex-col gap-2 justify-center">
        <div>
          <div className="regNav flex justify-between items-center mx-[50px] mb-[4vh] mt-[10px]">
            <Link to="/auth">
              <button className="backBtn  flex items-center gap-2 bg-[#7758d1] rounded-[20px] shadow-xl px-[20px] py-[5px] hover:bg-[#7758d1]/80">
                <img src={back} alt="" />
                <p>Back</p>
              </button>
            </Link>
            <img src={ChatIt} alt="" className="w-[100px]" />
          </div>
        </div>
        <h4 className="avatar-text font-bold  text-[black] bg-white px-4 py-2  w-[50vw] text-center rounded-lg">
          WELCOME TO CHATit AVATAR HUB. CUSTOMIZE YOUR AVATAR AND CLICK NEXT
          TO PROCEED
        </h4>

        <div
          style={{
            alignItems: "center",
            borderBottom: "2px solid #333",
            display: "flex",
            height: "",
            justifyContent: "center",
          }}
          className=""
        >
          <iframe
            allow="camera *; microphone *"
            className="iFrame"
            id="frame"
            ref={iFrameRef}
            style={{
              display: "block",
              border: "none",
              width: "100%",
              height: "calc(80vh - 100px)",
              borderRadius: "20px",
            }}
            title={"CHATit AVATAR HUB"}
          />
        </div>
      </div>
    </div>
  );
};

export default RenderAvatar;
