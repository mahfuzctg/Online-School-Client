import React from "react";
import { Helmet } from "react-helmet-async";
import useCarts from "../../../../Hooks/useCarts";
import MyClassesSub from "./MyClassesSub";

const MyClasses = () => {
  const [cart] = useCarts();

  return (
    <div>
      <Helmet>
        <title>Online School | Classes</title>
      </Helmet>
      <div>
        <h3>Total selected class: {cart.length}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
        {cart.map((item) => (
          <MyClassesSub key={item._id} item={item}></MyClassesSub>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
