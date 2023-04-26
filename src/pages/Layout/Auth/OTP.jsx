import React from "react";
import { Dialog } from "primereact/dialog";
import dialogLogo from "../../../assets/popupLogo.png";
import { useOutsideClick } from "../../../Hooks/useClickOutside";

function OTP({ visible, hideDialog, showDialog }) {
  let ref = useOutsideClick(hideDialog);
  return (
    <Dialog
      contentClassName="dialogcontent"
      headerClassName="dialog-header"
      position="top"
      closable={false}
      visible={visible === "OTP"}
      onHide={hideDialog}
    >
      <div ref={ref}>
        <img
          src={dialogLogo}
          className="absolute w-[100px] top-[-15%] left-1/2 translate-x-[-50%]"
          alt="dialogLogo"
        />
        <h1 className="text-center my-14 mb-5 text-3xl	 font-bold ">
          OTP VERIFICATION
        </h1>
        <p className="mx-8 text-xs w-72 mt-10">
          Enter the 6-digit OTP we sent you through your email in the fields
          below.{" "}
        </p>
        <div className="flex justify-center">
          <input type="text" maxLength={1} className="oneNumber" />
          <input type="text" maxLength={1} className="oneNumber" />
          <input type="text" maxLength={1} className="oneNumber" />
          <input type="text" maxLength={1} className="oneNumber" />
          <input type="text" maxLength={1} className="oneNumber" />
          <input type="text" maxLength={1} className="oneNumber" />
        </div>
        <p className="text-xs text-right mr-5 mt-5">
          Don’t recieve OTP?{" "}
          <a href="#" className="text-magentaColor">
            {" "}
            RESEND OTP
          </a>
        </p>
        <button
          onClick={() => showDialog("reset password")}
          className="sign-up w-full rounded-[12px] bg-magentaColor font-bold py-3 mt-5 text-white"
        >
          Verify
        </button>
      </div>
    </Dialog>
  );
}

export default OTP;
