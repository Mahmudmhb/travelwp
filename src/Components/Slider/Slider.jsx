// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Slider = () => {
  return (
    <div className="  ">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper h-[100vh]"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://travelwp.physcode.com/wp-content/uploads/revslider/slider-home/slider-1.jpg"
              alt=""
              className="h-[100vh] w-full"
            />
          </div>

          <div className="">
            <div className="absolute top-1/3 ml-32 mx-auto ">
              <h1 className="text-white">FEATURED TRIP</h1>
              <h1 className="text-white text-5xl">
                Peak Practice: Walking in <br /> Snowdonia, Wales
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://travelwp.physcode.com/wp-content/uploads/revslider/slider-home/slider-2.jpeg"
            alt=""
            className="h-[100vh] w-full"
          />
          <div className="absolute top-1/3 ml-32 mx-auto ">
            <h1 className="text-white">FEATURED TRIP</h1>
            <h1 className="text-white text-5xl">
              10 reasons you will love
              <br /> Australia’s Byron Bay
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://travelwp.physcode.com/wp-content/uploads/revslider/slider-home/slider-3.jpeg"
            alt=""
            className="h-[100vh] w-full"
          />
          <div className="absolute top-1/3 ml-32 mx-auto ">
            <h1 className="text-white">FEATURED TRIP</h1>
            <h1 className="text-white text-5xl">
              Need for speed: where to find the
              <br /> world's best street arts
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://travelwp.physcode.com/wp-content/uploads/revslider/slider-home/slider-4.jpeg"
            alt=""
            className="h-[80vh] w-full"
          />
          <div className="absolute top-1/3 ml-32 mx-auto ">
            <h1 className="text-white">FEATURED TRIP</h1>
            <h1 className="text-white text-5xl">
              Ditch Las Vegas and see a
              <br /> difference side of Nevada
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
