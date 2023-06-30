import React from "react";

function PLaceBet() {
  return (
    <div className="placeBet h-auto text-white top-[35%] shadow-xl w-[446px] relative left-[15%]  bg-[#222226] rounded-[20px] p-[30px] z-50 flex flex-col items-center justify-between gap-[10px]">
      <div className="placeBet-header font-bold text-2xl">
        <h2>Place Bet</h2>
      </div>
      <div className="placeBet-body text-sm font-extralight text-justify">
        <p>
          Place bet off argument and real life events like football/NBA matches
          e.t.c and get to earn as soon as the results are out
        </p>
      </div>
      <div className="placeBet-header font-bold text-2xl">
        <h2>Coming Soon or Not</h2>
      </div>
      <div className="placeBet-body text-sm font-extralight text-justify body-bottom text-[#f83e76]">
        <p>
          For the sake of the hackathon and avoiding disqualifications, Chatit
          Team members decided to get full information on what the community thinks of
          betting on blockchain and if there’s any regulation to make this
          feature available. Thanks
        </p>
      </div>
    </div>
  );
}

export default PLaceBet;
