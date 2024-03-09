import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";
import ShearSlider from "../../Sheard/ShearSlider/ShearSlider";
import Heading from "../../Sheard/Heading/Heading";

const CardDetails = () => {
  const [details, setDetails] = useState([]);
  const [tourgaide, setTourgaite] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axiosPublic(`/packages/${id}`).then((res) => {
      setDetails(res.data);
    });

    axiosPublic.get("/tourgaide").then((res) => {
      setTourgaite(res.data);
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
      <div className="grid md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1 className="text-4xl font-semibold my-5">{heading1}</h1>
          <div className="flex">
            <div>
              <img src={image1} alt="" className="w-[300px] border-4 p-2" />

              <img
                src={image2}
                alt=""
                width={"300px"}
                className="border-4 p-2"
              />
            </div>
            <div>
              <img src={image1} alt="" className="w-[700px] border-4 p-2" />
            </div>
            <div>
              <img src={image3} alt="" className="w-[300px] border-4 p-2" />

              <img
                src={image4}
                alt=""
                width={"300px"}
                className="border-4 p-2"
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold my-5">{heading1}</h1>
            <p>{shortDescription1}</p>
            <h1 className="text-4xl my-5 font-bold">{heading2}</h1>

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
        <div>
          <Heading heading={"See your Tourist Gaide"}></Heading>

          <div>
            {tourgaide.map((gaide) => (
              <div key={gaide._id}>
                <Link to={`/tourgaidedetails/${gaide._id}`}>
                  <div className="flex gap-3 my-2 items-center">
                    <img
                      src={gaide.image}
                      alt=""
                      className="w-36  p-4 hover:p-1 duration-700"
                    />
                    <div className="hover:text-[#ffb300] duration-300">
                      <h1 className="text-2xl font-bold">{gaide.name}</h1>
                      <p>{gaide.job}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
