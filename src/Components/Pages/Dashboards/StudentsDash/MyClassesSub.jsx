import React from "react";
import { FaAmazonPay } from "react-icons/fa";
import useCarts from "../../../../Hooks/useCarts";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClassesSub = ({ item }) => {
  const { Name, Image, Instructor_name, Available_seats, Price } = item;
  const [cart, refetch] = useCarts();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="pb-4 bg-slate-100">
      <img className=" w-full" src={Image} alt="Shoes" />

      <div className=" text-start p-2">
        <p>Name: {Name}</p>
        <p>Instructor name: {Instructor_name}</p>
        <p>Available seats:{Available_seats}</p>
        <p>Price ${Price}</p>
      </div>
      <div>
        <Link to="/dashboard/payment">
          <button className="btn btn-sm bg-red-200 mr-4">
            <FaAmazonPay></FaAmazonPay>
          </button>
        </Link>
        <button
          onClick={() => handleDelete(item)}
          className="btn bg-red-600 btn-sm"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default MyClassesSub;
