import React from "react";
import learning from "../../../assets/learning.png";
import book from "../../../assets/book.png";
import learningC from "../../../assets/learningC.png";

import consulting from "../../../assets/consulting.png";
import calculating from "../../../assets/calculating.png";
import todo from "../../../assets/todo.png";

import events from "../../../assets/eventsSection.png";
import music from "../../../assets/music.png";
import drug from "../../../assets/drug.png";

import bigC from "../../../assets/bigC.png";
import smallC from "../../../assets/smallC.png";

import bigStar from "../../../assets/bigStar.png";
import smallStar from "../../../assets/smallStar.png";
import Arrow from "./Arrow";

function LivaatServices() {
  return (
    <div className="mx-auto container my-20 px-14">
      <div className="text-center mb-24  flex flex-col justify-center items-center">
        <h1 className="text-arseniColor font-bold text-4xl">
          LIVAAT <span className="text-magentaColor"> SERVICE</span>
        </h1>
        <div className="sectionUnderLine mt-3"></div>
      </div>
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col  items-center w-[20%]">
          <div className="learning w-full ">
            <img src={learning} alt="learning" className="w-full" />
            <img src={book} alt="book" className="book" />
            <img src={learningC} alt="book" className="learningC" />
            <img src={smallC} alt="smallC" className="smallC" />
            <img src={bigC} alt="bigC" className="bigC" />
            <img src={smallStar} alt="smallStar" className="smallStar" />
            <img src={bigStar} alt="bigStar" className="bigStar" />
          </div>
          <p className="text-2xl font-medium text-arseniColor mt-20">
            Livaat <span className="text-magentaColor">E-Learning</span>
          </p>
        </div>
        <div className="flex flex-col  items-center w-[20%]">
          <div className="consulting w-full ">
            <img src={consulting} alt="consulting" className="w-full" />
            <img src={calculating} alt="calculating" className="calculating" />
            <img src={drug} alt="drug" className="drug" />
            <img src={smallC} alt="smallC" className="smallC" />
            <img src={bigC} alt="bigC" className="bigC" />
            <img src={bigStar} alt="bigStar" className="bigStar" />
            <img src={smallStar} alt="smallStar" className="smallStar" />
          </div>
          <p className="text-2xl font-medium text-arseniColor mt-20">
            Livaat <span className="text-magentaColor">Consulting</span>
          </p>
        </div>
        <div className="flex flex-col  items-center w-[20%]">
          <div className="events w-full ">
            <img src={events} alt="event" className="w-full" />
            <img src={music} alt="music" className="music" />
            <img src={todo} alt="todo" className="todo" />
            <img src={smallC} alt="smallC" className="smallC" />
            <img src={bigC} alt="bigC" className="bigC" />
            <img src={bigStar} alt="bigStar" className="bigStar" />
            <img src={smallStar} alt="smallStar" className="smallStar" />
          </div>
          <p className="text-2xl font-medium text-arseniColor mt-20">
            Livaat <span className="text-magentaColor">Events</span>
          </p>
        </div>
      </div>
      <Arrow spanText={"LEARN MORE"} />
    </div>
  );
}

export default LivaatServices;
