import React from "react";
import Heading from "../../Sheard/Heading/Heading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Card from "../Card/Card";

const Tourism = () => {
  return (
    <div className="w-5/6 mx-auto">
      <Heading
        title={"Take a Look at Our"}
        heading={"MOST POPULAR TOURS"}
      ></Heading>

      <Tabs>
        <TabList className="flex justify-center gap-8">
          <Tab className="text-2xl">Overview</Tab>
          <Tab className="text-2xl">Our Packages</Tab>
          <Tab className="text-2xl">Tour Guides</Tab>
        </TabList>

        <TabPanel className="my-10">
          <div className="grid md:grid-cols-3 justify-center">
            <div className="relative rounded-xl h-[260px] w-[350px]">
              <div>
                <img
                  src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/08/H1-img-1.jpg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div className=" absolute bottom-20 left-8   text-white">
                <h1 className="text-2xl italic">Save up to</h1>
                <h1 className="text-5xl"> 50%</h1>
                <h1 className="text-2xl"> Let’s explore the world.</h1>
                <button className="flex items-center gap-3">
                  Book Now <FaArrowAltCircleRight />
                </button>
              </div>
            </div>

            <div className="relative rounded-xl  h-[260px] w-[350px]">
              <div>
                <img
                  src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/08/H1-img-1.jpg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div className=" absolute bottom-20 left-8   text-white">
                <h1 className="text-2xl italic">Save up to</h1>
                <h1 className="text-5xl"> 50%</h1>
                <h1 className="text-2xl"> Let’s explore the world.</h1>
                <button className="flex items-center gap-3">
                  Book Now <FaArrowAltCircleRight />
                </button>
              </div>
            </div>

            <div className="relative rounded-xl  h-[260px] w-[350px]">
              <div>
                <img
                  src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/08/H1-img-1.jpg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div className=" absolute bottom-20 left-8   text-white">
                <h1 className="text-2xl italic">Save up to</h1>
                <h1 className="text-5xl"> 50%</h1>
                <h1 className="text-2xl"> Let’s explore the world.</h1>
                <button className="flex items-center gap-3">
                  Book Now <FaArrowAltCircleRight />
                </button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>
            <Card></Card>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tourism;
