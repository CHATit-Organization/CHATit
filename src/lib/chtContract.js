import CHT from "../backend/build/contracts/CHT.json";
import { Big } from "big.js";
import { uploadMessageFor } from "./filebase";

const chtInit = (web3) => {
  const networkKey = Object.keys(CHT.networks)[0];
  return new web3.eth.Contract(CHT.abi, CHT.networks[networkKey].address);
};

// const getXdcBalance = async (state, web3, account) => {
//   await web3.eth
//     .getBalance(account)
//     .then(async (balance) => {
//       const blnc = new Big(balance || 0);
//       const formattedBlnc = blnc.div("10e17").toFixed(4);
//       if (formattedBlnc !== state.xdcBalance) {
//         await state.setXdcBalance(formattedBlnc);
//       }
//       return formattedBlnc;
//     })
//     .catch((err) => {
//       console.log("err: ", err);
//     });
// };

const chxBalance = async (state) => {
  await state.chtContract.methods
    .balanceOf(state.accounts[0])
    .call()
    .then(async (res) => {
      const blnc = new Big(res || 0);
      const formattedBlnc = blnc.div("10e17").toFixed(4);
      if (formattedBlnc !== state.chxBalance) {
        await state.setCHXBalance(formattedBlnc);
      }
      return formattedBlnc;
    });
};

const transferChx = async (
  state,
  walletTo,
  amountWei,
  message,
  receiverUsername
) => {
  await state.chtContract.methods
    .transfer(walletTo, amountWei)
    .send({ from: state.accounts[0] })
    .then(async (res) => {
      if (res) {
        await uploadMessageFor(
          state.accounts[0],
          state.userProfile.username,
          message,
          receiverUsername,
          walletTo
        );
        state.setTransferStatus(true);
        return true;
      } else {
        state.setTransferStatus(false);
        return false;
      }
    })
    .catch(async (err) => {
      state.setTransferStatus(false);
      return false;
    });
};

export { chtInit, chxBalance, transferChx };
