import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Sheard/Header/Navber";
import Slider from "../Components/Slider/Slider";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Slider></Slider>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
