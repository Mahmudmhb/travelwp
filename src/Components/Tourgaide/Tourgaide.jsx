import { useEffect, useState } from "react";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
import { Link } from "react-router-dom";

const Tourgaide = () => {
  const [tourgaide, setTourgaite] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/tourgaide").then((res) => {
      setTourgaite(res.data);
    });
  }, [axiosPublic]);
  return (
    <div className="mb-20">
      <div className="grid md:grid-cols-4 justify-center gap-3">
        {tourgaide.map((tour) => (
          <div key={tour.id} className="card w-[270px] bg-base-100 shadow-xl">
            <figure className="">
              <img src={tour.image} alt="Shoes" className="rounded-t-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{tour.name}</h2>
              <p>{tour.about.slice(0, 50)}</p>
              <div className="card-actions">
                <Link to={`/tourgaidedetails/${tour._id}`}>
                  {" "}
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tourgaide;
