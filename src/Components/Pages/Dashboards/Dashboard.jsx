import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaHome,
  FaReadme,
  FaAddressCard,
  FaHistory,
  FaUserCircle,
  FaArrowLeft,
} from "react-icons/fa";
import useAdmin from "../../../Hooks/useAdmin";
const Dashboard = () => {
  const adminDashboard = (
    <>
      <li>
        <Link className=" no-underline" to="/">
          <FaArrowLeft></FaArrowLeft>Back
        </Link>
      </li>
      <li>
        <Link className=" no-underline" to="adminHome">
          <FaHome></FaHome>Home
        </Link>
      </li>
      <li>
        <Link className=" no-underline" to="manageClasses">
          <FaReadme></FaReadme> Manage Classes
        </Link>
      </li>
      <li>
        <Link className=" no-underline" to="manageUsers">
          <FaAddressCard></FaAddressCard> Manage Users
        </Link>
      </li>
    </>
  );
  // User DashBoard
  const UserDashboard = (
    <>
      <li>
        <Link className=" no-underline" to="/">
          <FaArrowLeft></FaArrowLeft>Back
        </Link>
      </li>
      <li>
        <Link className=" no-underline" to="myhome">
          <FaHome></FaHome>Home
        </Link>
      </li>
      <li>
        <Link className=" no-underline" to="myclasses">
          <FaReadme></FaReadme> My Classes
        </Link>
      </li>
      <li>
        <Link className=" no-underline" to="myenrolled">
          <FaAddressCard></FaAddressCard> My Enrolled
        </Link>
      </li>
      <li>
        <Link className=" no-underline" to="myhistory">
          <FaHistory></FaHistory> My History
        </Link>
      </li>
    </>
  );

  // is admin
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-blue-900">
            <FaUserCircle></FaUserCircle>
            {isAdmin ? <>Admin Dashboard</> : <>User Dashboard</>}
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal ">
              {/* Navbar menu content here */}

              {isAdmin ? <>{adminDashboard}</> : <> {UserDashboard}</>}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3"></label>
        <ul className="menu p-4 w-80 h-full bg-base-400">
          {/* Sidebar content here */}
          {isAdmin ? <>{adminDashboard}</> : <> {UserDashboard}</>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
