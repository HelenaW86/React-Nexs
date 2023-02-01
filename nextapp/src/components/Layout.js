import React from "react";
import Back from "./Back";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Back /> */}
    </>
  );
}
