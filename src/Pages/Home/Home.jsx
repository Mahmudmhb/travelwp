import TourType from "../../Components/TourType/TourType";
import Tourism from "../../Components/Tourism/Tourism";
import Destination from "../../Sheard/Destination/Destination";
import Halmate from "../../Sheard/Halmate";

const Home = () => {
  return (
    <div>
      <Halmate title={"home"} name={"travelwp"} />

      <Destination></Destination>
      <Tourism></Tourism>
      <TourType></TourType>
    </div>
  );
};

export default Home;
