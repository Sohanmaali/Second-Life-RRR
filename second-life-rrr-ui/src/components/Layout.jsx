import React from "react";
import Header from "./Header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";

export default function Layout() {
  return (
    <>
      <Header />
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
