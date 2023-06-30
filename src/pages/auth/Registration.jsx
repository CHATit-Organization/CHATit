import React, { useEffect, useState } from "react";
import logo from "../../assets/svg/index/logo.svg";
import back from "../../assets/svg/auth/back.svg";
import profile from "../../assets/svg/auth/profile.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { store } from "../../store/zustand";
import { connectWallet } from "../../lib/web3";
import { saveUser, saveUserDetails } from "../../lib/filebase";
import { isRegistered } from "../../lib/chatitContract";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function Registration() {
  const storeState = store((state) => state);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    address: "",
    username: "",
    about: "",
    img: "",
  });
  const [imgUrl, setImgUrl, removeImgUrl] = useState();
  const [hovering, setHovering, removeHovering] = useState(false);
  const [canCreate, setCanCreate, removeCanCreate] = useState(false);
  const [isLoading, setIsLoading, removeIsLoading] = useState(false);
  const registerBtn = document.getElementById("register-Btn");

  useEffect(() => {
    (async () => {
      await connectWallet(storeState).then((res) => {
        if (res === false) {
          navigate("/");
        }
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (storeState.chatitContract !== null) {
        await isRegistered(storeState).then((res) => {
          if (res !== false) {
            navigate("/dashboard");
          }
        });
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (storeState.avatarUrl !== "") {
        setIsLoading(true);
        (async () => {
          await get2dUrl(storeState.avatarUrl);
          setIsLoading(false);
        })();
      }
    })();
  }, [storeState.avatarUrl]);

  const get2dUrl = (avatarUrl) => {
    const params = {
      model: `${avatarUrl}`,
      scene: "fullbody-portrait-v1-transparent",
      armature: "ArmatureTargetMale",
      blendShapes: {},
    };
    const http = new XMLHttpRequest();
    http.open("POST", "https://render.readyplayer.me/render");
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(params));
    http.onload = function () {
      const imgUrl = JSON.parse(http.responseText).renders[0];
      if (imgUrl !== "") {
        console.log("png: ", imgUrl);
        setImgUrl(imgUrl);
        userDetails.img = imgUrl;
        storeState.setProfileImg(imgUrl);
      } else {
        window.alert("Error while getting created avatar. Try again later");
      }
    };
  };

  const handleBtnColour = () => {
    if (registerBtn) {
      if (
        userDetails.username !== "" &&
        userDetails.img !== "" &&
        userDetails.about !== ""
      ) {
        registerBtn.style.backgroundColor = "rgb(29, 32, 62)";
      } else {
        registerBtn.style.backgroundColor = "rgb(68, 68, 76)";
      }
    }
  };

  handleBtnColour();
  const handleUsername = (e) => {
    const username = e.target.value;
    userDetails.username = username;
    if (username !== "" && userDetails.img !== "" && userDetails.about !== "") {
      registerBtn.style.backgroundColor = "rgb(29, 32, 62)";
    } else {
      registerBtn.style.backgroundColor = "rgb(68, 68, 76)";
    }
  };

  const handleAbout = (e) => {
    const about = e.target.value;
    userDetails.about = about;
    if (about !== "" && userDetails.img !== "" && userDetails.username !== "") {
      registerBtn.style.backgroundColor = "rgb(29, 32, 62)";
    } else {
      registerBtn.style.backgroundColor = "rgb(68, 68, 76)";
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (
      registerBtn &&
      registerBtn.style.backgroundColor !== "rgb(68, 68, 76)"
    ) {
      await saveUserDetails(
        userDetails.username,
        userDetails.about,
        userDetails.img,
        storeState.accounts[0],
        Date.now(),
        0
      );
       try {
          saveUser(storeState.accounts[0]);
          await storeState.chatitContract.methods
            .register(
              `https://console.filebase.com/object/fancord-users/fancord-user-details-for-${storeState.accounts[0]}`
            )
            .send({ from: storeState.accounts[0] })
            .then(() => {
              navigate("/dashboard");
            });
        } catch (err) {
          toast.error(
            "Error while registering user on blockchain. Try again later",
            { transition: Slide, position: toast.POSITION.TOP_CENTER }
          );
        }
    } else if (userDetails.img === "") {
      toast.info("You need to create an avatar to register", {
        transition: Slide,
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (userDetails.username === "") {
      toast.info("You need to input a username to register", {
        transition: Slide,
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (userDetails.about === "") {
      toast.info("You need to input about to register", {
        transition: Slide,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };


  return (
    <div className="  w-[90vw] h-[95vh] bg-[#44444c] shadow-2xl rounded-lg text-white mx-auto ml-[-50px]">
      <div className="regNav flex justify-between items-center mx-[50px] mb-[4vh] mt-[10px]">
        <img src={logo} alt="" />
        <button onClick={() => {navigate("/")}} className="backBtn flex items-center gap-2 bg-[#7758d1] rounded-[20px] shadow-xl px-[20px] py-[5px] hover:bg-[#7758d1]/80">
          <img src={back} alt="" />
          <p>Back</p>
        </button>
      </div>
      <h2 className="regHeader text-3xl font-semibold text-center">
        CHATit REGISTRATION
      </h2>
      <form
        action=""
        className="formContainer flex justify-between mx-[200px] mt-[8vh] mb-[4vh] h-[360px]"
      >
        {/* parent container */}
        {isLoading ? (
          <div className="imageRegBlur bg-[black] bg-opacity-[95%] rounded-[15px] flex items-center justify-center w-[300px] h-[45vh] relative">
            <motion.img
              src={logo}
              alt="Fancord"
              animate={
                isLoading && {
                  rotate: 360,
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                }
              }
            />
          </div>
        ) : (
          <div className="imageReg  bg-[#bbbbbb] bg-opacity-[92%] rounded-[15px] flex items-center justify-center w-[300px] h-[45vh] relative">
            <div className="imgBorder border-[#44444c] border-4 rounded-full w-[120px] h-[120px] flex items-center justify-center">
              <img
                onClick={() => {
                  navigate("/create-avatar");
                }}
                src={imgUrl ? imgUrl : profile}
                alt=""
                className={
                  imgUrl
                    ? "imgUpload absolute top-0 left-0 w-full h-full cursor-pointer rounded-[15px] bg-[#1d203e]"
                    : ""
                }
                onMouseOver={() => {
                  if (imgUrl) {
                    setHovering(true);
                  }
                }}
                onMouseOut={() => {
                  setHovering(false);
                }}
              />
            </div>

            {/* container that will overlay when hovering on the parent */}
            {hovering && (
              <div
                onClick={() => {
                  navigate("/create-avatar");
                }}
              >
                <div
                  onClick={() => {
                    navigate("/create-avatar");
                  }}
                  className="overlayShow  absolute flex items-center justify-center top-0 left-0 w-full h-full bg-[#000000]/50 rounded-[15px] transition-opacity duration-300"
                >
                  <div className="imgBorder border-[#44444c] border-4 rounded-full w-[120px] h-[120px] flex items-center justify-center">
                    <img
                      onClick={() => {
                        navigate("/create-avatar");
                      }}
                      src={profile}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="regContainer flex flex-col items-center pt-[20px] px-[10px] gap-[20px] w-[300px] h-[45vh] rounded-[15px] bg-[#775bd1] self-end shadow-2xl mt-[-50px]">
          <input
            onInput={(e) => {
              handleUsername(e);
            }}
            type="text"
            placeholder="Username"
            className="username w-[280px] h-[40px] rounded-[10px] pl-[20px]  bg-[#bbbbbb] bg-opacity-[92%] placeholder:text-white"
          />
          <textarea
            onInput={(e) => {
              handleAbout(e);
            }}
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="About"
            className="about w-[280px] h-[14vh]  rounded-[10px] pl-[20px] pt-[20px]  bg-[#bbbbbb] bg-opacity-[92%] placeholder:text-white"
          ></textarea>
          <button
            id="register-Btn"
            onClick={async (e) => await handleCreate(e)}
            className="registerButton  w-[150px] h-[30px] rounded-[10px] bg-[#44444c] hover:bg-opacity-90  text-sm shadow-xl flex items-center justify-center"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
