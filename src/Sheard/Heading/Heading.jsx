import React from "react";

const Heading = ({ title, heading }) => {
  return (
    <div className=" text-center mt-20  mb-10">
      <div className="space-y-5">
        <h1 className="w-40 mx-auto">{title}</h1>
        <h1 className="text-3xl hover:text-4xl h-10 duration-500 text-center uppercase font-bold ">
          {heading}
        </h1>
        <h1 className="border-b-4 border-[#ffb300] w-20 mx-auto"></h1>
      </div>
    </div>
  );
};

export default Heading;
