require("dotenv").config();
const {
  REACT_APP_MY_ENV_VARIABLE_FILEBASE_ACCESS_KEY_ID,
  REACT_APP_MY_SERVER_VARIABLE_FILEBASE_SECRET_ACCESS_KEY,
} = process.env;
const AWS = require("aws-sdk");
const filebase = new AWS.S3({
  endpoint: "https://s3.filebase.com",
  signatureVersion: "v4",
  accessKeyId: REACT_APP_MY_ENV_VARIABLE_FILEBASE_ACCESS_KEY_ID,
  secretAccessKey: REACT_APP_MY_SERVER_VARIABLE_FILEBASE_SECRET_ACCESS_KEY,
});

const saveUserDetails = (
  username,
  about,
  imgUrl,
  wallet,
  currentTime,
  LockTime
) => {
  const userSample = {
    Bucket: "fancord-users",
    Key: `fancord-user-details-for-${wallet}`,
    Body:
      "[" +
      `"${currentTime}", ` +
      " " +
      `"${wallet}",` +
      " " +
      `"${username}",` +
      " " +
      `"${about}", ` +
      " " +
      `"${imgUrl}", ` +
      " " +
      `"${LockTime}"` +
      "]",
    ContentType: "fancordUser",
    Metadata: {
      owner: `${username}`,
    },
  };
  console.log("User details ", userSample);
  filebase.putObject(userSample, (err, data) => {
    if (err) {
      console.log("Error! while uploading user details", err.stack);
      window.alert("Error while uploading user details. Try again later");
    } else {
      console.log("User details uploaded successfully", data);
    }
  });
};

const getUserDetails = (state, wallet, isIndex) => {
  const params = {
    Key: `fancord-user-details-for-${wallet}`,
    Bucket: "fancord-users",
  };
  return filebase.getObject(params, (err, data) => {
    if (err) {
      console.error("user details does not exist: ", err.stack);
      // console.clear();
    } else {
      const userDetails = Buffer.from(data.Body, "utf8").toString();
      // console.log("details: ", userDetails);
      const profileFormatted = userDetails.replaceAll("\n", " ");
      const json = JSON.parse(profileFormatted);
      const userProfile = {
        creationDate: json[0],
        wallet: json[1],
        username: json[2],
        about: json[3],
        imgUrl: json[4],
        lastLockTime: json[5],
      };
      if (isIndex === true) {
        state.setUserProfile(userProfile);
      } else {
        if (state.friendsList.length === 0) {
          state.friendsList.push(userProfile);
        } else {
          let wallets = [];
          state.friendsList.forEach((friend) => {
            wallets.push(friend.wallet);
          });
          if (!wallets.includes(`${userProfile.wallet}`)) {
            state.friendsList.push(userProfile);
          }
        }
      }
      return userProfile;
    }
  });
};

const saveFriendFor = (sender, username, friend) => {
  const params = {
    Key: `fancord-friends-list-for-${sender}`,
    Bucket: "fancord-friends",
  };
  filebase.getObject(params, (err, data) => {
    if (err) {
      const friendSample = {
        Bucket: "fancord-friends",
        Key: `fancord-friends-list-for-${sender}`,
        Body: "[" + `"${Date.now()}", ` + " " + `"${friend}"` + "]",
        ContentType: "fancordFriends",
        Metadata: {
          owner: `${username}`,
        },
      };
      console.log("details ", friendSample);
      filebase.putObject(friendSample, (err, data) => {
        if (err) {
          console.log("Error! while uploading friend to database", err.stack);
          window.alert(
            "Error while uploading friend to database. Try again later"
          );
        } else {
          console.log("friend uploaded succesfully", data);
        }
      });
    } else {
      const friends = Buffer.from(data.Body, "utf8").toString();
      const newFriendSample = {
        Bucket: "fancord-friends",
        Key: `fancord-friends-list-for-${sender}`,
        Body:
          `${friends}` +
          "##" +
          "[" +
          `"${Date.now()}", ` +
          " " +
          `"${friend}"` +
          "]",
        ContentType: "fancordFriends",
        Metadata: {
          owner: `${username}`,
        },
      };
      console.log("details ", newFriendSample);
      filebase.putObject(newFriendSample, (err, data) => {
        if (err) {
          console.log("Error! while uploading friend to database", err.stack);
          window.alert(
            "Error while uploading friend to database. Try again later"
          );
        } else {
          console.log("friend uploaded succesfully", data);
        }
      });
    }
  });
};

