import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

import useAxiosSecure from "./useAxiosSeceure";

const useInstructors = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorsLoading } = useQuery({
    queryKey: ["isInstructors", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
      return res.data.instructors;
    },
  });
  return [isInstructor, isInstructorsLoading];
};
export default useInstructors;
