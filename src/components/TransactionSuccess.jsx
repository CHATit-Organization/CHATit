import React from "react";
import Button from "./Button";
import success from "../assets/svg/chat/success.svg";
import { useToken } from "../context/tokenContext";

function TransactionSuccess() {
  const token = useToken();
  const { setSuccess } = token;
  return (
    <div className="transactionSuccess-container  mx-auto w-[300px] flex flex-col items-center justify-center gap-[30px]">
      <img src={success} alt="" />
      <div className="transactionSuccess-header  font-bold text-xl">
        <h2>Transaction Successful</h2>
      </div>
      <p className="close-instruction">Click Done to close this window</p>
      {/* <Button>Done</Button> */}
      <button
        className={`flex w-[100px] h-[30px] bg-[#7758d1] rounded-lg items-center justify-center hover:bg-opacity-75 active:bg-opacity-60 shadow-2xl`}
        onClick={setSuccess}
      >
        Done
      </button>
    </div>
  );
}

export default TransactionSuccess;
