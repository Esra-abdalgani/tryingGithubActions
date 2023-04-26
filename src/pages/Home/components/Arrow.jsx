import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Arrow({ spanText, onClickBtn }) {
  return (
    <div onClick={onClickBtn} className="arrow flex items-center  mt-10">
      <button className="arrowButton z-[99]">
        <FontAwesomeIcon id="icon" className="icon" icon={faAngleRight} />
        <span>{spanText}</span>
      </button>
      <span className="outSpan">{spanText}</span>
    </div>
  );
}

export default Arrow;
