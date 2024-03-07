import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Heading from "../Heading/Heading";
const Destination = () => {
  return (
    <div className="w-5/6 mx-auto">
      <Heading title={"Find a Tour by"} heading={"DESTINATION"}></Heading>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative ">
          <div>
            <img
              src="https://travelwp.physcode.com/wp-content/uploads/2024/01/brazil-destination-370x370.jpg"
              alt=""
              className="rounded-[50%]"
            />
          </div>
          <div className="uppercase text-center text-white hover:text-3xl duration-500  absolute bottom-[20%] left-[30%]  text-2xl">
            <h1 className=" silder">brazil</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <div>
            <img
              src="https://travelwp.physcode.com/wp-content/uploads/2024/01/ottawa-canada-370x370.jpg"
              alt=""
              className="rounded-[50%]"
            />
          </div>
          <div className="uppercase text-center text-white hover:text-3xl duration-500  absolute bottom-[20%] left-[30%]  text-2xl">
            <h1 className=" silder">canada</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <div>
            <img
              src="https://travelwp.physcode.com/wp-content/uploads/2024/01/cuba-old-havana-370x370.jpg"
              alt=""
              className="rounded-[50%]"
            />
          </div>
          <div className="uppercase text-center text-white hover:text-3xl duration-500  absolute bottom-[20%] left-[30%]  text-2xl">
            <h1 className=" silder">cuba</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <div>
            <img
              src="https://travelwp.physcode.com/wp-content/uploads/2016/10/25656857141_edcdf5e6e3_o.jpg"
              alt=""
              className="rounded-[50%]"
            />
          </div>
          <div className="uppercase text-center text-white hover:text-3xl duration-500  absolute bottom-[20%] left-[30%]  text-2xl">
            <h1 className=" silder">italy</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <div>
            <img
              src="https://travelwp.physcode.com/wp-content/uploads/2017/01/photo-1474181487882-5abf3f0ba6c2.jpg"
              alt=""
              className="rounded-[50%]"
            />
          </div>
          <div className="uppercase text-center text-white hover:text-3xl duration-500  absolute bottom-[20%] left-[30%]  text-2xl">
            <h1 className=" silder">philippine</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <div>
            <img
              src="https://travelwp.physcode.com/wp-content/uploads/2017/03/washington_dc.jpg"
              alt=""
              className="rounded-[50%]"
            />
          </div>
          <div className="uppercase text-center text-white hover:text-3xl duration-500  absolute bottom-[20%] left-[30%]  text-2xl">
            <h1 className=" silder">usa</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Destination;
