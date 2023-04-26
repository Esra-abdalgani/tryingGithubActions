import React from "react";
import HeroServices from "./components/HeroServices";
import SignUpFreeTrial from "../AboutUs/components/SignUpFreeTrial";
import "./css/index.css";

function Services() {
  return (
    <main className="services pb-10 ">
      <HeroServices />
      <SignUpFreeTrial />
    </main>
  );
}

export default Services;
