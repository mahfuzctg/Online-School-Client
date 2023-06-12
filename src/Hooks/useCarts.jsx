import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSeceure";
const useCarts = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cards", user?.email],
    // queryFn: async () => {
    //   const res = await fetch(
    //     `https://online-school-server-2xblin5so-mahfuzctg.vercel.app/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCarts;
