import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassSub = ({ cla }) => {
  const { Name, Image, Instructor_name, Available_seats, Price, _id } = cla;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSelect = (cla) => {
    console.log(cla);
    if (user && user.email) {
      const selectClass = {
        selectClassId: _id,
        Name,
        Image,
        Price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("Successfully selected.");
          }
        });
    } else {
      Swal.fire({
        title: "Please login before selecting.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="pb-4 px-2 bg-slate-100">
      <img className="h-2/4 w-full" src={Image} alt="Shoes" />

      <>
        <p>Name:{Name}</p>
        <p>Instructor name: {Instructor_name}</p>
        <p>Available seats:{Available_seats}</p>
        <p>Price ${Price}</p>
      </>
      <button onClick={() => handleSelect(cla)} className="btn btn-sm">
        Select
      </button>
    </div>
  );
};

export default ClassSub;
