import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassSub from "../../ClassSub/ClassSub";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://online-school-server-2xblin5so-mahfuzctg.vercel.app/classes")
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
      <h2>All Classes</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
        {classes.map((cla) => (
          <ClassSub key={cla._id} cla={cla}></ClassSub>
        ))}
      </div>
    </div>
  );
};

export default Classes;
