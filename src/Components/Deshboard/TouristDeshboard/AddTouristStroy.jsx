import { useState } from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useForm } from "react-hook-form";
import Heading from "../../../Sheard/Heading/Heading";
import DatePicker from "react-datepicker";

const AddTouristStroy = () => {
  const { user } = useAuth();
  console.log(user);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-5/6 mx-auto">
      <Heading heading={"Add your stroy"}></Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Name"
            disabled
            value={user?.displayName}
            className="py-2 px-2 w-full  border border-[#ffb300] rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={user?.email}
            className="py-2 px-2 w-full border border-[#ffb300] rounded-lg"
          />
        </div>

        <input
          type="text"
          placeholder="Heading"
          className="py-2 px-2 w-full my-5 border border-[#ffb300] rounded-lg"
        />
        <div className="flex gap-4 items-center my-5 ">
          <input
            type="file"
            className="file-input my-3 border border-[#ffb300] rounded-lg w-full max-w-xs"
          />
          <DatePicker
            className="border border-[#ffb300] rounded-lg text-center"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <textarea
          name="descripton"
          placeholder="Details your Story"
          id=""
          cols="10"
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
