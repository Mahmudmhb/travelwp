import PhotoAlbam from "../../Components/PhotoAlbam/PhotoAlbam";
import Slider from "../../Components/Slider/Slider";
import TourType from "../../Components/TourType/TourType";
import Tourism from "../../Components/Tourism/Tourism";
import Destination from "../../Sheard/Destination/Destination";
import Halmate from "../../Sheard/Halmate";
import TouristBlogs from "../Blogs/TouristBlogs";

const Home = () => {
  return (
    <div>
      <Halmate title={"home"} name={"travelwp"} />
      <Slider></Slider>

      <Destination></Destination>
      <PhotoAlbam></PhotoAlbam>
      <Tourism></Tourism>
      <TourType></TourType>
      <TouristBlogs></TouristBlogs>
    </div>
  );
};

export default Home;
