import React from "react";
import instructors from "../../../assets/instructors.png";
import courses from "../../../assets/courses.png";
import consultants from "../../../assets/consultants.png";
import consultingSessions from "../../../assets/consultingSessions.png";
import organizers from "../../../assets/organizers.png";
import events from "../../../assets/events.png";
import AvatarGroupe from "./AvatarGroupe";
import Arrow from "./Arrow";

function LivaatCommunity() {
  return (
    <div className="bg-gray-200 bg-opacity-30 mb-20 ">
      <div className="container mx-auto px-6  py-14">
        <div className="text-center mb-10  flex flex-col justify-center items-center">
          <h1 className="text-arseniColor font-bold text-4xl">
            LIVAAT <span className="text-magentaColor"> COMMUNITY</span>
          </h1>
          <div className="sectionUnderLine mt-3"></div>
        </div>
        <main className=" flex justify-between items-center text-center ">
          <div>
            <div className="imgContainer">
              <img src={instructors} />
            </div>
            <AvatarGroupe />
            <p className="subtitleLivaatCommunity">Instructors</p>
          </div>
          <div>
            <div className="imgContainer">
              <img src={courses} />
            </div>
            <AvatarGroupe />
            <p className="subtitleLivaatCommunity">Courses</p>
          </div>
          <div>
            <div className="imgContainer">
              <img src={consultants} />
            </div>
            <AvatarGroupe />
            <p className="subtitleLivaatCommunity">Consultants</p>
          </div>
          <div>
            <div className="imgContainer">
              <img src={consultingSessions} />
            </div>
            <AvatarGroupe />
            <p className="subtitleLivaatCommunity">ConsultingSessions</p>
          </div>
          <div>
            <div className="imgContainer">
              <img src={organizers} />
            </div>
            <AvatarGroupe />
            <p className="subtitleLivaatCommunity">Organizers</p>
          </div>
          <div>
            <div className="imgContainer">
              <img src={events} />
            </div>
            <AvatarGroupe />
            <p className="subtitleLivaatCommunity">Events</p>
          </div>
        </main>
        <Arrow spanText={"LIVAAT COMMUNITY"} />
      </div>
    </div>
  );
}

export default LivaatCommunity;
