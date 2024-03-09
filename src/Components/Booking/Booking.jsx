import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
import Heading from "../../Sheard/Heading/Heading";

const Booking = () => {
  const [tourgaide, setTourgaite] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/tourgaide").then((res) => {
      setTourgaite(res.data);
    });
  }, [axiosPublic]);

  return (
    <div>
      <Heading heading={"Booking now"}></Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-2 w-full my-2 border"
        />
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-2 w-full border"
        />
        <div className="flex gap-4 items-center my-5 ">
          <input
            type="number"
            placeholder="Price"
            className="py-2 px-2 w-full border"
          />
          <DatePicker
            className="border text-center"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <select
          {...register("gaidename")}
          className="border hover:text-[#ffb300] p-2"
        >
          <option value="gaidename" className="text-xl">
            Tour guide name
          </option>
          {tourgaide.map((gaide) => (
            <option
              key={gaide._id}
              value={gaide.name}
              className="text-xl  hover:text-[#ffb300] duration-300 p-2"
            >
              {gaide.name}
            </option>
          ))}

          <option value="other">other</option>
        </select>
        <input
          type="file"
          className="file-input my-3 file-input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value="Book Now"
          className="w-full border-[#ffb300] text-2xl py-2 my-5 rounded-lg  bg-[#ffb300] text-white hover:text-xl duration-700"
        />
      </form>
    </div>
  );
};

export default Booking;
