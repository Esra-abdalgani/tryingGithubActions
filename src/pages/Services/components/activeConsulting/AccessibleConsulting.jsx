import React from "react";
import accessibleConsulting from "../../../../assets/accessibleConsulting.png";

function AccessibleConsulting() {
  return (
    <section className="container mx-auto px-10 ">
      <div className="flex items-center py-20">
        <div className="mr-20">
          <img src={accessibleConsulting} alt="accessibleConsulting" />
        </div>
        <div>
          <h1 className="text-arseniColor max-w-xl  uppercase font-bold text-4xl mb-5">
            Making Consulting{" "}
            <span className="text-magentaColor"> Accessible</span>
          </h1>
          <p className="text-base max-w-xl mb-8 tex-black">
            Livaat consulting is created to allow individuals and businesses to
            access the same quality of advice and expertise as they would from a
            traditional consulting firm, without the need to physically meet.
            Our innovative platform provides a wide range of services, from
            one-on-one consulting sessions to group workshops. We strive to be
            the go-to source for virtual consulting solutions so our clients can
            focus on their goals and reach their maximum potential.
          </p>
          <a className="globalBtn py-2  px-5">Discover Community</a>
        </div>
      </div>
    </section>
  );
}

export default AccessibleConsulting;
