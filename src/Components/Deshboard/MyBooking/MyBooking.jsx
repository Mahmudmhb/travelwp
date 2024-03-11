import React, { useState } from "react";
import useAxiosPublic from "../../../UseProvider/useAxiosPublic/useAxiosPublic";
import Heading from "../../../Sheard/Heading/Heading";

const MyBooking = () => {
  const [bookings, setBooking] = useState([]);

  const axiosPublic = useAxiosPublic();
  const res = axiosPublic.get("/booking").then((res) => {
    setBooking(res.data);
  });
  // console.log(bookings);
  const totalPrice = bookings.reduce((total, item) => total + item.price, 0);

  return (
    <div className="w-5/6 mx-auto">
      <Heading heading={"My booking"}></Heading>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-2xl">
                <th></th>
                <th>Package Name</th>
                <th>Guide Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, indx) => (
                <tr key={booking._id}>
                  <th>{indx + 1}</th>
                  <td>{booking.bookingName}</td>
                  <td>{booking.gaideName}</td>
                  <td>{booking.date}</td>
                  <td>{booking.price}</td>
                  <td>{booking?.status}</td>
                  <td>
                    {booking.status === "Accepted" && (
                      <>
                        <button className="btn btn-primary w-full mx-auto">
                          Pay
                        </button>
                      </>
                    )}
                    {booking.status === "In Review" && (
                      <>
                        <button className="btn btn-primary w-full mx-auto">
                          Cancel
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button disabled className="btn btn-primary w-full mx-auto">
                      Apply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end gap-4">
          <h1>Total Amount: ${totalPrice} </h1>
          <div className="text-center my-5"></div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
