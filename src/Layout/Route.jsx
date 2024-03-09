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
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/tourgaidedetails/:id",
        element: <TourGaideDetails></TourGaideDetails>,
      },
      {
        path: "/touristblogs/:id",
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
]);
export default router;
