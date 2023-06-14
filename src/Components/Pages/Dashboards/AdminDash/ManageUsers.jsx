import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      "https://online-school-server-2s32wpurt-mahfuzctg.vercel.app/users"
    );
    return res.json();
  });
  // handleAdmin
  const handleAdmin = (user) => {
    fetch(
      `https://online-school-server-2s32wpurt-mahfuzctg.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`${user.name} Made admin successful`);
        }
      });
  };
  // handleDelete
  const handleDelete = () => {};
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
                  {user.role === "admin" ? (
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
                  <button className="btn btn-sm">
                    <FaChalkboardTeacher></FaChalkboardTeacher>
                  </button>
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
