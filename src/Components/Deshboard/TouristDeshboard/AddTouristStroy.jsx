import { useState } from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useForm } from "react-hook-form";
import Heading from "../../../Sheard/Heading/Heading";
import DatePicker from "react-datepicker";
import useAxiosPublic from "../../../UseProvider/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const image_key = import.meta.env.VITE_imgdb_key;
// const image_url = `https://api.imgbb.com/1/upload?key=${image_key}`;
// console.log(image_key, image_url);
const image_link = `https://api.imgbb.com/1/upload?key=${image_key}`;

const AddTouristStroy = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  //   console.log(user);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(startDate);

    const imagefile = { image: data.image[0] };
    // console.log(imagefile);
    const res = await axiosPublic.post(image_link, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const image = res.data.data.display_url;
    // console.log(image, data);
    if (res.data.success) {
      const tourStory = {
        authorName: user.displayName,
        authorEmail: user.email,
        image: image,
        date: startDate,
        description: data.descripton,
        heading: data.heading,
        authorImage: user.Photo_URL,
        shortDescription: data.shortDescription,
        subheading: data.subheading,
      };

      const res = await axiosPublic.post("/touristblogs", tourStory);
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.heading} Your Story SuccessFully Done `,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      //   console.log(tourStory);
    }
  };

  return (
    <div className="w-5/6 mx-auto">
      <Heading heading={"Add your stroy"}></Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        {/* > */}

        <input
          type="text"
          placeholder="Heading"
          {...register("heading")}
          className="py-2 px-2 w-full my-5 border border-[#ffb300] rounded-lg"
        />
        <input
          type="text"
          placeholder="subheading"
          {...register("sub heading")}
          className="py-2 px-2 w-full my-5 border border-[#ffb300] rounded-lg"
        />
        <div className="flex gap-4 items-center my-5 ">
          <input
            type="file"
            {...register("image")}
            className="file-input my-3 border border-[#ffb300] rounded-lg w-full max-w-xs"
          />
          <DatePicker
            className="border border-[#ffb300] rounded-lg text-center"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <textarea
          name="shortDescription"
          placeholder="Short Description your Story"
          id=""
          cols="2"
          {...register("shortDescription")}
          rows="3"
          className="py-2 px-2 w-full border border-[#ffb300] rounded-lg"
        ></textarea>
        <textarea
          name="descripton"
          placeholder="Details your Story"
          id=""
          cols="5"
          {...register("descripton")}
          rows="5"
          className="py-2 px-2 w-full border border-[#ffb300] rounded-lg"
        ></textarea>
        <input
          type="submit"
          value="Add Story"
          className="w-full border-[#ffb300] text-2xl py-2 my-5 rounded-lg  bg-[#ffb300] text-white hover:text-xl duration-700"
        />
      </form>
    </div>
  );
};

export default AddTouristStroy;
