import useSecureAxios from "../UseSecureAxios/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const useQueryUser = () => {
  const axiosSecure = useSecureAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      //   console.log(res.data);
      return res.data;
    },
  });
  return [users, refetch];
};

export default useQueryUser;
