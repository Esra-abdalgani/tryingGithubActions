import React from "react";
import pricingB from "../../../../assets/pricingbelow.png";
import pricingA from "../../../../assets/pricingAbove.png";

function BecomeAnInstructor() {
  return (
    <section>
      <div className="container pt-20 pb-10 mx-auto flex justify-between">
        <div className="max-w-lg ">
          <h1 className="text-arseniColor  uppercase font-bold text-xl">
            BECOME AN <span className="text-magentaColor">INSTRUCTOR</span>
          </h1>
          <p className="py-5">
            Join Livaat community to create and monetize educational content to
            reach your targeted audience and make profit easily!{" "}
          </p>
          <p className="text-base font-medium py-3 ">Each pack includes:</p>

          <ul className="list-disc pl-8 mb-10">
            <li>Chat system</li>
            <li>Calender system</li>
            <li>Notification system</li>
            <li>Dashboard</li>
            <li>Course creator system</li>
            <li>Certificate customization</li>
            <li>Integration with payment system</li>
            <li>Public page</li>
          </ul>
          <a className="globalBtn py-2.5  px-12">Contact Us</a>
        </div>
        <div className="flex p-5 gap-8">
          <div className="relative pricingBox px-10 pt-10 ">
            <img
              src={pricingA}
              className="absolute w-full top-[-2px] right-[-2px]"
              alt="pricing"
            />
            <p className="mt-16 text-sm font-bold mb-4">Professional Plan</p>
            <p className="text-[#8473BC]">
              <sup>$</sup>
              <span className="font-bold text-3xl">42</span>/month
            </p>
            <div className="mt-14 ">
              <ul className="list-disc ml-4 mb-5">
                <li>2D Classroom</li>
                <li>Unlimited files storage</li>
              </ul>
              <a className=" inline-block mb-28 globalBtn py-2  px-5">
                Start free trial today!
              </a>
            </div>
            <img
              src={pricingB}
              className="absolute w-full  bottom-[0px] right-[-2px]"
              alt="pricing"
            />
          </div>

          <div className="relative  pricingBox px-10 pt-10 mt-[50px] mb-[-50px]  ">
            <img
              src={pricingA}
              className="absolute w-full top-[-2px] right-[-2px]"
              alt="pricing"
            />
            <p className="mt-16 text-sm font-bold mb-4">Expert Plan</p>
            <p className="text-[#8473BC]">
              <sup>$</sup>
              <span className="font-bold text-3xl">85</span>/month
            </p>
            <div className="mt-14 ">
              <ul className="list-disc ml-4 mb-5">
                <li>2D Classroom</li>
                <li>3D Classroom</li>

                <li>Unlimited files storage</li>
              </ul>
              <a className=" inline-block globalBtn py-2 mb-28 px-5">
                Start free trial today!
              </a>
            </div>
            <img
              src={pricingB}
              className="absolute w-full  bottom-[0px] right-[-2px]"
              alt="pricing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecomeAnInstructor;
