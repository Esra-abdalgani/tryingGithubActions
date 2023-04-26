import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";

import dialogLogo from "../../../assets/popupLogo.png";
import twitter from "../../../assets/signinTwitter.png";
import google from "../../../assets/signGoogle.png";
import facebook from "../../../assets/signFacebook.png";
import { useOutsideClick } from "../../../Hooks/useClickOutside";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const SignIn = ({ visible, hideDialog, showDialog }) => {
  let ref = useOutsideClick(hideDialog);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog
      contentClassName="dialogcontent overflow-visible"
      headerClassName="dialog-header"
      position="top"
      closable={false}
      visible={visible === "sign in"}
      onHide={hideDialog}
    >
      <div ref={ref}>
        <div className="relative">
          <img
            src={dialogLogo}
            className="absolute  w-[100px] top-[-141px] left-1/2 translate-x-[-50%]"
            alt="dialogLogo"
          />
        </div>
        <h1 className="text-center my-20 mb-5 text-3xl	 font-bold ">SIGN IN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={"p-inputgroup"}>
            <i className="pi pi-envelope"></i>
            <InputText
              className={` ${errors.email ? "redBorder" : " "}`}
              placeholder="Email"
              type="text"
              id="email"
              {...register("email")}
            />
          </div>
          {errors.email && <p className="errorM">{errors.email.message}</p>}
          <div className={"p-inputgroup"}>
            <i className="pi pi-unlock"></i>
            <Password
              className={` ${errors.password ? "redBorder" : " "}`}
              placeholder="Password"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <p className="errorM">{errors.password.message}</p>
          )}

          <p className="ml-2 text-xs text-right">
            Forgot your password?
            <a
              className="text-magentaColor"
              onClick={() => showDialog("forget password")}
            >
              {" "}
              Reset password{" "}
            </a>
          </p>

          <button
            onClick={() => showDialog("service interested")}
            className="sign-up w-full rounded-[12px] bg-magentaColor font-bold py-3 mt-5 text-white"
          >
            Sign In
          </button>

          <div className="flex items-center mt-5">
            <span className="text-xs mr-5">Or sign in with</span>
            <img src={google} alt="googlesignup" />
            <img src={twitter} alt="twittersignup" />
            <img src={facebook} alt="facebooksignup" />
          </div>
        </form>
      </div>
      <p className="text-xs text-center mr-5 mt-5">
        Don’t have an account?{" "}
        <a href="#" className="text-magentaColor">
          {" "}
          Sign up{" "}
        </a>
      </p>
    </Dialog>
  );
};

export default SignIn;
