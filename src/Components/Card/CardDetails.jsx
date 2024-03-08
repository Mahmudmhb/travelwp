import { useParams } from "react-router-dom";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";
import ShearSlider from "../../Sheard/ShearSlider/ShearSlider";

const CardDetails = () => {
  const [details, setDetails] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axiosPublic(`/packages/${id}`).then((res) => {
      setDetails(res.data);
    });
  }, [axiosPublic, id]);

  const {
    heading1,
    heading2,
    heading3,
    heading4,
    image1,
    image2,
    image3,
    image4,
    shortDescription1,
    shortDescription2,
    shortDescription3,
    shortDescription4,
    description1,
    description2,
    description3,
    description4,
    price,
  } = details;
  //   console.log(axiosPublic);

  return (
    <div className="my-20 w-5/6 mx-auto">
      <h1 className="text-4xl font-semibold my-5">{heading1}</h1>
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <h1 className="text-4xl my-5 font-bold">{heading2}</h1>
        <div className="md:flex my-5">
          <img src={image1} alt="" className="w-[300px]" />
          <img src={image2} alt="" width={"300px"} />
          <img src={image3} alt="" className="w-[300px]" />
          <img src={image4} alt="" className="w-[300px]" />
        </div>
        <p>{shortDescription1}</p>
      </div>
      <h1 className="text-4xl my-5 font-bold">{heading3}</h1>
      <p>{shortDescription2}</p>
      <h1 className="text-4xl my-5 font-bold">{heading4}</h1>
      <p>{shortDescription3}</p>
      <p>{shortDescription2}</p>
      <h1 className="text-4xl my-5 font-bold">{description1}</h1>
      <p>{shortDescription4}</p>
    </div>
  );
};

export default CardDetails;
