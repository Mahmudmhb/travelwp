import React from "react";
import Heading from "../../Sheard/Heading/Heading";

const PhotoAlbam = () => {
  return (
    <div className=" mt-20">
      <Heading heading={"Photo Albam"}></Heading>
      <div className="md:flex">
        <div>
          <img
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-2.jpg"
            alt=""
            className="w-[400px] hover:w-[420px]  duration-500"
          />
          <img
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-1.jpg"
            alt=""
            className="w-[400px] hover:w-[420px]  duration-500"
          />
        </div>
        <img
          src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-3.jpg"
          alt=""
          //   width={"400px"}
          className="hover:p-5 duration-700"
        />
        <div>
          <img
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-4.jpg"
            alt=""
            // width={"400px"}
            className="w-[400px] hover:w-[420px]  duration-500"
          />
          <img
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-5.jpg"
            alt=""
            className="w-[400px] hover:w-[420px]  duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbam;
