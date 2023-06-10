import { useEffect, useState } from "react";
import PopularClassSub from "../../PopularClassSub/PopularClassSub";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("class.json")
      .then((res) => res.json())
      .then((data) => {
        const popularClass = data.filter((item) => item.category === "popular");
        setClasses(popularClass);
      });
  }, []);
  return (
    <div>
      <h1>Popular Class</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
        {classes.map((item) => (
          <PopularClassSub key={item._id} item={item}></PopularClassSub>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
