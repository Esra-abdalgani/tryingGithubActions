import React from "react";
import expert from "../../../../assets/expert.png";

function Expert() {
  return (
    <section
      className="w-full flex items-center px-10 bg-gradient-to-r from-gray-300 to-transparent via-gray-300 angle-87
 "
    >
      <div className=" container mx-auto ">
        <div className="pl-28">
          <h1 className="text-arseniColor max-w-sm uppercase font-bold text-4xl mb-5">
            Trusted <span className="text-magentaColor"> expertise</span> here
            to help!
          </h1>
          <p className="text-base max-w-lg mb-8 tex-black">
            Our team of certified and experienced consultants are here to answer
            any questions and provide tailored solutions that meet your specific
            needs in different fields of expertise through secure and private
            communication channels and confidential live video meetings.{" "}
          </p>
          <a className="globalBtn py-2  px-5">Discover Community</a>
        </div>
      </div>
      <div className="w-[120%]">
        <img src={expert} alt="expert" />
      </div>
    </section>
  );
}

export default Expert;
