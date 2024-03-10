import React, { useState } from "react";
import useAxiosPublic from "../../../UseProvider/useAxiosPublic/useAxiosPublic";

const MyBooking = () => {
  const { booking, setBooking } = useState([]);

  const axiosPublic = useAxiosPublic();
  axiosPublic.get("/booking").then((res) => {
    console.log(res.data);
  });

  return (
    <div>
      <h1>this is booking page</h1>
    </div>
  );
};

export default MyBooking;
