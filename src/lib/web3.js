import Web3 from "web3";
import { chtInit } from "./chtContract";
import { chatitInit } from "./chatitContract";
import Big from "big.js";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Todo: Add more wallets(like coinbase to win price)
const web3Init = () => {
  return new Promise(async (resolve, reject) => {
    // metamask
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum
        .send("eth_requestAccounts")
        .then(() => {
          resolve(new Web3(window.ethereum));
        })
        .catch((err) => {
          if (err.message.includes("User rejected the request")) {
            toast.info("You need to connect your wallet to proceed", {
              transition: Slide,
              position: toast.POSITION.TOP_CENTER,
            });
          } else if (
            err.message.includes(
              "Request of type 'wallet_requestPermissions' already pending for origin"
            )
          ) {
            toast.info(
              "You have a pending wallet connection request, approve it to proceed or go back to homepage",
              { transition: Slide, position: toast.POSITION.TOP_CENTER }
            );
          } else {
            toast.info("Unexpected error occured while connecting wallet", {
              transition: Slide,
              position: toast.POSITION.TOP_CENTER,
            });
          }
          console.log("err: ", err);
          reject(err);
        });
    } else {
      toast.info("You need to download metamask to proceed", {
        transition: Slide,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  });
};

const connectWallet = async (state) => {
  try {
    await web3Init().then(async (web3) => {
      await state.setWeb3(web3);
      const chx = await chtInit(web3);
      const chatXdc = await chatitInit(web3);
      await state.setchtContract(chx);
      await state.setchatitContract(chatXdc);
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      await state.setAccounts(accounts);
      return true;
    });
  } catch (err) {
    console.log("connect wallet not working: ", err);
    return false;
  }
};

const ftmBalance = async (state, web3, account) => {
  await web3.eth
    .getBalance(account)
    .then(async (balance) => {
      const blnc = new Big(balance || 0);
      const formattedBlnc = blnc.div("10e17").toFixed(4);
      if (formattedBlnc !== state.ftmBalance) {
        await state.setFtmBalance(formattedBlnc);
      }
      return formattedBlnc;
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export { connectWallet, ftmBalance };
