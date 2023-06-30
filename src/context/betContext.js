import { useState, useContext, createContext, useEffect } from "react";
import { useToken } from "./tokenContext";

const BetContext = createContext();

export const BetProvider = ({ children }) => {
    const token = useToken()


  
    const [bet,setBet] = useState(false)

    const initiateBet = () => {
        setBet(prevState => !prevState)
        token.hanleEarnToken()
    }


  return (
    <BetContext.Provider
      value={{
        bet,
        initiateBet
      }}
    >
      {children}
    </BetContext.Provider>
  );
};

export const useBet = () => useContext(BetContext);
