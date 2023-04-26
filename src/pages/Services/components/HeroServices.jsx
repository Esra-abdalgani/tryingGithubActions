import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ConsultingSections from "./activeConsulting/ConsultingSections.jsx";
import EventsSections from "./activeEvents/EventsSections.jsx";

import LearningSections from "./activeLearning/LearningSections";

import learning from "../../../assets/learning.png";
import book from "../../../assets/book.png";
import learningC from "../../../assets/learningC.png";

import bigC from "../../../assets/bigC.png";
import smallC from "../../../assets/smallC.png";

import bigStar from "../../../assets/bigStar.png";
import smallStar from "../../../assets/smallStar.png";
import Arrow from "../../Home/components/Arrow";

import consulting from "../../../assets/consulting.png";
import calculating from "../../../assets/calculating.png";
import todo from "../../../assets/todo.png";

import events from "../../../assets/eventsSection.png";
import music from "../../../assets/music.png";
import drug from "../../../assets/drug.png";

function HeroServices() {
  const [clicked, setclicked] = useState("learning");
  const changeClickedTap = (clickedValue) => setclicked(clickedValue);
  const activeTab = (value) => (clicked === value ? "active" : "");

  const handleButtonClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className="pt-52  pb-16 h-screen ">
        <div className="bgservice"></div>
        {/*livaat E-learning*/}

        <div className=" herocontainer h-full   flex mx-auto container px-10 justify-between ">
          <div className="relative w-1/3">
            <div className={`learningText   mt-4  ${activeTab("learning")}`}>
              <h1 className="text-arseniColor font-bold text-4xl">
                LIVAAT <span className="text-magentaColor"> E-LEARNING</span>
              </h1>
              <p className="cliptext my-5">Making Teaching Easier</p>
              <p className="text-base mb-6 max-w-sm tex-black">
                An innovative, comprehensive, and interactive eLearning system
                that provides an immersive learning experience for students of
                all ages.
              </p>
              <a className="globalBtn py-2  px-5">Subscribe</a>
            </div>
            {/*livaat consulting*/}

            <div
              className={`consultingText   mt-4  ${activeTab("consulting")}`}
            >
              <h1 className=" text-arseniColor font-bold text-4xl">
                LIVAAT <span className="text-magentaColor"> CONSULTING</span>
              </h1>
              <p className="cliptext my-5">Connecting Experts with Clients</p>
              <p className="text-base mb-6  max-w-sm tex-black">
                The future of consulting lies in the power of technology and a
                personal touch without the need to physically meet.
              </p>
              <a className="globalBtn py-2  px-5">Subscribe</a>
            </div>
            {/*livaat Events*/}

            <div className={`eventsText  mt-4  ${activeTab("events")}`}>
              <h1 className=" text-arseniColor font-bold text-4xl">
                LIVAAT <span className="text-magentaColor"> Events</span>
              </h1>
              <p className="cliptext my-5">One Platform, Many Events</p>
              <p className="text-base mb-6  max-w-sm tex-black">
                A comprehensive event organizing platform for individuals and
                organizations to make the process of event planning easier,
                faster, and more efficient.
              </p>
              <a className="globalBtn py-2  px-5">Subscribe</a>
            </div>
          </div>
          <div className="btncontainerRight ">
            <button
              disabled={clicked === "learning"}
              onClick={() => {
                clicked === "consulting"
                  ? changeClickedTap("learning")
                  : changeClickedTap("consulting");
              }}
              className="globalBtn   sliderArrowRight"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </div>

          <div className="relative w-1/2 ">
            <div
              className={`leftCol learningAnima  flex flex-col absolute  items-center w-full ${activeTab(
                "learning"
              )}`}
            >
              <div className="learning  w-[59%] ">
                <img src={learning} alt="learning" className="w-full" />
                <img src={book} alt="book" className="book w-[45%]" />
                <img src={learningC} alt="book" className="learningC w-1/2" />
                <img src={smallC} alt="smallC" className="smallC w-[15%]" />
                <img src={bigC} alt="bigC" className="bigC w-[20%]" />
                <img
                  src={smallStar}
                  alt="smallStar"
                  className="smallStar w-[20%]"
                />
                <img src={bigStar} alt="bigStar" className="bigStar  w-[35%]" />
              </div>
            </div>
            <div
              className={`leftCol consultingAnima  flex flex-col absolute  items-center ${activeTab(
                "consulting"
              )} w-full`}
            >
              <div className=" consulting w-[59%] ">
                <img src={consulting} alt="consulting" className="w-full" />
                <img
                  src={calculating}
                  alt="calculating"
                  className="calculating w-[35%]"
                />
                <img src={drug} alt="drug" className="drug w-[45%]" />
                <img src={smallC} alt="smallC" className="smallC w-[13%]" />
                <img src={bigC} alt="bigC" className="bigC w-[17%]" />
                <img src={bigStar} alt="bigStar" className="bigStar w-[40%]" />
                <img
                  src={smallStar}
                  alt="smallStar"
                  className="smallStar w-[20%]"
                />
              </div>
            </div>
            <div
              className={`eventsAnima leftCol flex flex-col absolute ${activeTab(
                "events"
              )}  items-center w-full`}
            >
              <div className="events  w-[59%] ">
                <img src={events} alt="event" className="w-full" />
                <img src={music} alt="music" className="music w-[38%]" />
                <img src={todo} alt="todo" className="todo w-[30%]" />
                <img src={smallC} alt="smallC" className="smallC w-[13%]" />
                <img src={bigC} alt="bigC" className="bigC w-[17%]" />
                <img src={bigStar} alt="bigStar" className="bigStar w-[40%]" />
                <img
                  src={smallStar}
                  alt="smallStar"
                  className="smallStar w-[30%]"
                />
              </div>
            </div>
          </div>
          <div className="btncontainerLeft">
            <button
              disabled={clicked === "events"}
              onClick={() => {
                clicked === "consulting"
                  ? changeClickedTap("events")
                  : changeClickedTap("consulting");
              }}
              className="globalBtn sliderArrowLeft"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>

        <Arrow onClickBtn={handleButtonClick} spanText={"DISCOVER FEATURES"} />
      </section>
      {clicked === "learning" && <LearningSections />}
      {clicked === "consulting" && <ConsultingSections />}
      {clicked === "events" && <EventsSections />}
    </main>
  );
}

export default HeroServices;
