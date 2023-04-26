import React from "react";
import Lessons from "./Lessons";
import SelectionOfCourses from "./SelectionOfCourses";
import MakesUsdifferent from "./MakesUsdifferent";
import Partners from "./Partners";
import BecomeAnInstructor from "./BecomeAnInstructor";

function LearningSections() {
  return (
    <div>
      <Lessons />
      <SelectionOfCourses />
      <MakesUsdifferent />
      <Partners />
      <BecomeAnInstructor />
    </div>
  );
}

export default LearningSections;
