import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProviders";
const useCarts = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,

    data: cart = [],
  } = useQuery({
    queryKey: ["cards", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, isLoading];
};

export default useCarts;
