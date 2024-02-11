import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between px-16 py-5 bg-black">
      <Link to="/">
        <img src={logo} className="w-10 h-10" alt="Logo" />
      </Link>
      <div className="flex gap-10 items-center">
        <Link to="/transaction" className="text-white hover:text-pink">
          Transaction
        </Link>
        <Link to="/" className="text-white hover:text-pink">
          Data
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
