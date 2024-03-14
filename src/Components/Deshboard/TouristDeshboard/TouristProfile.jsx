// import AddTouristStroy from "./AddTouristStroy";
import useAuth from "../../../Hooks/useAuth/useAuth";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import MyBooking from "../MyBooking/MyBooking";
// import MyWishlist from "../MyWishlist/MyWishlist";

const TouristProfile = () => {
  const { user } = useAuth();
  return (
    <div className="md:flex-row gap-10 w-5/6 mx-auto justify-evenly  my-20">
      <div className="text-center">
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-96 h-96 border mx-auto"
        />
        <h1 className="uppercase my-5 text-2xl  font-bold">
          {user.displayName}
        </h1>
        <h1>{user.email}</h1>
      </div>
      {/* <Tabs>
        <TabList className="md:flex  justify-center text-center gap-8 border-b-2 border-[#ffb300] py-3">
          <Tab className="text-2xl hover:text-3xl duration-300 hover:text-[#ffb300] font-bold ">
            My Bookings
          </Tab>
          <Tab className="text-2xl hover:text-3xl duration-300 hover:text-[#ffb300] font-bold ">
            My Wishlist
          </Tab>
          <Tab className="text-2xl hover:text-3xl duration-300 hover:text-[#ffb300] font-bold ">
            Add Story
          </Tab>
        </TabList>

        <TabPanel className="my-20">
          <MyBooking></MyBooking>
        </TabPanel>
        <TabPanel className="my-5">
          <MyWishlist></MyWishlist>
        </TabPanel>
        <TabPanel>
          <AddTouristStroy></AddTouristStroy>
        </TabPanel>
      </Tabs> */}
    </div>
  );
};

export default TouristProfile;
