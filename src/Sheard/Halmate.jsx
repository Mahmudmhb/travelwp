import React from "react";
import { Helmet } from "react-helmet-async";

const Halmate = ({ title, name }) => {
  return (
    <Helmet>
      <title>
        {title} || {name}
      </title>
    </Helmet>
  );
};

export default Halmate;
