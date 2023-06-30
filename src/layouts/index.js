import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connectWallet } from "../lib/web3";
import AppLayouts from "./appLayouts";
import { store } from "../store/zustand";
import { getFriendsFor, getUserDetails, getUsers } from "../lib/filebase";

function Layouts() {
  const storeState = store((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (storeState.chatitContract === null) {
        await connectWallet(storeState).then((res) => {
          if (res === false) {
            navigate("/");
          }
        });
      }
    })();
  }, []);

  const fillterFriends = async () => {
    for (let i = 0; i < storeState.usersList.length; i++) {
      if (storeState.usersList[i] !== storeState.accounts[0]) {
        // console.log("us: ", storeState.usersList[i]);
        await getUserDetails(storeState, storeState.usersList[i], false);
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (storeState.chatitContract !== null) {
        await getUserDetails(storeState, storeState.accounts[0], true);
        await getUsers(storeState);
        await fillterFriends();
      }
    })();
  }, [storeState.usersList]);

  // useEffect(() => {
  //   (async () => {
  //     if (storeState.chatitContract !== null) {
  //       await getUsers(storeState);
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     // await fillterFriends();
  //     console.log("friends: ", storeState.usersList);
  //   })();
  // }, [storeState.usersList]);

  return (
    <div className="layout rounded-lg  bg-gradient-to-l from-[#7758D1] to-[#F7CBFD]">
      <AppLayouts />
    </div>
  );
}

export default Layouts;
