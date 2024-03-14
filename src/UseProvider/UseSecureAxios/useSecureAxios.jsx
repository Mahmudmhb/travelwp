import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://travelwp-server.vercel.app",
});
const useSecureAxios = () => {
  return axiosSecure;
};

export default useSecureAxios;
