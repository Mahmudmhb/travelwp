import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import {
  FaCalendarAlt,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaRibbon,
  FaTelegram,
} from "react-icons/fa";

const TourGaideDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/tourgaide/${id}`).then((res) => {
      setDetails(res.data);
    });
  }, [axiosPublic, id]);

  const { name, job, about, email, phone, born, education, image } = details;
  return (
    <div className="flex w-5/6 gap-5 my-10 mx-auto justify-center">
      <div>
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="w-1/2 space-y-5">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p>{job}</p>
        <h3 className="text-3xl font-bold">About</h3>
        <p>{about}</p>
        <h1 className="flex gap-3 items-center">
          <MdEmail />
          Email: {email}
        </h1>
        <h1 className="flex gap-3 items-center">
          <PiPhoneCallFill />
          Phone:{phone}
        </h1>
        <h1 className="flex gap-3 items-center">
          <FaCalendarAlt />
          Born on:{born}
        </h1>
        <h1 className="flex gap-3 items-center">
          <FaRibbon />
          Education:{education}
        </h1>
        <div className="text-3xl flex gap-4">
          <FaFacebook /> <FaTelegram /> <FaInstagram /> <FaGoogle />
        </div>
      </div>
    </div>
  );
};

export default TourGaideDetails;
