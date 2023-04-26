import React from "react";
import googleMeet from "../../../../assets/googleMeet.png";
import googleCalender from "../../../../assets/googleCalender.png";
import googleForms from "../../../../assets/googleForms.png";

function Partners() {
  return (
    <section className="partnersBg">
      <div className="container mx-auto">
        <h1 className="text-arseniColor my-20 text-center uppercase font-bold text-4xl">
          OUR <span className="text-magentaColor">partners</span>
        </h1>
        <div className="flex items-center justify-center z-[-5]  gap-24 mb-20">
          <img
            src={googleMeet}
            className=" mix-blend-luminosity"
            alt="googleMeet"
          />
          <img
            src={googleCalender}
            className=" mix-blend-luminosity"
            alt="googleCalender"
          />
          <img
            src={googleForms}
            className=" mix-blend-luminosity"
            alt="googleForms"
          />
        </div>
      </div>
    </section>
  );
}

export default Partners;
