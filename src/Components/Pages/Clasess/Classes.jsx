import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassSub from "../../ClassSub/ClassSub";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Online School | Classes</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
        {classes.map((c) => (
          <ClassSub key={c._id} c={c}></ClassSub>
        ))}
      </div>
    </div>
  );
};

export default Classes;
