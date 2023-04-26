import React, { useState, useEffect, useRef } from "react";
import livaatLogo from "../../assets/Logo.png";
import "./css/index.css";
import { Button } from "primereact/button";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import ResetPassword from "./Auth/ResetPassword";
import ForgetPassword from "./Auth/ForgetPassword";
import OTP from "./Auth/OTP";
import ServiceInterested from "./Auth/ServiceInterested";
import { Waypoint } from "react-waypoint";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [visible, setVisibleDialog] = useState("");
  const [scrolledbg, setScrollbg] = useState(true);
  const showDialog = (dialog) => setVisibleDialog(dialog);
  const hideDialog = () => setVisibleDialog("");
  const handleEnter = () => setScrollbg(true);
  const handleLeave = () => setScrollbg(false);

  const commonProps = { visible, hideDialog, showDialog };
  const dialogs = {
    "sign in": <SignIn {...commonProps} />,
    "sign up": <SignUp {...commonProps} />,
    "reset password": <ResetPassword {...commonProps} />,
    "forget password": <ForgetPassword {...commonProps} />,
    OTP: <OTP {...commonProps} />,
    "service interested": <ServiceInterested {...commonProps} />,
  };

  return (
    <>
      <Waypoint onEnter={handleEnter} onLeave={handleLeave} />

      <header
        className={`fixed w-full top-0  text-xs font-normal  ${
          scrolledbg
            ? "py-6 bg-gradient-to-b from-gray-300 to-transparent"
            : "pt-3 pb-4 bg-white shadow-lg"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#">
              <img src={livaatLogo} alt="logo" />
            </a>

            <nav className="hidden space-x-12 md:flex">
              <NavLink to="." activeclassname="active">
                Home
              </NavLink>
              <NavLink to="about" activeclassname="active">
                About Us
              </NavLink>
              <NavLink to="service" activeclassname="active">
                Services
              </NavLink>
              <NavLink to="community" activeclassname="active">
                Community
              </NavLink>
            </nav>

            <div className="login-signup flex">
              <Button
                label="Sign In"
                onClick={() => showDialog("sign in")}
                className="sign-in pr-5"
              />
              <Button
                label="Sign Up"
                onClick={() => showDialog("sign up")}
                className="sign-up"
              />
              {dialogs[visible]}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
