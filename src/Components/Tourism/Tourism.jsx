import Heading from "../../Sheard/Heading/Heading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "../Card/Card";
import { Link, NavLink } from "react-router-dom";
import Tourgaide from "../Tourgaide/Tourgaide";
import "../TourType/tourtype.css";

const Tourism = () => {
  return (
    <div className="w-5/6 my-10 mx-auto">
      <Heading
        title={"Take a Look at Our"}
        heading={"MOST POPULAR TOURS"}
      ></Heading>

      <Tabs>
        <TabList className="md:flex  justify-center text-center gap-8 border-b-2 border-[#ffb300] py-3">
          <Tab className="text-2xl hover:text-3xl duration-300 hover:text-[#ffb300] font-bold ">
            Overview
          </Tab>
          <Tab className="text-2xl hover:text-3xl duration-300 hover:text-[#ffb300] font-bold ">
            Our Packages
          </Tab>
          <Tab className="text-2xl hover:text-3xl duration-300 hover:text-[#ffb300] font-bold ">
            Tour Guides
          </Tab>
        </TabList>

        <TabPanel className="my-20">
          <div className="md:flex  gap-4 justify-center items-center">
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
                veritatis unde voluptatem ullam. Temporibus saepe est cupiditate
                voluptatem cumque tenetur ratione error id, eveniet, nostrum
                ipsum deserunt tempore quidem quis debitis earum blanditiis
                eligendi voluptates doloribus praesentium aspernatur
                perferendis. Omnis, aperiam ipsa.
              </p>
              <button className="text-[#ffb300] border-b-4 border-[#ffb300] text-xl hover:text-2xl duration-500 font-extrabold">
                See More
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="my-5">
          <h2 className="text-center">
            <Card></Card>
            <Link to="/allpackages">
              <button className="btn btn-primary my-5 text-center">
                All Packages
              </button>
            </Link>
          </h2>
        </TabPanel>
        <TabPanel>
          <Tourgaide></Tourgaide>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tourism;
