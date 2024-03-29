import React from "react";
import Heading from "../../Sheard/Heading/Heading";
import "./PhotoAlbam.css";
const PhotoAlbam = () => {
  return (
    <div className=" mt-20 ">
      <Heading heading={"Photo Albam"}></Heading>
      <div className="md:flex">
        <div>
          <div className="image-container ">
            <img
              src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-2.jpg"
              alt=""
              className="w-[400px]   duration-500"
            />
          </div>
          <div className="image-container ">
            <img
              src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-1.jpg"
              alt=""
              className="w-[400px]   duration-500"
            />
          </div>
        </div>
        <div className="image-container ">
          <img
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h5-img-2.jpg"
            alt=""
            width={"545px"}
            // height={"600px"}
            className=" duration-700"
          />
        </div>
        <div>
          <div className="image-container ">
            <img
              src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-4.jpg"
              alt=""
              // width={"400px"}
              className="w-[400px]   duration-500"
            />
          </div>
          <div className="image-container">
            <img
              src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h4-masonry-gallery-img-5.jpg"
              alt=""
              className="w-[400px]   duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbam;
