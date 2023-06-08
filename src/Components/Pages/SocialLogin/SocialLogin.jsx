import React from "react";
import { FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="text-center">
      <button className="btn btn-sm btn-circle shadow-2xl outline my-2 ">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
