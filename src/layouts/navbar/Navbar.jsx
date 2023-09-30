import React from "react";
import Search from "./Search";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/">
          <img className="h-10 rounded-full" src={logo} alt="logo" />
        </a>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
