import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
const image_key = import.meta.env.VITE_imgdb_key;
const image_link = `https://api.imgbb.com/1/upload?key=${image_key}`;

import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
import Heading from "../../Sheard/Heading/Heading";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Booking = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [details, setDetails] = useState([]);

  // console.log(details);
  const [tourgaide, setTourgaite] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/tourgaide").then((res) => {
      setTourgaite(res.data);
      axiosPublic(`/packages/${id}`).then((res) => {
        setDetails(res.data);
      });
    });
  }, [axiosPublic, id]);

  const onSubmit = async (data) => {
    const imagefile = { image: data.image[0] };
    // console.log(imagefile);
    const res = await axiosPublic.post(image_link, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const image = res.data.data.display_url;
    console.log(res);
    if (res.data.success) {
      const booking = {
        image: image,
        touristName: user.displayName,
        touristEmail: user.email,
        price: details.price,
        bookingName: details.heading1,
        gaideName: data.gaidename,
        date: startDate,
        status: "In Review",
      };
      // console.log(booking);
      const res = await axiosPublic.post("/booking", booking);
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `“Confirm your Booking”`,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    }

    // console.log(data);
  };

  return (
    <div>
      <Heading heading={"Booking now"}></Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className=" space-y-5">
          <input
            type="text"
            placeholder="Name"
            required
            value={user.displayName}
            {...register("name")}
            className="py-2 px-2 w-full  border border-[#ffb300] rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            required
            {...register("email")}
            className="py-2 px-2 w-full border border-[#ffb300] rounded-lg"
          />
        </div>
        <div className="flex gap-4 items-center my-5 ">
          <input
            type="number"
            required
            placeholder="Price"
            value={details.price}
            {...register("price")}
            className="py-2 px-2 w-full border"
          />
          <DatePicker
            required
            className="border text-center"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <select
          required
          {...register("gaidename")}
          className="border hover:text-[#ffb300] p-2"
        >
          <option defaultValue="default" className="text-xl">
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
          required
          type="file"
          {...register("image")}
          className="file-input my-3 file-input-bordered w-full max-w-xs"
        />

        <button
          type="submit"
          className="w-full border-[#ffb300] text-2xl py-2 my-5 rounded-lg  bg-[#ffb300] text-white hover:text-xl duration-700"
        >
          {" "}
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
