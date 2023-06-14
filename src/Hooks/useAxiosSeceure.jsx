import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const useAxiosSecure = () => {
  const [axiosSecure, setAxiosSecure] = useState(null);
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("access-token");

    const instance = axios.create({
      baseURL: "YOUR_BASE_URL_HERE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
          // Logout and redirect to the login page
          logoutAndRedirect();
        }
        return Promise.reject(error);
      }
    );

    setAxiosSecure(instance);
  }, []);

  const logoutAndRedirect = async () => {
    // Call your logout method from the AuthContext asynchronously
    await logOut();

    // Redirect the user to the login page
    navigate("/login");
  };

  return axiosSecure;
};

export default useAxiosSecure;
