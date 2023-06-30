import { create } from "zustand";

const store = create((set) => ({
  web3: null,
  setWeb3: (web3) => set(() => ({ web3 })),
  removeWeb3: () => set(() => ({ web3: null })),

  chtContract: null,
  setchtContract: (chtContract) => set(() => ({ chtContract })),
  removechtContract: () => set(() => ({ chtContract: null })),

  chatitContract: null,
  setchatitContract: (chatitContract) => set(() => ({ chatitContract })),
  removechatitContract: () => set(() => ({ chatitContract: null })),

  accounts: [],
  setAccounts: (accounts) => set(() => ({ accounts })),
  removeAccounts: () => set(() => ({ accounts: [] })),

  ftmBalance: 0,
  setFtmBalance: (ftmBalance) => set(() => ({ ftmBalance })),
  removeFtmBalance: () => set(() => ({ ftmBalance: 0 })),

  chxBalance: 0,
  setChxBalance: (chxBalance) => set(() => ({ chxBalance })),
  removeChxBalance: () => set(() => ({ chxBalance: 0 })),

  avatarUrl: "",
  setAvatarUrl: (avatarUrl) => set(() => ({ avatarUrl })),
  removeAvatarUrl: () => set(() => ({ avatarUrl: "" })),

  profileImg: "",
  setProfileImg: (profileImg) => set(() => ({ profileImg })),
  removeProfileImg: () => set(() => ({ profileImg: "" })),

  userProfile: {
    creationDate: 0,
    wallet: "",
    username: "",
    about: "",
    imgUrl: "",
    lastLockTime: 0,
  },
  setUserProfile: (userProfile) => set(() => ({ userProfile })),
  removeUserProfile: () =>
    set(() => ({
      userProfile: {
        creationDate: 0,
        wallet: "",
        username: "",
        about: "",
        imgUrl: "",
        lastLockTime: 0,
      },
    })),

  friendsList: [],
  setFriendsList: (friendsList) => set(() => ({ friendsList })),
  removeFriendsList: () => set(() => ({ friendsList: [] })),

  messagesList: [],
  setMessagesList: (messagesList) => set(() => ({ messagesList })),
  removeMessagesList: () => set(() => ({ messagesList: [] })),

  usersList: [],
  setUsersList: (usersList) => set(() => ({ usersList })),
  removeUsersList: () => set(() => ({ usersList: [] })),

  transferStatus: null,
  setTransferStatus: (transferStatus) => set(() => ({ transferStatus })),
  removeTransferStatus: () => set(() => ({ transferStatus: null })),
}));

export { store };
