import React from "react";
import Button from "./Button";
import { useToken } from "../context/tokenContext";
import { useChat } from "../context/chatContext";
import { store } from "../store/zustand";
import { transferChx } from "../lib/chtContract";
import { uploadMessageFor } from "../lib/filebase";

function ShareDetails() {
  const token = useToken();
  const chat = useChat();
  const { activeChat } = chat;
  const { selectedToken, amount, remarks, setSuccess, isSuccess } = token;
  const storeState = store((state) => state);
  
  const handleDone = async(state) => {
    if (amount > 0 ) {
      if (selectedToken === "CHT") {
        const amountConv = state.web3.utils.toWei(amount, "ether");
        const message = `Sent ${amount} CHT`;   
       await transferChx(storeState, activeChat.wallet, amountConv, message, activeChat.username).then((res) => {
        console.log("result: ", res)
        setSuccess(res);
       })
      }else if (selectedToken === "FTM"){
        const amountConv = state.web3.utils.toWei(amount, "ether");     
        await storeState.web3.eth.sendTransaction({
          from: storeState.accounts[0],
          to: activeChat.wallet,
          value: amountConv
        }).on('receipt', async() => {
          const message = `Sent ${amount} FTM`;
          await uploadMessageFor(storeState.accounts[0], storeState.userProfile.username, message, activeChat.username, activeChat.wallet);
          state.setTransferStatus(true);
          setSuccess(true);
      }).on('error', () => {
        state.setTransferStatus(false);
        setSuccess(false);
      } )
        
      }
    }
  }

  return (
    <div className=" flex flex-col w-[300px] h-auto justify-between gap-[20px] items-center">
      <h2 className=" font-bold text-xl">Details</h2>
      {/* value */}
      <p className=" text-[#7758D1] font-bold text-lg">${amount}</p>
      <div className="  w-full">
        <div className=" flex justify-between items-center">
          <p className=" font-bold">Receiver</p>
          <p className="">@{activeChat.username}</p>
        </div>
        <div className=" flex justify-between items-center">
          <p className=" font-bold">Token</p>
          <p className="">{selectedToken}</p>
        </div>
        <div className=" flex justify-between items-center">
          <p className=" font-bold">Quantity</p>
          <p className="">{amount}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className=" font-bold">Description</p>
          <p className=" flex-end text-sm italic  truncate">{remarks}</p>
        </div>
      </div>

      {/* <button className="details-send-btn">Send</button> */}
      <button
        className={` flex w-[100px] h-[30px] bg-[#7758d1] rounded-lg items-center justify-center hover:bg-opacity-75 active:bg-opacity-60 shadow-2xl`}
        onClick={() => handleDone(storeState)}
      >
        Send
      </button>
      {/* <Button>Request</Button> */}
    </div>
  );
}

export default ShareDetails;
