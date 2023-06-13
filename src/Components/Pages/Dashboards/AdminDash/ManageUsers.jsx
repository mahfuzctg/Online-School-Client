import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSeceure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleAdmin = (user) => {
    fetch(
      `https://online-school-server-2xblin5so-mahfuzctg.vercel.app/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  //  Handle Instructors
  const handleMakeInstructors = (user) => {
    fetch(
      `https://online-school-server-2xblin5so-mahfuzctg.vercel.app/users/instructors/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructors Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  // handleDelete
  const handleDelete = (user) => {
    console.log(user._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://online-school-server-2xblin5so-mahfuzctg.vercel.app/users/${user._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your User has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Online School | Manage Users</title>
      </Helmet>
      <h3>Manage Users: {users.length} </h3>

      {/* Main Row */}
      <div className="sm:w-1/3 lg:w-11/12 mx-auto sm:flex-shrink m-2">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-900 text-white">
              <th>#</th>
              <th>name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="bg-white text-blue-900" key={user}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn btn-sm"
                    >
                      <FaChalkboardTeacher></FaChalkboardTeacher>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructors" ? (
                    <button
                      disabled
                      className="btn btn-ghost bg-gray-400  text-white"
                    >
                      <FaChalkboardTeacher />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructors(user)}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaChalkboardTeacher />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn bg-blue-900 text-white btn-sm"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
