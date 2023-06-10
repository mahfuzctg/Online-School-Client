import React from "react";

const PopularClassSub = ({ item }) => {
  const { Name, Price } = item;
  return (
    <div>
      <h3>{Name}</h3>
    </div>
  );
};

export default PopularClassSub;
