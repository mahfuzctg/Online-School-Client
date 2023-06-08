import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/A12-logo.jpg";
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/" className="text-blue-50 no-underline ">
          Home
        </Link>
      </li>
      <li>
        <Link to="/instructors" className="text-blue-50 no-underline">
          Instructors
        </Link>
      </li>
      <li>
        <Link to="/classes" className="text-blue-50 no-underline">
          Classes
        </Link>
      </li>
      <li>
        <Link className="text-blue-50 no-underline"> Dashboard </Link>
      </li>
    </>
  );
  return (
    <div className="navbar h-2 bg-blue-900 text-blue-50 font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-5 p-2 shadow bg-blue-950  rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img className="w-10 h-10 rounded-full block" src={logo} alt="" />
        <Link to="/" className="text-white no-underline">
          Online School
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-orange-50 text-blue-900 hover:bg-orange-200"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
