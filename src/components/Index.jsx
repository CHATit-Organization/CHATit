import React from "react";
import UploadMedia from "./UploadMedia";
import FriendsSearch from "./FriendsSearch";
import Deals from "./Deals";
import SendToken from "./SendToken";
import RequestToken from "./RequestToken";
import ShareDetails from "./ShareDetails";
import RequestDetails from "./RequestDetails";
import CreatePoll from "./CreatePoll";
import TransactionSuccess from "./TransactionSuccess";
import TransactionFailed from "./TransactionFailed";
import { useMedia } from "../context/mediaContext";
import { useToken } from "../context/tokenContext";
import { useHunter } from "../context/hunterContext";
import MediaShareImage from "./MediaShareImage";
import MediaShareAudio from "./MediaShareAudio";
import MediaShareVideo from "./MediaShareVideo";
import Earn from "./Earn";
import ReportSpammers from "./ReportSpammers";
import ReportSpamFailed from "./ReportSpamFailed";
import UserBanned from "./UserBanned";
import ReportSuccessful from "./ReportSuccessful";
import ReportSuccessfulAlt from "./ReportSuccessfulAlt";
import PLaceBet from "./PLaceBet";
import { useBet } from "../context/betContext";

function Index() {
  const media = useMedia();
  const token = useToken();
  const hunter = useHunter();
  const betz = useBet();

  const { initiateHunt, hunt, proceedHunt, ProceedToHunt } = hunter;
  const { initiateBet, bet } = betz;

  const {
    isMedia,
    friendsMedia,
    handleMedia,
    handleShareAudio,
    handleShareImage,
    handleShareVideo,
    shareFriendsContact,
    shareAudio,
    shareImage,
    shareVideo,
    handleShareFriendsContact,
  } = media;

  const {
    isToken,
    sendToken,
    receiveToken,
    earnToken,
    poll,
    handleToken,
    handleEarnToken,
    handlePoll,
    handleReceiveToken,
    handleSendToken,
    showSendDetails,
    showRequestDetails,
    requestDetails,
    shareDetails,
    isSuccess,
    setSuccess,
  } = token;

  return (
    <div>
      {isMedia && (
        <>
          <div
            className="subcomponents-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleMedia}
          ></div>
          <div className="subcomponent upload-media text-white absolute bg-[#222226] rounded-[20px] p-[30px] z-50 w-[550px] h-auto top-[35%] left-[30%] shadow-xl">
            <UploadMedia />
          </div>
        </>
      )}

      {shareFriendsContact && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleShareFriendsContact}
          ></div>
          <div className="mediaFriendsShareDiv  absolute z-50 friends-search top-[15%] left-[35%] shadow-xl">
            <FriendsSearch />
          </div>
        </div>
      )}
      {shareAudio && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleShareAudio}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%] ">
            <MediaShareAudio />
          </div>
        </div>
      )}
      {shareImage && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleShareImage}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <MediaShareImage />
          </div>
        </div>
      )}
      {shareVideo && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleShareVideo}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <MediaShareVideo />
          </div>
        </div>
      )}
      {/* token component */}
      {isToken && (
        <>
          <div
            className="subcomponents-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleToken}
          ></div>
          <div className="subcomponent  text-white absolute bg-[#222226] rounded-[20px] p-[30px] z-50 upload-media w-[550px] h-auto top-[35%] left-[30%] shadow-xl">
            <Deals />
          </div>
        </>
      )}
      {/* send token flow */}
      {sendToken && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleSendToken}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <div className="subcomponent text-white absolute bg-[#222226] rounded-[20px] p-[30px] z-50 sendToken w-[400px] h-auto top-[-40px] left-[40px] shadow-xl">
              <SendToken />
            </div>
          </div>
        </div>
      )}

      {showSendDetails && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={shareDetails}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <div className="subcomponent text-white absolute bg-[#222226] rounded-[20px] p-[30px] z-50 details   top-[35%] left-[60px]  shadow-xl">
              <ShareDetails />
            </div>
          </div>
        </div>
      )}
      {showRequestDetails && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={requestDetails}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <div className="subcomponent absolute bg-[#222226] rounded-[20px] p-[30px] z-50 details text-white  top-[35%] left-[60px]  shadow-xl">
              <RequestDetails />
            </div>
          </div>
        </div>
      )}

      {isSuccess && (
        <div>
           <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={setSuccess}
          ></div>
          <div className="subcomponent-blur" onClick={setSuccess} ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <div className="subcomponent text-white absolute bg-[#222226] rounded-[20px] p-[30px] z-50 sendToken w-[400px] h-auto top-[-40px] left-[40px] shadow-xl">
              <TransactionSuccess />
            </div>
          </div>
        </div>
      )}
      {/* end of send token flow */}

      {receiveToken && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleReceiveToken}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <div className="subcomponent text-white absolute bg-[#222226] rounded-[20px] p-[30px] z-50 sendToken w-[400px] h-auto top-[-40px] left-[40px] shadow-xl">
              <RequestToken />
            </div>
          </div>
        </div>
      )}
      {earnToken && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handleEarnToken}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <Earn />
          </div>
        </div>
      )}
      {hunt && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={initiateHunt}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <ReportSpammers />
          </div>
        </div>
      )}
      {bet && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={initiateBet}
          ></div>
          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <PLaceBet />
          </div>
        </div>
      )}

      {poll && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={handlePoll}
          ></div>

          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <div className="subcomponent text-white absolute bg-[#222226] rounded-[20px] p-[30px] z-50 createPoll h-auto text-white top-[-50px] left-[45px] shadow-xl">
              <CreatePoll />
            </div>
          </div>
        </div>
      )}
      {proceedHunt && (
        <div>
          <div
            className="subcomponent-blur  absolute top-0 left-0 w-[96vw] h-full bg-black rounded-[10px] bg-opacity-[80%] z-10 cursor-pointer"
            onClick={ProceedToHunt}
          ></div>

          <div className="mediaShareDiv absolute z-50 top-[30%] left-[30%]">
            <ReportSuccessful />
          </div>
        </div>
      )}

      {/* deals */}

      {/* <div>
        <div className="subcomponent-blur" onClick={""}></div>
        <div className="subcomponent deals">
          <Deals />
        </div>
      </div> */}

      {/* deals subcomponents */}

      {/* <div className="subcomponent sendToken">
        <SendToken />
      </div> */}
      {/* <div className="subcomponent details">
        <Details />
      </div> */}
      {/* <div className="subcomponent createPoll">
        <CreatePoll />
      </div> */}
      {/* <div className="subcomponent transactionSuccess">
        <TransactionSuccess />
      </div> */}
      {/* <div className="subcomponent transactionFailed">
        <TransactionFailed />
      </div> */}
      {/* subcomponent ends */}
    </div>
  );
}

export default Index;
