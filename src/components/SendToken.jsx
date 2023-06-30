import React, { useState } from "react";
import usdt from "../assets/svg/usdt.svg";
import eth from "../assets/svg/eth.svg";
import usdc from "../assets/svg/usdc.svg";
// import btc from "../assets/svg/btc.svg";
import XDC from "../assets/images/xdc-icon.png";
import arrowsend from "../assets/svg/chat/arrowsend.svg";
import { useToken } from "../context/tokenContext";

function SendToken() {
  const token = useToken();
  const {
    handleRemark,
    handleSelectedToken,
    handleSetAmount,
    shareDetails,
    selectedToken,
    amount,
  } = token;
  
  return (
    <div className="sendToken-container flex flex-col justify-between gap-[30px] items-center text-white">
      <h2 className="sendToken-header font-bold text-xl mb-[10px]">
        Send Token
      </h2>
      <div className="deals-flex flex flex-col items-end">
        <div className="upperflex flex justify-between gap-[2px]  rounded-[10px] w-[300px] h-[50px] shadow-xl">
          {/* upperflex */}
          <div className="token-img flex items-center justify-center w-[91px] p-4 rounded-l-[10px]  bg-[#FFFFFF] bg-opacity-[15%]">
            <img src={XDC} alt="" />
            {/* <img src={usdt} alt="" />
            <img src={eth} alt="" />
            <img src={btc} alt="" /> */}
          </div>
          <div className="token flex items-center justify-center bg-[#FFFFFF] bg-opacity-[15%] w-full text-[#222226] font-semibold text-xl">
            <select
              name="token"
              id=""
              className="token-select  w-full ml-[50px] mr-[15px] bg-inherit"
              value={selectedToken}
              onChange={(e) => handleSelectedToken(e)}
            >
              <option className="token-option" value="CHT">
                <img src={XDC} alt="" />
                <h2>chatit Token</h2>
              </option>
              <option value="FTM">
                <img src={XDC} alt="" />
                <h2>FTM</h2>
              </option>
            </select>
          </div>
          <div className="token-name flex items-center justify-center w-[91px] rounded-r-[10px] bg-[#FFFFFF] bg-opacity-[15%] font-extrabold">
            <h2 className="">{selectedToken}</h2>
          </div>
        </div>
        {/* divider */}
        <div className=" w-[19px] self-center h-[19px] bg-[#FFFFFF] bg-opacity-[15%] shadow-xl"></div>
        {/* mddle flex */}
        <div className="middle-flex flex gap-[2px]  w-[300px] h-[50px] rounded-[10px] shadow-xl">
          <div className="value flex items-center justify-center text-[#222226] font-semibold text-3xl rounded-l-[10px] bg-[#FFFFFF] bg-opacity-[15%] w-[120px]">
            <input
              className="value-input bg-inherit text-sm py-2 rounded-lg px-1 w-[100px]"
              type="number"
              onChange={(e) => handleSetAmount(e)}
            />
            {/* <h2 className="">100.23</h2> */}
          </div>
          <div className="value-dollars flex items-center justify-center rounded-r-[10px] bg-[#FFFFFF] w-[180px] bg-opacity-[15%] font-extrabold p-[13px]">
            <h2>$ {amount}</h2>
          </div>
        </div>
        {/* divider */}
        <div className=" w-[19px] self-center h-[19px] bg-[#FFFFFF] bg-opacity-[15%] shadow-xl"></div>
        {/* lower flex */}
        <div className="lower-flex flex gap-[2px] justify-between shadow-xl">
          <p className="send-description w-[220px] h-[94px]  bg-[#FFFFFF] bg-opacity-[15%] text-justify p-[10px] truncate overflow-hidden rounded-l-[10px] shadow-xl">
            <input
              className="remark-input w-[180px] h-[75px] bg-inherit text-sm py-2 rounded-lg px-1"
              type="text"
              onChange={(e) => handleRemark(e)}
              placeholder="what's this for? (optional)"
            />
          </p>
          <button
          id="sendTokenNxt"
            className="send-btn flex w-[80px] h-[94px] bg-[#ffffff] bg-opacity-[15%] hover:bg-[#7758d1] rounded-r-[10px] items-center justify-center shadow-xl active:bg-opacity-10"
            onClick={shareDetails}
          >
            <img src={arrowsend} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendToken;
