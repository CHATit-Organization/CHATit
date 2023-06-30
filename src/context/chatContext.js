import { useState, useContext, createContext, useEffect } from "react";
import { getMessageFor } from "../lib/filebase";
import { useGeneral } from "./generalContext";
const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const general = useGeneral();

  const [openChat, setOpenChat] = useState(false);
  const [activeChat, setaActiveChat] = useState({});
  const [isDm, setIsDm] = useState(false);

  const LoadUserChat = async (state, sender, receiver, user) => {
    await state.setMessagesList([]);
    setaActiveChat(user);
    setOpenChat(true);
    general.setIsHome(false);
  };
  const handleDM = () => {
    setIsDm((prevState) => !prevState);
  };

  return (
    <ChatContext.Provider
      value={{
        openChat,
        activeChat,
        setOpenChat,
        LoadUserChat,
        isDm,
        handleDM,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
