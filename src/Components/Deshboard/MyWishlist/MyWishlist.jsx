import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../UseProvider/UseSecureAxios/useSecureAxios";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useState } from "react";
import Heading from "../../../Sheard/Heading/Heading";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyWishlist = () => {
  const useSecure = useSecureAxios();
  const { user } = useAuth();
  const [mywishlist, setMywishlist] = useState([]);

  const { refetch, data: MyWishlist = [] } = useQuery({
    queryKey: ["MyWishlist"],
    queryFn: async () => {
      const res = await useSecure.get(`/MyWishlist/${user.email}`);
      setMywishlist(res.data);
    },
  });
  const HandleDelete = async (wishlist) => {
    // console.log("click me", wishlist);

    Swal.fire({
      title: "Are you sure?",
      text: `${wishlist.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        useSecure.delete(`/MyWishlist/${wishlist._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Your ${wishlist.name} has been delteted`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="my-20 w-5/6 mx-auto">
      <Heading heading={"my wishlist"}></Heading>
      <div>
        <h1 className="text-center text-2xl uppercase my-5 font-bold">
          Total Wishlist : {mywishlist.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-2xl border">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Delete</th>
                <th>View Packages</th>
              </tr>
            </thead>
            <tbody>
              {mywishlist.map((wishlist, indx) => (
                <tr key={wishlist._id} className="bg-base-200">
                  <th>{indx + 1}</th>
                  <td>{wishlist.name}</td>
                  <td>{wishlist.userEmail}</td>
                  <td>{wishlist.price}</td>
                  <td>
                    <button
                      onClick={() => HandleDelete(wishlist)}
                      className="btn   hover:text-[#ffb300] hover:text-2xl "
                    >
                      <FaTrash className="duration-300"></FaTrash>
                    </button>
                  </td>
                  <td>
                    <button className="hover:text-[#ffb300] hover:text-xl ">
                      {" "}
                      <Link
                        className="  duration-700"
                        to={`/packages/${wishlist._id}`}
                      >
                        View Details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyWishlist;
