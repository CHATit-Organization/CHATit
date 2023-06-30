import React from "react";
import Button from "./Button";
import failed from "../assets/svg/chat/failed.svg";

function TransactionFailed() {
  return (
    <div className="transactionFailed-container w-[300px] flex flex-col items-center justify-between gap-[30px]">
      <img src={failed} alt="" />
      <div className="transactionFailed-header font-bold text-xl">
        <h2>Transaction Failed</h2>
      </div>
      <p className="close-instruction font-extralight  italic text-center">
        Try again later. Click Done to close this window
      </p>
      <Button>Done</Button>
    </div>
  );
}

export default TransactionFailed;
