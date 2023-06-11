import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  //
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Context
  const { createUser } = useContext(AuthContext);

  // onsubmit
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        Swal.fire("Registered successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //
  return (
    <>
      <Helmet>
        <title>Online School | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>
              {/* Photo*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="url"
                  {...register("url", { required: true })}
                  placeholder="Photo url"
                  className="input input-bordered"
                />

                {errors.url && (
                  <span className="text-red-500 text-sm">
                    Photo is required
                  </span>
                )}
              </div>
              {/* Email */}
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
                    Email is required
                  </span>
                )}
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 text-sm">
                    Password must be minimum 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 text-sm">
                    Password must be less then 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 text-sm">
                    Password must one uppercase one lowercase one special
                    character and one digits.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-blue-900 text-blue-50 hover:bg-blue-950"
                  type="submit"
                  value="Register"
                />
                <p className="font-bold text-blue-700">
                  Already register? Go to..
                  <Link to="/login" className="no-underline font-bold">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
