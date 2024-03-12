import { useState } from "react";
import useSecureAxios from "../../../UseProvider/UseSecureAxios/useSecureAxios";
import Heading from "../../../Sheard/Heading/Heading";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const axiosSecure = useSecureAxios();
  const [users, setUsers] = useState([]);
  const res = axiosSecure.get("/users").then((res) => {
    setUsers(res.data);
  });

  const HandleUpdate = (item) => {
    console.log(item);
  };

  return (
    <div>
      <h1>this is manage users</h1>

      <Heading heading={"All users"}></Heading>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Guide</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, indx) => (
                <tr key={user._id}>
                  <th>{indx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => HandleUpdate(user)} className="btn">
                      {" "}
                      Make Admin
                    </button>
                  </td>
                  <td>
                    <button onClick={() => HandleUpdate(user)} className="btn">
                      {" "}
                      Make Guide
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

export default ManageUsers;
