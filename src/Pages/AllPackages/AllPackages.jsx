import Card from "../../Components/Card/Card";
import Halmate from "../../Sheard/Halmate";

const AllPackages = () => {
  return (
    <div className="w-5/6 mx-auto my-10">
      <Halmate title={"Packages"} name={"travelwp"} />
      {/* <Halmate title={"Packages || travelwp"}></Halmate> */}
      <Card></Card>
    </div>
  );
};

export default AllPackages;
