import React from "react";
import EventsExp from "./EventsExp";
import WatchEvents from "./WatchEvents";
import MakesUsdifferent from "./MakesUsdifferent";
import Partners from "./Partners";
import BecomeAnInstructor from "./BecomeAnInstructor";

function EventsSections() {
  return (
    <div>
      <EventsExp />
      <WatchEvents />
      <MakesUsdifferent />
      <Partners />
      <BecomeAnInstructor />
    </div>
  );
}

export default EventsSections;
