import React from "react";

function SubScripNewsletter() {
  return (
    <div className="relative ">
      <input
        type="email"
        className=" inputNewsletter text-xs pl-2.5  py-3.5 outline-none "
        placeholder="Enter email address"
      />
      <button className="absolute top-1/2 translate-y-[-50%] mr-2.5 text-xs py-2 right-0 buttonShadow font-bold px-4 py-1 text-white">
        Join Now{" "}
      </button>
    </div>
  );
}

export default SubScripNewsletter;
