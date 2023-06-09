import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);

    logIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire("User login successfully.");
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Online School | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    Password is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-blue-900 text-blue-50 hover:bg-blue-950"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="font-bold text-blue-700">
                New to ?
                <Link to="/register" className="no-underline font-bold">
                  Register
                </Link>
                <SocialLogin></SocialLogin>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
