import React from "react";
import Layout from "../Layout/Layout";
import Hero from "./components/Hero";
import LivaatCommunity from "./components/LivaatCommunity";
import LivaatPlatform from "./components/LivaatPlatform";
import LivaatServices from "./components/LivaatServices";
import "./css/index.css";

function Landing() {
  return (
    <div className="home">
      <Hero />
      <LivaatPlatform />
      <LivaatServices />
      <LivaatCommunity />
    </div>
  );
}

export default Landing;
