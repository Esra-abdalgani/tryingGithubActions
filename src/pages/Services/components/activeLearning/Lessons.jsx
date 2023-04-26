import React from "react";
import lessons from "../../../../assets/lessons.png";

function Lessons() {
  return (
    <section className="container mx-auto px-10 ">
      <div className="flex items-center py-20">
        <div className="mr-20">
          <img src={lessons} alt="lessons" />
        </div>
        <div>
          <h1 className="text-arseniColor max-w-sm  uppercase font-bold text-4xl mb-5">
            High quality live video{" "}
            <span className="text-magentaColor"> lessons</span>
          </h1>
          <p className="text-base max-w-xl mb-8 tex-black">
            Live video lessons are a great way for teachers to provide their
            students with real-time instruction. This type of learning allows
            the teacher to interact directly with their students and provide
            immediate feedback. Live video lessons also allow teachers to
            present content in a more dynamic and engaging way, as students can
            see the teacher and ask questions in real time. Additionally,
            students can easily access recordings of the lessons, which can be
            used for review or reference.
          </p>
          <a className="globalBtn py-2  px-5">Discover Community</a>
        </div>
      </div>
    </section>
  );
}

export default Lessons;
