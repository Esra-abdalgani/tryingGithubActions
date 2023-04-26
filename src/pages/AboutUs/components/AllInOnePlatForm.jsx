import React from "react";
import notification from "../../../assets/notification.png";
import messaging from "../../../assets/messaging.png";
import management from "../../../assets/management.png";
import calendar from "../../../assets/calendar.png";
import timeTracking from "../../../assets/timeTracking.png";
import payment from "../../../assets/payment.png";
import contentCreation from "../../../assets/contentCreation.png";
import insights from "../../../assets/insights.png";
import { Button } from "primereact/button";
import SignUpFreeTrial from "./SignUpFreeTrial";

function AllInOnePlatForm() {
  return (
    <div className="container mx-auto mt-64   px-10">
      <div className="">
        <h1 className="max-w-[800px] mb-44 mx-auto uppercase text-arseniColor mb-32 self-center font-bold text-4xl text-center ">
          Unlock the Power of Possibilities with Our
          <span className="text-magentaColor">All-in-One Online Platform</span>
        </h1>
        <div className="flex max-w-4xl  mt-10  justify-between items-center">
          <img src={notification} alt="Automatic System Notifications" />
          <div>
            <h2 className="allinonesubtitle greyC">
              Automatic System Notifications
            </h2>
            <p className="allinonesubtitlepragraph greyC">
              Livaat is designed to provide users with important updates or
              notifications related to their account or activity on the system.
              This helps ensure users are kept up-to-date on all aspects of
              their account and activities on the system.
            </p>
          </div>
        </div>
        <div className="flex max-w-4xl mt-5  ml-auto justify-between items-center">
          <div>
            <h2 className="allinonesubtitle greyC">Instant Messaging System</h2>
            <p className="allinonesubtitlepragraph greyC">
              The system allows you to stay connected with other users on the
              platform with the ability to send text, images, file attachments,
              audio, or video messages to other users securely and easily.
              Additionally, Livaat allows users to create group conversations,
              which make it easier to stay in touch with multiple people at
              once.
            </p>
          </div>
          <img src={messaging} alt="Instant Messaging System" />
        </div>
        <div className="flex max-w-4xl mt-5  justify-between items-center">
          <img src={insights} className="mr-5" alt="Real-Time Insights" />
          <div>
            <h2 className="allinonesubtitle greyC">Real-Time Insights</h2>
            <p className="allinonesubtitlepragraph greyC">
              Every user will have a dashboard that is designed to help them get
              the most out of their data including data visualizations,
              analytics and reporting customer behavior, financial performance
              and user progress monitoring.
            </p>
          </div>
        </div>
        <div className="flex max-w-4xl mt-8 ml-auto justify-between items-center">
          <div>
            <h2 className="allinonesubtitle greyC">easy Content creation</h2>
            <p className="allinonesubtitlepragraph greyC">
              Customize useful and engaging content to fit your targeted
              audience, achieve your business goals, spread awareness about your
              brand to attract and retain potential customers. Livaat offers a
              variety of content creation methods, including writing, editing,
              designing, and multimedia.
            </p>
          </div>
          <img src={contentCreation} alt="Real-Time Insights" />
        </div>
        <div className="flex max-w-4xl mt-20  justify-between items-center">
          <img src={payment} className="mr-5" alt="Real-Time Insights" />
          <div>
            <h2 className="allinonesubtitle  greyC">Secure Payment System</h2>
            <p className="allinonesubtitlepragraph greyC">
              Online payments in Livaat can be made using different payment
              methods. Users can pay for services with just a few clicks which
              makes it easier for you to accept payments from customers around
              the world. In addition to being secure and convenient, you can
              track customer purchases and manage your inventory more
              effectively. This is because the system stores all customer
              purchase data, helping you know what services are selling the
              most.
            </p>
          </div>
        </div>
        <div className="flex max-w-4xl mt-10 ml-auto   justify-between items-center">
          <div>
            <h2 className="allinonesubtitle greyC">smart time tracking</h2>
            <p className="allinonesubtitlepragraph greyC">
              Automatically track time your clients spend on services they book,
              so you can quickly and accurately bill clients. It will also
              provide insights on clients habits, allowing you to adjust and
              optimize your services if necessary, assess productivity, identify
              areas for improvement, and make better decisions about services
              management.
            </p>
          </div>
          <img src={timeTracking} alt="smart time tracking" />
        </div>
        <div className="flex max-w-4xl  mt-16  justify-between items-center">
          <img src={calendar} className="mr-5" alt="Dynamic Calendar system" />
          <div>
            <h2 className="allinonesubtitle greyC">Dynamic Calendar system</h2>
            <p className="allinonesubtitlepragraph greyC">
              Automate the scheduling of your client meetings and appointments,
              create a timeline of upcoming appointments and events and help you
              stay organized, track your progress and set priorities. Our
              calendar system is integrated with a reminder system. Add to that
              the dynamic appointments editing features; like rescheduling,
              canceling and approving.{" "}
            </p>
          </div>
        </div>
        <div className="flex max-w-4xl mt-32   ml-auto  justify-between items-center">
          <div>
            <h2 className="allinonesubtitle greyC">Client Management system</h2>
            <p className="allinonesubtitlepragraph greyC">
              Manage your clients data and client profiles, including contact
              details, notes and other important information. Automatically
              generate invoices, track payments, and apply discounts. Monitor
              client activity, generate reports, and gain insights into customer
              behavior.{" "}
            </p>
          </div>
          <img src={management} alt="Client Management system" />
        </div>
      </div>
    </div>
  );
}

export default AllInOnePlatForm;
