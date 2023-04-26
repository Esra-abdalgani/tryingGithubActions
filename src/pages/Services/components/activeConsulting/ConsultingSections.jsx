import React from "react";
import AccessibleConsulting from "./AccessibleConsulting";
import SelectionOfCourses from "./Expert";
import MakesUsdifferent from "./MakesUsdifferent";
import Partners from "./Partners";
import BecomeAnInstructor from "./BecomeAnInstructor";

function ConsultingSections() {
  return (
    <div>
      <AccessibleConsulting />
      <SelectionOfCourses />
      <MakesUsdifferent />
      <Partners />
      <BecomeAnInstructor />
    </div>
  );
}

export default ConsultingSections;
