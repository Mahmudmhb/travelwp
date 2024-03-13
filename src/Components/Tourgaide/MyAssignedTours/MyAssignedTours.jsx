import { useState } from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";
import Heading from "../../../Sheard/Heading/Heading";
import useSecureAxios from "../../../UseProvider/UseSecureAxios/useSecureAxios";

const MyAssignedTours = () => {
  const axiosSecure = useSecureAxios();
  const { user } = useAuth();
  const [totals, setTotals] = useState([]);
  //   console.log(totals);
  const { data: guide = "", refetch } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${user.displayName}`);
      setTotals(res.data);
    },
  });
  const handleRejcted = async (total) => {
    const status = { status: "Reject" };
    const res = await axiosSecure.put(`/bookings/:${total._id}`, status);

    console.log(res.data);
    refetch();
  };
  return (
    <div className="my-10 w-5/6 mx-auto">
      <Heading heading={"my assigned tour"}></Heading>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl uppercase my-5">
                <th></th>
                <th>Package</th>
                <th> tourist name</th>
                <th> tour date</th>
                <th> tour price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {totals.map((total, idx) => (
                <tr key={total._id} className="text-center">
                  <th>{idx + 1}</th>
                  <td>{total.bookingName}</td>
                  <td>{total.touristName}</td>
                  <td>{total.date}</td>
                  <td>${total.price}</td>
                  <td className="flex gap-3">
                    <button className="btn btn-primary">Accept</button>
                    <button
                      onClick={() => handleRejcted(total)}
                      className="btn btn-warning"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAssignedTours;