const getFriendsFor = (state, wallet) => {
  const params = {
    Key: `fancord-friends-list-for-${wallet}`,
    Bucket: "fancord-friends",
  };
  return filebase.getObject(params, (err, data) => {
    if (err) {
      // console.clear();
    } else {
      const friends = Buffer.from(data.Body, "utf8").toString();
      // console.log("details: ", friends);
      const friendsArray = friends.split("##");
      let friendsList = [];
      for (let i = 0; i < friendsArray.length; i++) {
        const friendsArrayFormatted = friendsArray[i].replaceAll("\n", " ");
        const json = JSON.parse(friendsArrayFormatted);
        const friendSample = {
          date: json[0],
          friend: json[1],
        };
        friendsList.push(friendSample);
      }
      // console.log("friends list: ", friendsList);
      state.setFriendsList(friendsList);
      return friendsList;
    }
  });
};

const uploadMessageFor = (
  sender,
  username,
  message,
  receiverUsername,
  receiver
) => {
  const params = {
    Key: `fancord-messages-between-${sender}-and-${receiver}`,
    Bucket: "fancord-dm-messages",
  };
  filebase.getObject(params, (err, data) => {
    if (err) {
      const params = {
        Key: `fancord-messages-between-${receiver}-and-${sender}`,
        Bucket: "fancord-dm-messages",
      };
      filebase.getObject(params, (err, data) => {
        if (err) {
          const messageSample = {
            Bucket: "fancord-dm-messages",
            Key: `fancord-messages-between-${sender}-and-${receiver}`,
            Body:
              "[" +
              `"${Date.now()}",` +
              " " +
              `"${sender}",` +
              " " +
              `"${message}"` +
              "]",
            ContentType: "fancordMessage",
            Metadata: {
              owner: `${username}`,
            },
          };
          console.log("details ", messageSample);
          filebase.putObject(messageSample, (err, data) => {
            if (err) {
              console.log(
                "Error! while uploading message to database",
                err.stack
              );
              window.alert(
                "Error while uploading message to database. Try again later"
              );
            } else {
              console.log("message uploaded succesfully", data);
            }
          });
        } else {
          const messages = Buffer.from(data.Body, "utf8").toString();
          const newMessageSample = {
            Bucket: "fancord-dm-messages",
            Key: `fancord-messages-between-${receiver}-and-${sender}`,
            Body:
              `${messages}` +
              "##" +
              "[" +
              `"${Date.now()}",` +
              " " +
              `"${sender}",` +
              " " +
              `"${message}"` +
              "]",
            ContentType: "fancordMessage",
            Metadata: {
              owner: `${receiverUsername}`,
            },
          };
          console.log("details ", newMessageSample);
          filebase.putObject(newMessageSample, (err, data) => {
            if (err) {
              console.log(
                "Error! while uploading message to database",
                err.stack
              );
              window.alert(
                "Error while uploading message to database. Try again later"
              );
            } else {
              console.log("message uploaded succesfully", data);
            }
          });
        }
      });
    } else {
      const messages = Buffer.from(data.Body, "utf8").toString();
      const newMessageSample = {
        Bucket: "fancord-dm-messages",
        Key: `fancord-messages-between-${sender}-and-${receiver}`,
        Body:
          `${messages}` +
          "##" +
          "[" +
          `"${Date.now()}",` +
          " " +
          `"${sender}",` +
          " " +
          `"${message}"` +
          "]",
        ContentType: "fancordMessage",
        Metadata: {
          owner: `${username}`,
        },
      };
      console.log("details ", newMessageSample);
      filebase.putObject(newMessageSample, (err, data) => {
        if (err) {
          console.log("Error! while uploading message to database", err.stack);
          window.alert(
            "Error while uploading message to database. Try again later"
          );
        } else {
          console.log("message uploaded succesfully", data);
        }
      });
    }
  });
};

