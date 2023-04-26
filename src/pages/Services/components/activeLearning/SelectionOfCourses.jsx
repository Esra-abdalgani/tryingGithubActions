import React from "react";
import courses from "../../../../assets/courses2.png";

function SelectionOfCourses() {
  return (
    <section
      className="w-full flex items-center px-10 bg-gradient-to-r from-gray-300 to-transparent via-gray-300 angle-87
 "
    >
      <div className=" container mx-auto ">
        <div className="pl-28">
          <h1 className="text-arseniColor max-w-lg uppercase font-bold text-4xl mb-5">
            A wide selection of{" "}
            <span className="text-magentaColor"> courses</span> for you!
          </h1>
          <p className="text-base max-w-lg mb-8 tex-black">
            Livaat learning platform offers online courses as a convenient and
            flexible way to learn new skills and gain knowledge. Our courses
            include multimedia elements such as videos, polls & interactive
            quizzes, as well as traditional materials like textbooks & lectures.
            All offered courses provide certificates of completion or credit
            towards a degree.
          </p>
          <a className="globalBtn py-2  px-5">Discover Community</a>
        </div>
      </div>
      <div className="w-[120%]">
        <img src={courses} alt="courses" />
      </div>
    </section>
  );
}

export default SelectionOfCourses;
