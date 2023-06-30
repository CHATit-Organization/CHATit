import React, { useEffect, useState } from "react";
import user from "../../assets/svg/chat/user.svg";
import profile from "../../assets/svg/chat/profile.svg";
import mutual from "../../assets/svg/chat/mutual.svg";
import addMedia from "../../assets/svg/chat/addMedia.svg";
import send from "../../assets/svg/chat/send.png";
import { useMedia } from "../../context/mediaContext";
import { useToken } from "../../context/tokenContext";
import ShareMediaContact from "../../components/ContactShareChatComponent";
import ShareMediaImage from "../../components/ImageShareChatComponent";
import avatar from "../../assets/svg/auth/avatar.svg";
import ShareMediaAudio from "../../components/AudioChatComponent";
import ChatBox from "../../components/ChatBox";
import ChatPollCreate from "../../components/ChatPollCreate";
import RequestTokenChatComponent from "../../components/RequestTokenChatComponent";
import TransferTokenChatComponent from "../../components/TransferTokenChatComponent";
import { store } from "../../store/zustand";
import { connectWallet } from "../../lib/web3";
import { useNavigate } from "react-router-dom";
import { useChat } from "../../context/chatContext";
import {
  getFriendsFor,
  getMessageFor,
  getUserDetails,
  getUsers,
  uploadMessageFor,
} from "../../lib/filebase";

