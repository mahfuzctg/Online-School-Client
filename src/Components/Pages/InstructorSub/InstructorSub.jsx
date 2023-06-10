import React from "react";

const InstructorSub = ({ ins }) => {
  const { Image, Name, Email } = ins;
  return (
    <div className=" bg-slate-100">
      <img className="h-2/3 w-full" src={Image} alt="Shoes" />

      <p>Name: {Name}</p>
      <p>Email: {Email}</p>
    </div>
  );
};

export default InstructorSub;
