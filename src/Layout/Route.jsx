import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import Blogs from "../Pages/Blogs/Blogs";
import AboutUs from "../Pages/AboutUs,/AboutUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import CardDetails from "../Components/Card/CardDetails";
import AllPackages from "../Pages/AllPackages/AllPackages";
import TourGaideDetails from "../Components/Tourgaide/TourGaideDetails";
import BlogDetails from "../Pages/Blogs/BLogDetails";
import TouristProfile from "../Components/Deshboard/TouristDeshboard/TouristProfile";
import AddTouristStroy from "../Components/Deshboard/TouristDeshboard/AddTouristStroy";
import MyBooking from "../Components/Deshboard/MyBooking/MyBooking";
import MyWishlist from "../Components/Deshboard/MyWishlist/MyWishlist";
import PrivateRoute from "../Route/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "community",
        element: <Community></Community>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/allpackages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/packages/:id",
        element: <PrivateRoute></PrivateRoute>,
      },
      {
        path: "/tourgaidedetails/:id",
        element: (
          <PrivateRoute>
            <TourGaideDetails></TourGaideDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/touristblogs/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/touristprofile",
        element: (
          <PrivateRoute>
            <TouristProfile></TouristProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoriststory",
        element: (
          <PrivateRoute>
            {" "}
            <AddTouristStroy></AddTouristStroy>
          </PrivateRoute>
        ),
      },
      {
        path: "/turistbooking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/mywishlist",
        element: (
          <PrivateRoute>
            {" "}
            <MyWishlist></MyWishlist>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
