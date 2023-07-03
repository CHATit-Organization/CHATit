import { useState, useContext, createContext, useEffect } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [isToken, setIsToken] = useState(false);
  const [sendToken, setSendToken] = useState(false);
  const [receiveToken, setReceiveToken] = useState(false);
  const [earnToken, setEarnToken] = useState(false);
  const [poll, setPoll] = useState(false);
  const [selectedToken, setSelectedToken] = useState("CHT");
  const [amount, setAmount] = useState("0.00");
  const [remarks, setRemarks] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const [showSendDetails, setShowSendDetails] = useState(false);
  const [showRequestDetails, setShowRequestDetails] = useState(false);

  const handleToken = () => {
    setIsToken((prevState) => !prevState);
    setIsSuccess(false);
  };

  const handleSendToken = () => {
    setSendToken((prevState) => !prevState);
    handleToken();
  };
  const shareDetails = () => {
    setShowSendDetails((prevState) => !prevState);
    setSendToken(false);
  };
  const requestDetails = () => {
    setShowRequestDetails((prevState) => !prevState);
    setReceiveToken((prevState) => !prevState);
  };

  const setSuccess = (state) => {
    setIsSuccess(state);
    setShowSendDetails(false);
    // setIsToken(true)
  };
  const setSuccessRequest = (state) => {
    setIsSuccess(state);
    setShowRequestDetails(false);
    // setIsToken(true)
  };

  const handleReceiveToken = () => {
    setReceiveToken((prevState) => !prevState);
    handleToken();
  };
  const handleEarnToken = () => {
    setEarnToken((prevState) => !prevState);
    handleToken();
  };
  const handlePoll = () => {
    setPoll((prevState) => !prevState);
    handleToken();
  };

  const handleSelectedToken = (e) => {
    setSelectedToken(e.target.value);
  };
  const handleSetAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleRemark = (e) => {
    setRemarks(e.target.value);
  };

  const done = () => {
    setIsSuccess(false);
    setSendToken(false);
    setIsToken(false);
  };

  return (
    <TokenContext.Provider
      value={{
        isToken,
        sendToken,
        receiveToken,
        earnToken,
        poll,
        showSendDetails,
        showRequestDetails,
        selectedToken,
        amount,
        remarks,
        isSuccess,
        handleToken,
        handleEarnToken,
        handlePoll,
        handleReceiveToken,
        handleSendToken,
        requestDetails,
        shareDetails,
        handleSelectedToken,
        handleSetAmount,
        handleRemark,
        setSuccess,
        setSuccessRequest,
        done,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
