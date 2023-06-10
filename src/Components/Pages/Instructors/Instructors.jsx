import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorSub from "../instructorSub/instructorSub";
const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Online School | Instructors</title>
      </Helmet>
      <h1>Instructors coming soon</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
        {instructors.map((ins) => (
          <InstructorSub key={ins._id} ins={ins}></InstructorSub>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
