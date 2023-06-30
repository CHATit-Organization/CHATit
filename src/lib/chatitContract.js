import CHATIT from "../backend/build/contracts/CHATIT.json";

const chatitInit = (web3) => {
  const networkKey = Object.keys(CHATIT.networks)[0];
  return new web3.eth.Contract(CHATIT.abi, CHATIT.networks[networkKey].address);
};

const isRegistered = (state) => {
  return state.chatitContract.methods
    .isRegistered(state.accounts[0])
    .call()
    .then((res) => {
      return res;
    });
};

export { chatitInit, isRegistered };
