import React from "react";
import heroAbout from "../../../assets/picheroAbout.png";

function HeroAbout() {
  return (
    <div className="heroaboutcontainer pb-10 ">
      <div className="">
        <div className="flex container pb-20 flex-col-reverse items-center px-6 mx-auto  space-y-0 md:space-y-0 md:flex-row ">
          <div className="flex flex-col mb-32 space-y-12 md:w-2/3">
            <div className="flex flex-col mb-32 pt-52  space-y-12 max-w-2xl">
              <h1 className="text-arseniColor font-bold text-4xl	">
                AN EXCLUSIVE MULTIPURPOSE{" "}
                <span className="text-magentaColor">VIRTUAL PLATFORM</span>
              </h1>
              <p className="text-base tex-black">
                Livaat is a futuristic space that liberates content creators &
                service providers from the limitations of geography and enables
                them to reach their targeted sectors with great ease. This
                exclusive app is ideal for all types of live performances,
                events, and shows. Performing artists, entertainers, conference
                organizers, and wedding planners are among many who can avail
                from the benefits Livaat brings to life. Consultants,
                psychiatrists & instructors who can offer their services
                virtually & securely.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={heroAbout} alt="heoAbout" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
