import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Clasess/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyClasses from "../Pages/Dashboards/StudentsDash/MyClasses";
import MyHome from "../Pages/Dashboards/StudentsDash/MyHome";
import MyEnrolled from "../Pages/Dashboards/StudentsDash/MyEnrolled";
import MyHistory from "../Pages/Dashboards/StudentsDash/MyHistory";
import Payment from "../Pages/Dashboards/StudentsDash/Payment";
import AdminDash from "../Pages/Dashboards/AddminDash/AdminDash";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "myhome",
        element: <MyHome></MyHome>,
      },
      {
        path: "myenrolled",
        element: <MyEnrolled></MyEnrolled>,
      },
      {
        path: "myhistory",
        element: <MyHistory></MyHistory>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      // Admin
      {
        path: "admindash",
        element: <AdminDash></AdminDash>,
      },
    ],
  },
]);
