import React from "react";
import newEvents from "../../../../assets/newEvents.png";

function EventsExp() {
  return (
    <section className="container mx-auto px-10 ">
      <div className="flex items-center py-20">
        <div className="mr-20">
          <img src={newEvents} alt="newEvents" />
        </div>
        <div>
          <h1 className="text-arseniColor max-w-sm  uppercase font-bold text-4xl mb-5">
            A whole new <span className="text-magentaColor"> events</span>{" "}
            experience
          </h1>
          <p className="text-base max-w-xl mb-8 tex-black">
            Livaat event platform enables event organizers to create engaging
            and interactive online experiences for attendees. Virtual events
            have become increasingly popular due to their accessibility,
            scalability, and cost- effectiveness. Our platform allows organizers
            to host events such as conferences, trade shows, and webinars, while
            providing attendees with an immersive and interactive experience
            from the comfort of their own homes or offices.
          </p>
          <a className="globalBtn py-2  px-5">Discover Community</a>
        </div>
      </div>
    </section>
  );
}

export default EventsExp;
