import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "/public/Packages.json",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
