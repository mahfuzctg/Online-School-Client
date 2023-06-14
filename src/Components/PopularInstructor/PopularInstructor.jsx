import React, { useEffect, useState } from "react";
import PopularInsSub from "../popularInsSub/PopularInsSub";

const PopularInstructor = () => {
  const [instructors, setInstructor] = useState([]);
  useEffect(() => {
    fetch(
      "https://online-school-server-2xblin5so-mahfuzctg.vercel.app/instructors"
    )
      .then((res) => res.json())
      .then((data) => {
        const popularInstructor = data.filter(
          (item) => item.category === "popular"
        );
        setInstructor(popularInstructor);
      });
  }, []);
  return (
    <div>
      <h1>Popular Instructors</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
        {instructors.map((i) => (
          <PopularInsSub key={i._id} i={i}></PopularInsSub>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
