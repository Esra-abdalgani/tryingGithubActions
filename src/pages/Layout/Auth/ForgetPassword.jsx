import React from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import dialogLogo from "../../../assets/popupLogo.png";
import { useOutsideClick } from "../../../Hooks/useClickOutside";

function ForgetPassword({ visible, hideDialog, showDialog }) {
  let ref = useOutsideClick(hideDialog);
  return (
    <Dialog
      contentClassName="dialogcontent"
      headerClassName="dialog-header"
      position="top"
      closable={false}
      visible={visible === "forget password"}
      onHide={hideDialog}
    >
      <div className="px-6 pb-6" ref={ref}>
        <img
          src={dialogLogo}
          className="absolute w-[100px] top-[-14%] left-1/2 translate-x-[-50%]"
          alt="dialogLogo"
        />
        <h1 className="text-center mt-14 mb-5 text-3xl	 font-bold ">
          FORGOT PASSWORD
        </h1>
        <p className="ml-2 text-xs mt-12  w-72">
          Enter the email associated to your account so we can send you the OTP
          to reset your password.{" "}
        </p>
        <div className="p-inputgroup mt-5">
          <i className="pi pi-envelope"></i>
          <InputText placeholder="Email" />
        </div>
        <button
          onClick={() => showDialog("OTP")}
          className="sign-up w-full rounded-[12px] bg-magentaColor font-bold py-3 mt-5 text-white"
        >
          Send OTP
        </button>
      </div>
    </Dialog>
  );
}

export default ForgetPassword;
