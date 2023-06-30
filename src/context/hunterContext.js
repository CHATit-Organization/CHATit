import { useState, useContext, createContext, useEffect } from "react";
import { useToken } from "./tokenContext";
const HunterContext = createContext();

export const HunterProvider = ({ children }) => {
    const token = useToken()

    const [hunt,setHunt] = useState(false)
    const [proceedHunt,setProceedHunt] = useState(false)

    const initiateHunt = () => {
        setHunt(prevState => !prevState)
        token.hanleEarnToken()
    }
    const ProceedToHunt = () => {
      setProceedHunt(prevState => !prevState)
      setHunt(false)

   
    }
  

  return (
    <HunterContext.Provider
      value={{
        hunt,
        proceedHunt,
        initiateHunt,
        ProceedToHunt,
    
      }}
    >
      {children}
    </HunterContext.Provider>
  );
};

export const useHunter = () => useContext(HunterContext);
