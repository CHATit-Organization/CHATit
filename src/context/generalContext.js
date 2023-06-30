import { useState, useContext, createContext, useEffect } from "react";
import { useChat } from "./chatContext";
const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const chat = useChat();
  const [isHome, setIsHome] = useState(true);

  const handleHome = () => {
    setIsHome((prevState) => !prevState);
    chat.setOpenChat(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        isHome,

        handleHome,
        setIsHome,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneral = () => useContext(GeneralContext);
