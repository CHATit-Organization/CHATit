import React from "react";
import Button from "./Button";
import failed from "../assets/svg/chat/failed.svg";
import { store } from "../store/zustand";

function TransactionFailed() {
  const storeState = store((state) => state);
  return (
    <div className="transactionFailed-container flex flex-col items-center justify-between gap-[30px]">
      <img src={failed} alt="" />
      <div className="transactionFailed-header font-bold text-xl">
        <h2>Transaction Failed</h2>
      </div>
      <p className="close-instruction font-extralight  italic text-center">
        Try again later. Click Done to close this window
      </p>
      <button
        className={`flex w-[100px] h-[30px] bg-[#7758d1] rounded-lg items-center justify-center hover:bg-opacity-75 active:bg-opacity-60 shadow-2xl`}
        onClick={() => {
          storeState.setTransferStatus(null);
        }}
      >
        Done
      </button>
    </div>
  );
}

export default TransactionFailed;
