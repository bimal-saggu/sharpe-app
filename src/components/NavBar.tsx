import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between px-16 py-5 bg-black">
      <a href="/">
        <img src={logo} className="w-10 h-10" alt="Logo" />
      </a>
      <div className="flex gap-10 items-center">
        <a href="/" className="text-white hover:text-pink">
          Transaction
        </a>
        <a href="/" className="text-white hover:text-pink">
          Data
        </a>
      </div>
    </div>
  );
};

export default NavBar;
