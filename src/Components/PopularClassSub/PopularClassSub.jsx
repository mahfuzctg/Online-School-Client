import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCarts from "../../Hooks/useCarts";
import { AuthContext } from "../../Providers/AuthProviders";

const PopularClassSub = ({ item }) => {
  const { Name, Image, Instructor_name, Available_seats, Price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCarts();
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
        Instructor_name,
        Available_seats,
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
            refetch();
            //
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
    <div className="pb-4 bg-slate-100">
      <img className=" w-full" src={Image} alt="Shoes" />

      <>
        <p>Name:{Name}</p>
        <p>Instructor name: {Instructor_name}</p>
        <p>Available seats:{Available_seats}</p>
        <p>Price ${Price}</p>
      </>
      <button onClick={() => handleSelect(item)} className="btn btn-sm">
        Select
      </button>
    </div>
  );
};

export default PopularClassSub;
