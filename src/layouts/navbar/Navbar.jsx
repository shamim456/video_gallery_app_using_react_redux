import React from "react";
// import Search from "./Search";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md bg-slate-100">
      <div className="flex justify-between px-5 py-3 mx-auto max-w-7xl lg:px-0">
        <Link to="/">
          <img className="h-10 rounded-full" src={logo} alt="logo" />
        </Link>
        {/* <Search /> */}
      </div>
    </nav>
  );
};

export default Navbar;
