import Heading from "../../Sheard/Heading/Heading";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Tourgaide from "../Tourgaide/Tourgaide";
import { useState } from "react";
import "./Tourism.css";

const Tourism = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = async (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className=" my-10 ">
      <Heading
        title={"Take a Look at Our"}
        heading={"MOST POPULAR TOURS"}
      ></Heading>

      <div className="my-10 tab-buttons  text-center">
        <button
          className={
            activeTab === 1
              ? "active-tab  buttons rounded-3xl border-2 border-black  "
              : ""
          }
          onClick={() => handleTabClick(1)}
        >
          <p className="uppercase"> Overview</p>
        </button>
        <button
          className={
            activeTab === 2
              ? "active-tab rounded-3xl border-2 border-black  "
              : ""
          }
          onClick={() => handleTabClick(2)}
        >
          <p className="uppercase">Our Packages</p>
        </button>
        <button
          className={
            activeTab === 3
              ? "active-tab rounded-3xl border-2 border-black  "
              : ""
          }
          onClick={() => handleTabClick(3)}
        >
          <p className="uppercase"> Tour Guides</p>
        </button>
      </div>

      <div>
        {activeTab === 1 && (
          <>
            <div className="overview h-[90vh] flex items-center">
              <div className="md:flex items-center gap-5 w-5/6 mx-auto">
                <div className="w-1/2">
                  <img
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h2-img-1.png"
                    alt=""
                  />
                </div>
                <div className="space-y-5 w-1/2">
                  <h1 className="text-5xl font-extrabold text-white">
                    Last Minute Offer
                  </h1>
                  <p className="text-2xl italic font-extrabold text-white">
                    Aerial view of Cape Town with Cape Town Stadium
                  </p>
                  <p className="text-white">
                    Last Minute Offer Aerial view of Cape Town with Cape Town
                    Stadium Lorem ipsum dolor sit amet. Lorem Ipsn gravida. Pro
                    ain gravida nibh vel velit an auctor aliqueenean ollicitudin
                    ain gravida nibh vel version an ipsum. Lorem ipsim dolor sit
                    amet auctor aliqueenean ollicitudin.
                  </p>
                  <button className=" w-40 hover:bg-[#303030] p-3 text-2xl bg-white hover:text-white duration-500 text-[#ff681a]">
                    View More
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="md:flex  gap-4 justify-center items-center">
              <div className="relative">
                <img
                  src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/destination-1-title-img.jpg"
                  alt=""
                  className=" "
                />
              </div>
              <div className="absolute italic text-white left-1/4">
                <h1 className="md:text-[150px]">50%</h1>
                <p className="md:text-8xl text-[#ffb300] -mt-20">discount</p>
              </div>

              <div className="w-1/2 space-y-5">
                <h1 className="text-3xl font-bold">Hit The Road</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  nulla quisquam quas voluptate at debitis cupiditate, ipsa,
                  veritatis unde voluptatem ullam. Temporibus saepe est
                  cupiditate voluptatem cumque tenetur ratione error id,
                  eveniet, nostrum ipsum deserunt tempore quidem quis debitis
                  earum blanditiis eligendi voluptates doloribus praesentium
                  aspernatur perferendis. Omnis, aperiam ipsa.
                </p>
                <button className="text-[#ffb300] border-b-4 border-[#ffb300] text-xl hover:text-2xl duration-500 font-extrabold">
                  See More
                </button>
              </div>
            </div> */}
          </>
        )}
      </div>
      <div className="w-5/6 mx-auto">
        {activeTab === 2 && (
          <>
            <h2 className="text-center">
              <Card></Card>
              <Link to="/allpackages">
                <button className="btn btn-primary my-5 text-center">
                  All Packages
                </button>
              </Link>
            </h2>
          </>
        )}
      </div>
      <div className="w-5/6 mx-auto">
        {activeTab === 3 && (
          <>
            <Tourgaide></Tourgaide>
          </>
        )}
      </div>
    </div>
  );
};

export default Tourism;
