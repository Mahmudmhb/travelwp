// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import { BsWechat } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GoReport } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FaRegArrowAltCircleUp, FaRegStar } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";
const Bikroy = () => {
  //   const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="bg-[#e7edee]">
      <div className="w-5/6 mx-auto bg-[#ffffff] p-5">
        <div className="flex justify-between ">
          <div className="space-y-3 my-2">
            <h1 className="text-2xl font-bold ">Tecno Spark 6 4/128 (Used)</h1>
            <p className="text-[#707676]">
              Posted on 25 Mar 7:30 pm, Daulatpur, Khulna
            </p>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-3 items-center text-[#707676]">
              <CiShare2 /> Share
            </div>
            <div className="flex gap-3 items-center text-[#707676]">
              <FaRegStar /> Save Ad
            </div>
          </div>
        </div>
        <div className="flex gap-4 ">
          <div>
            <div className="w-[552px] h-[620px] border">
              {/* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper> */}
            </div>

            <div>
              <div className="flex gap-4 items-center">
                <h1 className="text-2xl my-5 text-[#4a9cce] font-bold">
                  Tk 7,000
                </h1>
                <p className="italic text-[12px]">Negotiable</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1>Condition: Used</h1>
                  <h1>Model: Spark 6</h1>
                  <h1>Authenticity: Original</h1>
                </div>
                <div>
                  <h1>Brand: Tecno</h1>
                  <h1>Edition: 4/128</h1>
                </div>
              </div>
              <div>
                <h1 className="font-bold my-5">Features</h1>
                <p>
                  4G, Dual SIM, Micro SIM, USB Type-B Port, Fast Charging,
                  Android, 4 GB RAM, Triple Camera, Bluetooth, Wifi, GPS,
                  Fingerprint Sensor
                </p>
                <h1 className="font-bold my-5">Description</h1>
                <p>
                  tecno sparks 6 <br /> 4gb ram/128 gb rom <br /> full
                  freash,,charge khub valo <br />
                  thake jotokhon ischa dekhe niben <br /> nite hole location a
                  aste hobe. <br />
                  location {">"} Afilgate, আফিলগেট
                </p>
              </div>
            </div>
          </div>

          <div className="w-full static">
            <div className="border  w-full">
              {" "}
              <h1 className="p-5">
                For sale by
                <span>Xâ Ñã</span>
              </h1>
            </div>

            <div className="flex gap-4 border items-center p-5">
              <MdOutlinePhone className="bg-[#009877] w-8 h-8 text-white p-2 rounded-full" />

              <div className="">
                <h1 className="font-bold">01765236365</h1>
                <p>Click to show phone number</p>
              </div>
            </div>
            <div className="flex gap-4 border items-center p-5">
              <BsWechat className="bg-[#009877] w-8 h-8 text-white p-2 rounded-full" />

              {/* <MdOutlinePhone  /> */}

              <div className="">
                <h1>Chat</h1>
              </div>
            </div>
            <div className="border border-[#4a9cce] mt-5 p-5">
              <div>
                <div className="flex gap-3">
                  <AiFillSafetyCertificate className="text-2xl" />

                  <h1 className="text-xl font-bold">Safety tips</h1>
                </div>
                <div>
                  <ul>
                    <li>Meet in a safe & public place</li>
                    <li>Don’t pay in advance</li>
                  </ul>
                  <Link className="text-[#4a9cce]">See all safety tips</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  border-t py-5">
          <div className="">
            <button className="flex gap-3 font-bold  px-5 py-2 items-center bg-[#ffc800]">
              <FaRegArrowAltCircleUp />
              Promote this ad
            </button>
          </div>
          <div className="">
            <button className="flex gap-3 font-bold  px-5 py-2 items-center ">
              <GoReport />
              Report this ad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikroy;
