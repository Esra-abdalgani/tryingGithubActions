import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import dialogLogo from "../../../assets/popupLogo.png";
import React from "react";
import { useOutsideClick } from "../../../Hooks/useClickOutside";

const ResetPassword = ({ visible, hideDialog, showDialog }) => {
  let ref = useOutsideClick(hideDialog);

  return (
    <Dialog
      contentClassName="dialogcontent"
      headerClassName="dialog-header"
      position="top"
      closable={false}
      visible={visible === "reset password"}
      onHide={hideDialog}
    >
      <div className="px-6" ref={ref}>
        <img
          src={dialogLogo}
          className="absolute w-[100px] top-[-15%] left-1/2 translate-x-[-50%]"
          alt="dialogLogo"
        />
        <h1 className="text-center mt-14  mb-10 text-3xl	 font-bold ">
          RESET PASSWORD
        </h1>

        <div className="p-inputgroup">
          <i className="pi pi-unlock"></i>
          <Password placeholder="New password" />
        </div>
        <div className="p-inputgroup">
          <i className="pi pi-unlock"></i>
          <Password placeholder="Confirm new password" />
        </div>
        <button className="sign-up w-full rounded-[12px] bg-magentaColor font-bold py-3 mt-5 text-white">
          Save
        </button>
      </div>
    </Dialog>
  );
};

export default ResetPassword;
