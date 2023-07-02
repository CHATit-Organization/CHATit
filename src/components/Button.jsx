import React from "react";
import { useMedia } from "../context/mediaContext";

function Button({ children, bg }) {
  const media = useMedia();
  return (
    <button
      className={`details-send-btn flex w-[100px] h-[30px] bg-[#7758d1] rounded-lg items-center justify-center hover:bg-opacity-75 active:bg-opacity-60 shadow-2xl ${bg}`}
      onClick={media.handleMedia()}
    >
      {children}
    </button>
  );
}

export default Button;
