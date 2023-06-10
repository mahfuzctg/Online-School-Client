import React from "react";

const ClassSub = ({ c }) => {
  const { Name, Image, Instructor_name, Available_seats, Price } = c;
  return (
    <div className="pb-4 px-2 bg-slate-100">
      <img className="h-2/4 w-full" src={Image} alt="Shoes" />

      <>
        <p>Name:{Name}</p>
        <p>Instructor name: {Instructor_name}</p>
        <p>Available seats:{Available_seats}</p>
        <p>Price ${Price}</p>
      </>
      <button className="btn btn-sm">Select</button>
    </div>
  );
};

export default ClassSub;
