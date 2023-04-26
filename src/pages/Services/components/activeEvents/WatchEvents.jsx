import React from "react";
import eventsAnywhere from "../../../../assets/eventsAnywhere.png";

function WatchEvents() {
  return (
    <section
      className="w-full flex items-center px-10 bg-gradient-to-r from-gray-300 to-transparent via-gray-300 angle-87
 "
    >
      <div className=" container mx-auto ">
        <div className="pl-28">
          <h1 className="text-arseniColor max-w-lg pr-5 uppercase font-bold text-4xl mb-5">
            watch events <span className="text-magentaColor"> anywhere </span> ,
            anytime
          </h1>
          <p className="text-base max-w-lg mb-8 tex-black">
            Livaat platform offers a wide selection of events that you can watch
            on both web or mobile application which offers flexibility in where
            and when you can watch your favorite events and event series.
          </p>
          <a className="globalBtn py-2  px-5">Discover Community</a>
        </div>
      </div>
      <div className="w-[120%]">
        <img src={eventsAnywhere} alt="eventsAnywhere" />
      </div>
    </section>
  );
}

export default WatchEvents;
