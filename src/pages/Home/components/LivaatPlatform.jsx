import React, { useState } from "react";
import user from "../../../assets/user1.png";
import wallet from "../../../assets/wallet1.png";
import mask from "../../../assets/Mask.png";
import chat from "../../../assets/chat1.png";
import stand from "../../../assets/stand-for-slide.png";
import laptopweb3 from "../../../assets/laptopweb3.png";
import laptop from "../../../assets/laptop.png";
import mobile from "../../../assets/mobile.png";
import whiteLayer from "../../../assets/whiteLayer.png";
import colorLayer from "../../../assets/frontEffect.png";
import indector from "../../../assets/activetab.png";

function LivaatPlatform() {
  let [clicked, setclicked] = useState("web");
  function changeClickedTap(clickedValue) {
    setclicked(clickedValue);
  }

  let activeTab = (value) => (clicked === value ? "active" : "");

  return (
    <div className="mt-28 px-7 container mx-auto  slider-container ">
      <div className="text-center mb-10 p-10  flex flex-col justify-center items-center">
        <h1 className="text-arseniColor font-bold text-4xl">
          LIVAAT <span className="text-magentaColor"> PLATFORM</span>
        </h1>
        <div className="sectionUnderLine mt-3"></div>
      </div>
      <div className="flex justify-between py-10  space-y-10 ">
        <div className="relative  mt-40 w-1/3">
          <img src={stand} alt="stand" />
          <div className={`slider ${clicked} flex flex-col gap-10`}>
            <img src={mobile} alt="mobile " className="mobileImg" />
            <img src={laptop} alt="laptop" className="laptop" />
            <img src={laptopweb3} alt="laptopweb3" className="laptopweb3" />
          </div>

          <img
            className="absolute z-[99] left-0 bottom-[-185px]"
            src={whiteLayer}
            alt="stand"
          />
        </div>

        <div className=" w-7/12">
          <nav className=" relative tabContainer  flex align-items justify-between py-4 px-10 ">
            <button
              onClick={() => changeClickedTap("mobile")}
              className={`tab-button ${activeTab("mobile")} `}
            >
              Mobile App
            </button>
            <button
              onClick={() => changeClickedTap("web")}
              className={`tab-button ${activeTab("web")}`}
            >
              Web Platform
            </button>
            <button
              onClick={() => changeClickedTap("web3")}
              className={`tab-button ${activeTab("web3")} `}
            >
              Web3 App
            </button>
            <img src={indector} alt="" className={`indector ${clicked}`}></img>
            <div className="underlineTab absolute left-1/2 bottom-0 translate-x-[-50%] w-[96%] h-0.5 "></div>
          </nav>
          <div className={`tab-content ${activeTab("mobile")} ml-3  `}>
            <div className="mt-6 flex  items-center jusetify-center">
              <div className="flex gap-4  w-1/2  items-center">
                <img src={user} alt="user" />
                <p className="font-light max-w-xs pr-10  text-xs">
                  Create an account, login to your profile & start creating your
                  content!
                </p>
              </div>
              <div className="flex gap-4  w-1/2 items-center">
                <img src={wallet} alt="wallet" />
                <p className="font-light max-w-xs pr-10 text-xs">
                  loj, gifts & charge your Livaat e-Wallet to enjoy the
                  experience!
                </p>
              </div>
            </div>
            <div className="firstRow  flex items-center">
              <div className="flex gap-4  w-1/2 items-center">
                <img src={chat} alt="chat" />
                <p className="font-light max-w-xs pr-10 text-xs">
                  Interact with other Livaat users through comments, group &
                  individual chats!
                </p>
              </div>
              <div className="flex gap-4 w-1/2  items-center">
                <img src={mask} alt="mask" />
                <p className="font-light  max-w-xs pr-10 text-xs">
                  Watch pre-recorded or live events, courses, sessions & much
                  more!
                </p>
              </div>
            </div>
          </div>
          <div className={`tab-content ${activeTab("web")}  ml-3  `}>
            <div className="mt-6 flex  items-center jusetify-center">
              <div className="flex gap-4  w-1/2  items-center">
                <img src={user} alt="user" />
                <p className="font-light max-w-xs pr-10  text-xs">
                  Create an account, login to your profile & start creating your
                  content!
                </p>
              </div>
              <div className="flex gap-4  w-1/2 items-center">
                <img src={wallet} alt="wallet" />
                <p className="font-light max-w-xs pr-10 text-xs">
                  Buy tickets, gifts & charge your Livaat e-Wallet to enjoy the
                  experience!
                </p>
              </div>
            </div>
            <div className="firstRow  flex items-center">
              <div className="flex gap-4  w-1/2 items-center">
                <img src={chat} alt="chat" />
                <p className="font-light max-w-xs pr-10 text-xs">
                  Interact with other Livaat users through comments, group &
                  individual chats!
                </p>
              </div>
              <div className="flex gap-4 w-1/2  items-center">
                <img src={mask} alt="mask" />
                <p className="font-light  max-w-xs pr-10 text-xs">
                  Watch pre-recorded or live events, courses, sessions & much
                  more!
                </p>
              </div>
            </div>
          </div>
          <div className={`tab-content ${activeTab("web3")} ml-3  `}>
            <div className="mt-6 flex  items-center jusetify-center">
              <div className="flex gap-4  w-1/2  items-center">
                <img src={user} alt="user" />
                <p className="font-light max-w-xs pr-10  text-xs">
                  Create an account, login to your profile & start creating your
                  content!
                </p>
              </div>
              <div className="flex gap-4  w-1/2 items-center">
                <img src={wallet} alt="wallet" />
                <p className="font-light max-w-xs pr-10 text-xs">
                  Buy tickets, gifts & charge your Livaat e-Wallet to enjoy the
                  experience!
                </p>
              </div>
            </div>
            <div className="firstRow   flex items-center">
              <div className="flex gap-4  w-1/2 items-center">
                <img src={chat} alt="chat" />
                <p className="font-light max-w-xs pr-10 text-xs">
                  Interact with other Livaat users through comments, group &
                  individual chats!
                </p>
              </div>
              <div className="flex gap-4 w-1/2  items-center">
                <img src={mask} alt="mask" />
                <p className="font-light  max-w-xs pr-10 text-xs">
                  Watch pre-recorded or live events, courses, sessions & much
                  more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivaatPlatform;
