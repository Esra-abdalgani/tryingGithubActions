import { Dialog } from "primereact/dialog";
import { useOutsideClick } from "../../../Hooks/useClickOutside";

import dialogLogo from "../../../assets/popupLogo.png";
import interestedLearning from "../../../assets/interestedLearning.png";
import interestedConsulting from "../../../assets/interestedConsulting.png";
import interestedEvents from "../../../assets/interestedEvents.png";

function ServiceInterested({ visible, hideDialog, showDialog }) {
  let ref = useOutsideClick(hideDialog);
  return (
    <Dialog
      contentClassName="dialogcontent"
      headerClassName="dialog-header"
      position="top"
      closable={false}
      visible={visible === "service interested"}
      onHide={hideDialog}
    >
      <div ref={ref}>
        <h1 className="text-center mt-16 mb-8 text-3xl  font-bold ">
          Which Service <span className="block"> You’re Interested in </span>{" "}
        </h1>
        <img
          src={dialogLogo}
          className="absolute w-[100px] top-[-11.5%] left-1/2 translate-x-[-50%]"
          alt="dialogLogo"
        />

        <div className="flex gap-5  m-10 justify-between ">
          <div className="interestedCheck  bg-white  border-1 border-solid border-gray-300 shadow-md rounded-lg">
            <input
              id="livaatLearning"
              type="checkbox"
              name="terms"
              className="interested m-1"
            />
            <label htmlFor="livaatLearning" className="labelinterested ">
              <div className="mx-5">
                <img src={interestedLearning} alt="livaat E-learning" />
                <p className=" text-sm my-2   font-normal text-center">
                  Livaat{" "}
                  <span className="block text-magentaColor">E-Learning</span>
                </p>
              </div>
            </label>
          </div>
          <div className="interestedCheck  bg-white  border-1 border-solid border-gray-300 shadow-md rounded-lg">
            <input
              id="livaatConsulting"
              type="checkbox"
              name="terms"
              className="interested  "
            />
            <label htmlFor="terms" className="text-sm">
              <div className="mx-6">
                <img src={interestedConsulting} alt="livaat Consulting" />
                <p className=" text-sm my-2 font-normal text-center">
                  Livaat{" "}
                  <span className="block text-magentaColor">Consulting</span>
                </p>
              </div>
            </label>
          </div>
          <div className="interestedCheck bg-white  border-1 border-solid border-gray-300 shadow-md rounded-lg">
            <input
              id="livaatevents"
              type="checkbox"
              name="terms"
              className="m-1 interested"
            />
            <label htmlFor="terms" className="text-xs">
              <div className="mx-6">
                <img src={interestedEvents} alt="livaat Events" />
                <p className=" text-sm my-2  font-normal text-center">
                  Livaat <span className="block text-magentaColor">Events</span>
                </p>
              </div>
            </label>
          </div>
        </div>
        <button className="sign-up block mx-auto rounded-[12px] bg-magentaColor font-bold py-3 mt-6  text-white">
          Save
        </button>
      </div>
    </Dialog>
  );
}

export default ServiceInterested;
