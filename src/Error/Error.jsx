import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className=" glass w-full h-screen text-center pt-24" id="error-page">
      <h1>Oops!</h1>
      <p className="text-2xl font bold">Sorry! Page Not Found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to="/" className="font-bold no-underline text-5xl">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
