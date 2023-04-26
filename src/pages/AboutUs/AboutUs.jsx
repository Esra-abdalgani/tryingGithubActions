import React from "react";
import "./css/index.css";
import HeroAbout from "./components/HeroAbout";
import AllInOnePlatForm from "./components/AllInOnePlatForm";
import SignUpFreeTrial from "./components/SignUpFreeTrial";

function AboutUs() {
  return (
    <div className="about pb-16  mb-20  ">
      <HeroAbout />
      <AllInOnePlatForm />
      <SignUpFreeTrial />
    </div>
  );
}

export default AboutUs;
