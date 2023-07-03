import React from "react";
import Button from "./Button";
import { useToken } from "../context/tokenContext";

function RequestDetails() {
  const token = useToken();
  const { selectedToken, amount, remarks, setSuccess, isSuccess } = token;
  console.log("fjnfef", isSuccess);
  return (
    <div className="details-container flex flex-col w-[300px] h-auto justify-between gap-[20px] items-center">
      <h2 className="details-header font-bold text-xl">Details</h2>
      {/* value */}
      <p className="details-value text-[#7758D1] font-bold text-lg">
        ${amount}
      </p>
      <div className="details-flex-container  w-full">
        <div className="details-flex flex justify-between items-center">
          <p className="details-title font-bold">Receiver</p>
          <p className="details-subject">@gamer001</p>
        </div>
        <div className="details-flex flex justify-between items-center">
          <p className="details-title font-bold">Token</p>
          <p className="details-subject">{selectedToken}</p>
        </div>
        <div className="details-flex flex justify-between items-center">
          <p className="details-title font-bold">Quantity</p>
          <p className="details-subject">{amount * 0.245}</p>
        </div>
        <div className="details-flex flex w-full justify-between items-center">
          <p className="details-title font-bold">Description</p>
          <p className="details-subject  text-sm italic details-desc  truncate">
            {remarks}
          </p>
        </div>
      </div>

      {/* <button className="details-send-btn">Send</button> */}
      <button
        className={`details-send-btn flex w-[100px] h-[30px] bg-[#7758d1] rounded-lg items-center justify-center hover:bg-opacity-75 active:bg-opacity-60 shadow-2xl `}
        onClick={setSuccess(true)}
      >
        Request
      </button>
      {/* <Button>Request</Button> */}
    </div>
  );
}

export default RequestDetails;
