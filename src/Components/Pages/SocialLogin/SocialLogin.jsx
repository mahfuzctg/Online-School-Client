import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { GoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    GoogleLogin().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      // navigate(from, { replace: true });
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch(
        "https://online-school-server-2xblin5so-mahfuzctg.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        }
      )
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="text-center">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-sm btn-circle shadow-2xl outline my-2 "
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
