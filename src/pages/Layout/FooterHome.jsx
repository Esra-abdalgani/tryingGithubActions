import { useState } from "react";
import tel from "../../assets/tel.png";
import fax from "../../assets/fax.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/footerFace.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import livaatLogo from "../../assets/livaat_Logo_2.png";
import livaatLogo2 from "../../assets/livaat_logo_3.png";
import "./css/index.css";
import SubScripNewsletter from "../Home/components/SubScripNewsletter";
import { Waypoint } from "react-waypoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function FooterHome() {
  const [showIcon, setShowIcon] = useState(true);

  const handleWaypointEnter = () => {
    setShowIcon(false);
  };

  const handleWaypointLeave = () => {
    setShowIcon(true);
  };

  return (
    <footer className="footer-section text-white   ">
      <div className=" mx-auto container px-10 ">
        <div className="flex">
          <div className="flex flex-col   w-1/3 pt-12 pr-14">
            <img className="w-8/12 mb-4" src={livaatLogo} alt="livaatLogo" />
            <p className="text-sm mb-5 font-medium text-white text-opacity-80">
              A futuristic stage that liberates creators from the limitations of
              geography and venues and enables them to reach a wider audience
              with great ease.
            </p>
            <div className="flex items-center mb-6  gap-2">
              <img src={tel} alt="phone" />
              <div>
                <p className="font-normal text-xs">Tel</p>
                <p className="font-medium mt-1 text-base">+962790981985</p>
              </div>
            </div>
            <div className="flex items-center mb-6  gap-2">
              <img src={email} alt="email" />
              <div>
                <p className="font-normal text-xs">Mail</p>
                <p className="font-medium mt-1 text-base">Info@livaat.com</p>
              </div>
            </div>
            <div className="flex items-center mb-6  gap-2">
              <img src={location} alt="location" />
              <div>
                <p className="font-normal text-xs">Address</p>
                <p className="font-medium mt-1 text-base">
                  King Abdullah II St.
                </p>
              </div>
            </div>
            <div className="flex items-center mb-14  gap-2">
              <img src={fax} alt="fax" />
              <div>
                <p className="font-normal text-xs">Fax</p>
                <p className="font-medium mt-1 text-base">+962790981986</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-1/3 p-14">
            <p className="font-bold text-lg ">Contact Us</p>
            <p className="text-white font-normal text-sm text-opacity-80 mt-4">
              We usually respond before 24 hours.
            </p>
            <form className="w-11/12 mt-8">
              <input
                className="w-full mb-4  placeholder-white text-xs font-meduim pl-6 py-3.5 outline-none bg-white bg-opacity-50 rounded-lg"
                name="name"
                placeholder="Name"
                type="text"
              />
              <input
                className="w-full  mb-4 placeholder-white text-xs font-meduim pl-6 py-3.5 outline-none bg-white bg-opacity-50 rounded-lg"
                name="email"
                placeholder="email"
                type="email"
              />
              <textarea
                className="w-full  mb-4 placeholder-white text-xs font-meduim resize-none pl-6 py-5 h-32 outline-none bg-white bg-opacity-50 rounded-lg"
                name="message"
                placeholder="message"
              />
              <button className="w-full py-3.5 rounded-lg border bg-white text-[#B165AB] font-bold">
                Submit
              </button>
            </form>
          </div>

          <div className="flex flex-col  w-1/3 p-14">
            <p className="font-bold text-lg ">Social Media</p>
            <p className="text-white font-normal text-sm text-opacity-80  mt-4">
              Be the first one to know about discounts, offers and events
            </p>
            <div className="flex gap-2 mt-6">
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
            <p className="font-bold text-lg mt-11 mb-5 ">Powered By</p>
            <img className="w-1/3 mb-11" src={livaatLogo2} alt="livaatLogo" />

            <p className="font-bold text-lg  mb-2.5">
              Subscribe to our newsletter
            </p>

            <SubScripNewsletter />
          </div>
        </div>
        <div className="flex w-full justify-between pb-10 text-white font-normal  text-sm">
          <nav className="flex   text-opacity-80 gap-10">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Community</a>
          </nav>

          <div className="w-1/3 ml-auto text-center">
            © 2020, All Rights Reserved
          </div>
        </div>
      </div>

      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
        bottomOffset="-100px"
      />
      {showIcon && (
        <div className="social-media-icons">
          <div className="social-icon">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="social-icon">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
              <span>FaceBook</span>
            </a>
          </div>
          <div className="social-icon">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <span>Instagram</span>
            </a>
          </div>
          <div className="social-icon">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
              <span>Twitter</span>
            </a>
          </div>
          <div className="social-icon">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faGlobe} />
              <span>Language</span>
            </a>
          </div>
        </div>
      )}
    </footer>
  );
}

export default FooterHome;
