import React from "react";

const Students = () => {
  return (
    <>
      <h2>Successful students</h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 my-8">
        <div className=" card-side bg-base-100  shadow-xl">
          <figure>
            <img src="https://i.postimg.cc/L65mt0w6/student1.jpg" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">John Doe</h2>
            <p>
              With determination and practice, he went from struggling with
              English to acing exams and securing a scholarship.
            </p>
          </div>
        </div>
        <div className=" card-side bg-base-100  shadow-xl">
          <figure>
            <img src="https://i.postimg.cc/3JZDNwV0/student2.jpg" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jane Smith</h2>
            <p>
              From a small village to international conferences, she mastered
              English, broadened her horizons, and became a global inspiration.
            </p>
          </div>
        </div>
        <div className=" card-side bg-base-100  shadow-xl">
          <figure>
            <img
              className=""
              src="https://i.postimg.cc/jdvLKFnz/student3.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">David Williams</h2>
            <p>
              With passion and perseverance, she transformed her broken English
              into eloquence, unlocking doors to endless opportunities.
            </p>
          </div>
        </div>
        <div className=" card-side bg-base-100  shadow-xl">
          <figure>
            <img
              src="https://i.postimg.cc/MGmLrVFK/student4.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Emily Johnson</h2>
            <p>
              English success story: From shy to fluent, she conquered her
              fears, studied relentlessly, and now speaks English fluently!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
