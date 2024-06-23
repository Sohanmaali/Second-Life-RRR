import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import UserProfile from "./UserDashBoard";
import ForgotPassword from "./ForgotPassword";

export default function UserLayout() {
  return (
    <>
      <>
        <Sidebar />
        <Outlet />
        <Footer />
      </>
    </>
  );
}
