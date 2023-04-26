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
  username: Yup.string()
    .required("Username is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Username can only contain alphanumeric characters"
    ),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const SignUp = ({ visible, hideDialog }) => {
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
      contentClassName="dialogcontent overflow-visible	"
      headerClassName="dialog-header"
      position="top"
      closable={false}
      visible={visible === "sign up"}
      onHide={hideDialog}
    >
      <div className="px-3 py-4 	" ref={ref}>
        <div className="relative">
          <img
            src={dialogLogo}
            className="absolute  w-[100px] top-[-75px] left-1/2 translate-x-[-50%]"
            alt="dialogLogo"
          />
        </div>
        <h1 className="text-center mt-8  mb-5 text-3xl font-bold">SIGN UP</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-inputgroup">
            <i className="pi pi-user"></i>
            <InputText
              className={`${errors.username ? "redBorder" : " "}`}
              placeholder="Username"
              type="text"
              id="username"
              {...register("username")}
            />
          </div>
          {errors.username && (
            <p className="errorM">{errors.username.message}</p>
          )}

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
          <div className={"p-inputgroup "}>
            <i className="pi pi-unlock"></i>
            <Password
              className={` ${errors.confirmPassword ? "redBorder" : " "}`}
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
          </div>
          {errors.confirmPassword && (
            <p className="errorM">{errors.confirmPassword.message}</p>
          )}

          <div
            className={`flex items-center mb-2 ${
              errors.confirmPassword ? "redBorder" : " "
            }`}
          >
            <input
              id="terms"
              type="checkbox"
              {...register("acceptTerms")}
              name="acceptTerms"
              className="terms"
            />
            <label htmlFor="terms" className="ml-2 text-xs">
              I agree on Livaat{" "}
              <span className="text-magentaColor">Terms & conditions </span>and{" "}
              <span className="text-magentaColor">Privacy</span> terms
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="errorM">{errors.acceptTerms.message}</p>
          )}

          <button className="sign-up w-full rounded-[12px] bg-magentaColor font-bold py-3 mt-5 text-white">
            Sign Up
          </button>

          <div className="flex items-center mt-5">
            <span className="text-xs mr-5">Or sign up with</span>
            <img src={google} alt="googlesignup" />
            <img src={twitter} alt="twittersignup" />
            <img src={facebook} alt="facebooksignup" />
          </div>
          <p className="text-xs text-center mr-5 mt-5">
            Already have an account?
            <a href="#" className="text-magentaColor">
              {" "}
              Sign in{" "}
            </a>
          </p>
        </form>
      </div>
    </Dialog>
  );
};

export default SignUp;
