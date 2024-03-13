import useAxiosPublic from "../../../UseProvider/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";

const GuideProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: guide = "" } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookings/${user.displayName}`);
      console.log(res.data);
    },
  });
  return (
    <div>
      <h1>this is guide profile</h1>
    </div>
  );
};

export default GuideProfile;
