import React from "react";
import gift from "../../../../assets/gift.png";
import ticket from "../../../../assets/ticket.png";
import groupChat from "../../../../assets/groupChat.png";
import privacy from "../../../../assets/privacy.png";
import liveMontoring from "../../../../assets/liveMontoring.png";
import clientfeed from "../../../../assets/clientFeed.png";

function MakesUsdifferent() {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-arseniColor my-20 text-center uppercase font-bold text-4xl">
          What makes us <span className="text-magentaColor">different</span> ?
        </h1>
        <div className="flex gap-6  mb-40 justify-center">
          <div className="flex w-[12rem] pb-10  flex-col items-center bg-gradient-to-t from-gray-200 to-transparent shadow-md rounded-md">
            <img src={gift} className="mt-[-2rem]" alt="Gifting system" />
            <p className="mx-8  mt-6 text-center">Gifting system</p>
          </div>
          <div className="flex w-[12rem]  pb-10 flex-col items-center bg-gradient-to-t from-gray-200 to-transparent shadow-md rounded-md">
            <img
              src={ticket}
              className="mt-[-2rem]"
              alt="Ticketing & event booking system"
            />
            <p className="mx-8  mt-6 text-center">
              Ticketing & event booking system
            </p>
          </div>
          <div className="flex w-[12rem]  pb-10 flex-col items-center bg-gradient-to-t from-gray-200 to-transparent shadow-md rounded-md">
            <img
              src={groupChat}
              className="mt-[-2rem]"
              alt="Group and individual chat"
            />
            <p className="mx-2  mt-6 text-center">Group and individual chat</p>
          </div>
          <div className="flex w-[12rem] pb-10  flex-col items-center bg-gradient-to-t from-gray-200 to-transparent shadow-md rounded-md">
            <img
              src={privacy}
              className="mt-[-2rem]"
              alt="Data security and privacy"
            />
            <p className="mx-1 mt-6  text-center">Data security and privacy</p>
          </div>
          <div className="flex w-[12rem] pb-10  flex-col items-center bg-gradient-to-t from-gray-200 to-transparent shadow-md rounded-md">
            <img
              src={liveMontoring}
              className="mt-[-2rem]"
              alt="Live monitoring and analysis"
            />
            <p className="mx-2 mt-6  text-center">
              Live monitoring and analysis
            </p>
          </div>
          <div className="flex w-[12rem] pb-10  flex-col items-center bg-gradient-to-t from-gray-200 to-transparent shadow-md rounded-md">
            <img
              src={clientfeed}
              className="mt-[-2rem]"
              alt="Attendees feedback"
            />
            <p className="mx-8 mt-6  text-center">Attendees feedback</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakesUsdifferent;
