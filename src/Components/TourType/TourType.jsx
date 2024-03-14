import { Link } from "react-router-dom";
import Heading from "../../Sheard/Heading/Heading";
import "./tourtype.css";

const TourType = () => {
  return (
    <div className="tourtype text-white ">
      <div className="w-5/6 mx-auto py-10">
        <Heading title={"Find a Tour By"} heading={"Choose Tour"}></Heading>

        <div className="grid gap-4 md:grid-cols-5 justify-center md:justify-between">
          <Link to="/packages/65eb2e26e266ae654553e815">
            <div className="space-y-4 hover:text-white text-center">
              <img
                src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-1-hover.png"
                alt=""
                className="text-white h-[80px] w-[80px] hover:w-[95px] hover:[h-95px] duration-500  mx-auto"
              />
              <h1>Self-Guided</h1>
            </div>
          </Link>
          <Link to="/packages/65eb2e26e266ae654553e817">
            <div className="space-y-4 hover:text-white text-center ">
              <img
                src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-2-hover.png"
                alt=""
                className="text-white w-[80px] h-[80px]  hover:w-[95px] hover:[h-95px] duration-500 mx-auto"
              />
              <h1>Cruises</h1>
            </div>
          </Link>
          <Link to="/packages/65eb2e26e266ae654553e817">
            <div className="space-y-4 hover:text-white text-center">
              <img
                src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-3-hover.png"
                alt=""
                className="text-white w-[80px] h-[80px]  hover:w-[95px] hover:[h-95px] duration-500 mx-auto"
              />
              <h1>Adventure</h1>
            </div>
          </Link>
          <Link to="/packages/65eb2e26e266ae654553e815">
            <div className="space-y-4 hover:text-white text-center">
              <img
                src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-4-hover.png"
                alt=""
                className="text-white w-[80px] h-[80px]  hover:w-[95px] hover:[h-95px] duration-500 mx-auto"
              />
              <h1>Wildlife</h1>
            </div>
          </Link>
          <Link to="/packages/65eb2e26e266ae654553e817">
            <div className="space-y-4 hover:text-white text-center">
              <img
                src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-5-hover.png"
                alt=""
                className="text-white w-[80px] h-[80px]  hover:w-[95px] hover:[h-95px] duration-500 mx-auto"
              />
              <h1>Seaside</h1>
            </div>
          </Link>
        </div>
        <h1 className=" text-center my-5">
          Find your next travel adventure and make it memorable. Explore
          wildlife, enjoy seaside or book a cruise tour. Check out our popular
          destinations.
        </h1>
      </div>
    </div>
  );
};

export default TourType;
