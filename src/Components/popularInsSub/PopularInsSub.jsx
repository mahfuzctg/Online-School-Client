import React from "react";

const PopularInsSub = ({ i }) => {
  const { Image, Name, Email } = i;

  return (
    <div className=" bg-slate-100">
      <img className="h-2/3 w-full" src={Image} alt="Shoes" />

      <p>Name: {Name}</p>
      <p>Email: {Email}</p>
    </div>
  );
};

export default PopularInsSub;
