import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
import { Link } from "react-router-dom";

const Card = () => {
  const [card, setCard] = useState([]);
  const axiosPublic = useAxiosPublic();
  axiosPublic.get("/packages").then((res) => {
    setCard(res.data);
  });

  const handleaddtoCart = (item) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${item.heading1} save to cart`,
      showConfirmButton: false,
      timer: 1500,
    });

    console.log(item);
  };
  return (
    <div>
      <h1>total {card.length}</h1>

      <div className="grid md:grid-cols-3 justify-center gap-4">
        {card.map((item) => (
          <div key={item.id} className="card w-[350px] bg-base-100 shadow-xl">
            <figure className="relative">
              <img src={item.image1} alt="Shoes" />
            </figure>
            <button
              onClick={() => handleaddtoCart(item)}
              className=" absolute top-3 right-2"
            >
              <span>
                <CiHeart className="text-3xl hover:text-4xl duration-500 hover:text-red-500 font-extrabold  text-white" />
              </span>
            </button>
            <div className="card-body">
              <h2 className="card-title">
                {item.heading1}
                <div className="badge badge-secondary">{item.price}</div>
              </h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/packages/${item._id}`}>
                  {" "}
                  <button className="badge badge-outline">View Package</button>
                </Link>
                <button className="badge badge-outline">My Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
