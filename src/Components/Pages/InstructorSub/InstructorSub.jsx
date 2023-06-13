import React from "react";

const InstructorSub = ({ ins }) => {
  const { Image, Name, Email } = ins;

  return (
    <div className=" bg-slate-100">
      <img className="h-2/4 w-full mb-10" src={Image} alt="Shoes" />
      <span className="block">{Name}</span>
      <span className="text-sm font-normal">{Email}</span>
    </div>
  );
};

export default InstructorSub;