const getMessageFor = (state, sender, receiver) => {
  const params = {
    Key: `fancord-messages-between-${sender}-and-${receiver}`,
    Bucket: "fancord-dm-messages",
  };
  filebase.getObject(params, (err, data) => {
    if (err) {
      const params = {
        Key: `fancord-messages-between-${receiver}-and-${sender}`,
        Bucket: "fancord-dm-messages",
      };
      filebase.getObject(params, (err, data) => {
        if (err) {
          console.log("No messages for these users on record");
        } else {
          const messages = Buffer.from(data.Body, "utf8").toString();
          // console.log("details: ", messages);
          const messagesArray = messages.split("##");
          // console.log("split: ", messagesArray);
          let messagesList = [];
          for (let i = 0; i < messagesArray.length; i++) {
            const messagesArrayFormatted = messagesArray[i].replaceAll(
              "\n",
              " "
            );
            const json = JSON.parse(messagesArrayFormatted);
            const dateConv = new Date(parseInt(json[0]));
            const messageTime = `${dateConv.toLocaleTimeString()}`;
            const messageDate = `${dateConv.toLocaleDateString()}`;
            const messageSample = {
              time: messageTime,
              date: messageDate,
              sender: json[1],
              message: json[2],
            };
            messagesList.push(messageSample);
          }
          // console.log("messages list: ", messagesList);
          state.setMessagesList(messagesList);
          return messagesList;
        }
      });
    } else {
      const messages = Buffer.from(data.Body, "utf8").toString();
      // console.log("details: ", messages);
      const messagesArray = messages.split("##");
      // console.log("split: ", messagesArray);
      let messagesList = [];
      for (let i = 0; i < messagesArray.length; i++) {
        const messagesArrayFormatted = messagesArray[i].replaceAll("\n", " ");
        const json = JSON.parse(messagesArrayFormatted);
        const dateConv = new Date(parseInt(json[0]));
        const messageTime = `${dateConv.toLocaleTimeString()}`;
        const messageDate = `${dateConv.toLocaleDateString()}`;
        const messageSample = {
          time: messageTime,
          date: messageDate,
          sender: json[1],
          message: json[2],
        };
        messagesList.push(messageSample);
      }
      // console.log("messages list: ", messagesList);
      state.setMessagesList(messagesList);
      return messagesList;
    }
  });
};

const saveUser = (sender) => {
  const params = {
    Key: `fancord-all-users-list`,
    Bucket: "fancord-users-list",
  };
  return filebase.getObject(params, (err, data) => {
    if (err) {
      const userSample = {
        Bucket: "fancord-users-list",
        Key: `fancord-all-users-list`,
        Body: "[" + `"${sender}"` + "]",
        ContentType: "fancordUsersList",
        Metadata: {
          owner: `fancord`,
        },
      };
      // console.log("details ", userSample);
      filebase.putObject(userSample, (err, data) => {
        if (err) {
          console.log("Error! while uploading user to database", err.stack);
          window.alert(
            "Error while uploading user to database. Try again later"
          );
          return false;
        } else {
          console.log("user uploaded succesfully", data);
          return true;
        }
      });
    } else {
      const users = Buffer.from(data.Body, "utf8").toString();
      const newUserSample = {
        Bucket: "fancord-users-list",
        Key: `fancord-all-users-list`,
        Body: `${users}` + "##" + "[" + `"${sender}"` + "]",
        ContentType: "fancordUserList",
        Metadata: {
          owner: "fancord",
        },
      };
      // console.log("details ", newUserSample);
      filebase.putObject(newUserSample, (err, data) => {
        if (err) {
          console.log("Error! while uploading user to database", err.stack);
          window.alert(
            "Error while uploading user to database. Try again later"
          );
          return false;
        } else {
          console.log("user uploaded succesfully", data);
          return true;
        }
      });
    }
  });
};

const getUsers = (state) => {
  const params = {
    Key: `fancord-all-users-list`,
    Bucket: "fancord-users-list",
  };
  return filebase.getObject(params, (err, data) => {
    if (err) {
    } else {
      const users = Buffer.from(data.Body, "utf8").toString();
      // console.log("details: ", users);
      const usersArray = users.split("##");
      let usersList = [];
      for (let i = 0; i < usersArray.length; i++) {
        const usersArrayFormatted = usersArray[i].replaceAll("\n", " ");
        const json = JSON.parse(usersArrayFormatted);
        if (usersList.length === 0) {
          usersList.push(json[0]);
        } else {
          if (!usersList.includes(`${json[0]}`)) {
            usersList.push(json[0]);
          }
        }
      }
      // console.log("users list: ", usersList);
      state.setUsersList(usersList);
      return usersList;
    }
  });
};
export {
  saveUserDetails,
  getUserDetails,
  saveFriendFor,
  getFriendsFor,
  uploadMessageFor,
  getMessageFor,
  saveUser,
  getUsers,
};
