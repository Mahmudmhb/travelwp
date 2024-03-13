import React, { useState } from "react";
import useAxiosPublic from "../../../UseProvider/useAxiosPublic/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";
import Heading from "../../../Sheard/Heading/Heading";

const MyAssignedTours = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [totals, setTotals] = useState();
  console.log(totals);
  const { data: guide = "" } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookings/${user.displayName}`);
      setTotals(res.data);
    },
  });
  return (
    <div>
      <Heading heading={"my assigned tour"}></Heading>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {totals.map((total, idx) => (
                <tr key={total._id}>
                  <th>{idx + 1}</th>
                  <td>{total.name}</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
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