function Chat(props) {
  const storeState = store((state) => state);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatDates, setChatDates] = useState([]);
  const media = useMedia();
  const token = useToken();
  const chat = useChat();
  const { activeChat } = chat;
  const { isMedia, handleMedia } = media;
  const { handleToken } = token;

  useEffect(() => {
    (async () => {
      await storeState.setMessagesList([]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await getMessageFor(
        storeState,
        storeState.accounts[0],
        activeChat.wallet
      );
    })();
  }, [storeState.messagesList]);

  const getChatDate = (state) => {
    if (state.messagesList.length > 0) {
      let allDate = [];
      allDate.push(state.messagesList[0].date);
      state.messagesList.forEach((message) => {
        if (!allDate.includes(`${message.date}`)) {
          allDate.push(message.date);
        }
      });
      setChatDates(allDate);
    }
  };

  useEffect(() => {
    (async () => {
      await getChatDate(storeState);
    })();
  }, [storeState.messagesList]);

  const sendMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async (e) => {
    if (e.key == "Enter") {
      const message = e.target.value;
      if (message !== "") {
        await uploadMessageFor(
          storeState.accounts[0],
          storeState.userProfile.username,
          message,
          activeChat.username,
          activeChat.wallet
        );
        setMessage("");
      }
    }
  };

  // console.log(media.isMedia, "yhrhfrj");

  return (
    <div className="chat relative w-full flex flex-col justify-between h-[95vh] text-white">
      <div className="chat-top">
        <div className="chat-header flex justify-between items-center px-[20px] py-[13px]">
          <div className="right-chat-header flex items-center gap-[10px]">
            <div className="username-chat">{activeChat.username}</div>
            <div className="status bg-green-500 w-[8px] h-[8px] rounded-full"></div>
          </div>
          <img src={user} alt="" className="left-chat-header" />
        </div>
        <hr />
        <div className="profile-flex flex items-center pt-2 h-[20vh]  justify-between mb-[10px] px-[20px]">
          <div>
            <img
              src={activeChat.imgUrl}
              alt=""
              className="profileImage flex items-center justify-center rounded-full w-[90px] h-[90px] border border-[#FFFFFF] border-opacity-60"
            />

            <h2 className="profile-name text-xl font-bold">
              {activeChat.username}
            </h2>
          </div>
          <div className="button-flex flex items-center gap-[40px]">
            <button className="button-1  w-[127px] button bg-[#FFFFFF] bg-opacity-[30%] rounded-[10px] h-[30px] text-sm hover:bg-opacity-10">
              Remove friend
            </button>
            <button className="button-2 w-[67px] button bg-[#FFFFFF] bg-opacity-[30%] rounded-[10px] h-[30px] text-sm hover:bg-opacity-10">
              Block
            </button>
          </div>
        </div>
        {/* mutual channels */}

        <div className="mutual-flex flex items-center gap-[10px] mb-[10px] px-[20px]">
          <img src={mutual} alt="" width="20px" />
          <h2>1 Mutual channel</h2>
        </div>

        <p className="description text-[#FFFFFF] text-sm font-light mb-[12px] px-[20px] italic">
          This is the beginning of your direct message history with{" "}
          {activeChat.username}
        </p>
      </div>

      {/* chat body */}

      <div className=" flex overflow-y-scroll flex-col text-sm gap-[20px]  py-[10px] px-[15px] bg-[#1A1B1F] bg-opacity-10  h-full">
        {chatDates.length === 0 && (
          <div className=" flex  items-center">
            <div className="line w-full h-[1px] bg-white opacity-[0.2]"></div>
            <div className=" text-[#FFFFFF] text-xs text-center  font-semibold w-[300px]">
              NO CHAT
            </div>
            <div className=" w-full h-[1px] bg-white opacity-[0.2]"></div>
          </div>
        )}
        {chatDates.map((query1, index1) => {
          return (
            <>
              <div key={index1} className="flex  items-center">
                <div className=" w-full h-[1px] bg-white opacity-[0.2]"></div>
                <div className=" text-[#FFFFFF] text-xs text-center  font-semibold w-[300px]">
                  {query1}
                </div>
                <div className="line w-full h-[1px] bg-white opacity-[0.2]"></div>
              </div>
              {storeState.messagesList.map((query, index) => {
                return (
                  <div>
                    {query.sender === storeState.accounts[0] &&
                    query.date === query1 ? (
                      <div className=" rounded-l-[10px] flex flex-col items-end self-end">
                        <ChatBox time={query.time}>{query.message}</ChatBox>
                      </div>
                    ) : (
                      (() => {
                        if (
                          query.sender === activeChat.wallet &&
                          query.date === query1
                        ) {
                          return (
                            <div className=" rounded-r-[10px] self-start ">
                              <ChatBox time={query.time}>
                                {query.message}
                              </ChatBox>
                            </div>
                          );
                        }
                      })()
                    )}
                  </div>
                );
              })}
            </>
          );
        })}

        {/* <div className="chat-sender rounded-r-[10px] self-start">
          <ShareMediaContact />
          <ShareMediaAudio />
          <RequestTokenChatComponent />
        </div> */}

        {/* <div className="chat-border flex  items-center">
          <div className="line w-full h-[1px] bg-white opacity-[0.2]"></div>
          <div className="chat-date text-[#FFFFFF] text-xs ml-2 font-semibold w-[300px]">
            January, 29th, 2023
          </div>
          <div className="line w-full h-[1px] bg-white opacity-[0.2]"></div>
        </div> */}
      </div>
      {/* chat body ends */}
      {/* chat border*/}

      {/* text area */}
      <div className="chat-area h-[150px] mt-2 relative w-full px-[20px]">
        <button
          className="add-media  absolute left-[30px] top-[15px] rounded-full flex items-center justify-center w-[30px] h-[30px] bg-[#ffffff]"
          onClick={handleMedia}
        >
          <img src={addMedia} alt="" />
        </button>
        <input
          type="text"
          onInput={(e) => sendMessage(e)}
          onKeyDown={(e) => handleSendMessage(e)}
          value={message}
          className="text-area w-full h-[53px]  bg-[#FFFFFF] bg-opacity-[30%] rounded-[10px] text-[#FFFFFF] text-sm font-light pl-[94px] py-[10px] resize-none shadow-2xl"
          placeholder={`Message @${activeChat.username}`}
        />
        <button className="rounded-full absolute top-[15px] right-[30px] flex items-center justify-center w-[30px] h-[30px] bg-[#ffffff]">
          <img
            src={send}
            alt=""
            className="send-chat  w-[15px] h-[15px]"
            onClick={handleToken}
          />
        </button>
      </div>
    </div>
  );
}

export default Chat;
