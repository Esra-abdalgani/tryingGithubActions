import React from "react";
import { Button } from "primereact/button";
function SignUpFreeTrial() {
  return (
    <div className="flex flex-col mt-20 max-w-4xl mx-auto justify-center items-center">
      <h2 className="text-2xl leading-9 m-5 font-medium greyC ">
        Unlock exclusive access to our amazing features!
      </h2>
      <h1 className="text-arseniColor font-bold text-4xl ">
        Sign up for your free trial{" "}
        <span className="text-magentaColor">today!</span>{" "}
      </h1>
      <Button label="Sign Up" className="sign-up px-16 mt-10" />
    </div>
  );
}

export default SignUpFreeTrial;
