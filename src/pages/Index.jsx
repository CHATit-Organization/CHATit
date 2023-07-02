import React from "react";
import ChatIt from "../assets/svg/index/Chatit.svg";
import Stepper from "../assets/svg/landing/stepper.svg";
import SocialFiLogo from "../assets/images/Saly1.png";
import { motion } from "framer-motion";
import DeFiLogo from "../assets/images/Saly2.png";
import GameFiLogo from "../assets/images/Saly3.png";
import { Link } from "react-router-dom";
import { store } from "../store/zustand";
import { connectWallet } from "../lib/web3";
import { useNavigate } from "react-router-dom";
import { isRegistered } from "../lib/chatitContract";

export default function Index() {
  const storeState = store((state) => state);
  const navigate = useNavigate();
  const handleConnectWallet = async () => {
    const res = await connectWallet(storeState);
    if (res !== false) {
      navigate("/auth");
    }
  };
  const variantsWelcome = {
    hidden: { x: "200%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };
  const variantsSocials = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };
  const variantsDefi = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };
  const variantsGame = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  return (
    <div className="bg-[#44444C] relative left-[-25px] h-[95vh] w-[100vw] overflow-hidden rounded-lg index">
      <div className="index-header  @apply bg-[#1D203E] h-[10vh] rounded-t-lg py-2 px-[50px] flex justify-between items-center">
        <img src={ChatIt} alt="logo" className="w-[100px]" />

        <div>
          <ul className="index-header-nav  flex justify-between gap-[80px] items-center text-white font-semibold text-lg">
            <li>About</li>
            <li>Contact</li>
            <li>
              <Link>
                <button
                  onClick={() => handleConnectWallet()}
                  className="index-header-button bg-[#7758D1] w-[133px] h-[43px] rounded-lg "
                >
                  Connect
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="index-body flex justify-between gap-[30px] w-full px-[20px] items-center h-[70vh] mt-[80px]">
        <motion.div
          className="welcome flex flex-col self-center bg-[#1D203E] w-[400px] h-[50vh] shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={variantsWelcome}
        >
          <div className="welcome-card text-center p-6">
            <h3 className="welcome-card-header text-[#FFFFFF] text-center  font-extrabold">
              WELCOME TO CHATit
            </h3>
            <p className="welcome-card-text text-[#CBB7A1] text-justify text-sm mt-2">
              CHATit is a web3 Social-Fi platform, with in built De-Fi and
              Game-Fi protocols controlled and overseen by smart contracts on
              the blockchain. Through our interface users can seamlessly
              socialise, learn, find community where they can freely express
              themselves, enjoy Defi services, create polls and vote count,
              track and bet on real life events, get paid for creating a
              community with active users and earn as they play.
            </p>
            <Link>
              <button
                onClick={() => handleConnectWallet()}
                className="welcome-card-button bg-[#7758D1] w-[133px] h-[30px] rounded-lg text-white font-semibold text-lg mt-4"
              >
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="socialFi flex flex-col self-start bg-[#CE965A] w-[250px] h-[50vh] rounded-lg p-4 shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={variantsSocials}
          style={{
            backgroundImage: `url(${SocialFiLogo})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h4 className="socialFi-header font-extrabold text-[#44444C]  text-3xl text-center">
              SocialFi
            </h4>
            <div className="socailFi-contents flex justify-center items-center flex-row h-[20vh] gap-[30px]">
              <div className="socialFi-stepper scale-150">
                <img src={Stepper} alt="stepper" />
              </div>
              <div className="social-text flex flex-col gap-6 text-xs font-extrabold text-[#FFFFFF]">
                <p>Find the right community for you</p>
                <p>Socialise, make friends and chat</p>
                <p>Teach and Learn</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="deFi flex flex-col self-end bg-[#7758D1] w-[250px] h-[50vh] rounded-lg p-4 shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={variantsDefi}
          style={{
            backgroundImage: `url(${DeFiLogo})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h4 className="deFi-header font-extrabold text-[#44444C]  text-3xl text-center">
              DEFI
            </h4>
            <div className="deFi-contents  flex justify-center items-center flex-row h-[20vh] gap-[30px]">
              <div className="deFi-stepper scale-150">
                <img src={Stepper} alt="stepper" />
              </div>
              <div className="deFi-text flex flex-col gap-6 text-xs font-extrabold text-[#FFFFFF]">
                <p>Send tokens to friends and community</p>
                <p>Requset tokens from friends</p>
                <p>Earn Tokens</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="gameFi flex flex-col self-start bg-[#E39DE5] w-[250px] h-[50vh] rounded-lg p-4 shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={variantsGame}
          style={{
            backgroundImage: `url(${GameFiLogo})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h4 className="gameFi-header font-extrabold text-[#44444C]  text-3xl text-center mb-8">
              GameFi
            </h4>
            <div className="gameFi-contents flex justify-center items-center flex-row h-[15vh] gap-[30px] mt-4">
              <div className="gameFi-stepper scale-150">
                <img src={Stepper} alt="stepper" />
              </div>
              <div className="gameFi-text flex flex-col gap-4 text-[10px]  font-extrabold text-[#FFFFFF]">
                <p>Earn as you play by reporting scammers and spammers</p>
                <p>Create polls and count votes per poll option</p>
                <p>Bet to win over argument and real life events</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div></div>
      </div>
    </div>
  );
}
