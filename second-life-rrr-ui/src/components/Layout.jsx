import React from "react";
import Header from "./Header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}
