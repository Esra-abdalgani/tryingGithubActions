import React from "react";
import FooterHome from "./FooterHome";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterHome />
    </>
  );
}

export default Layout;
