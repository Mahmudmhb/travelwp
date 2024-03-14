import {
  FaBook,
  FaBookOpen,
  FaHamburger,
  FaHome,
  FaItunes,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import useSecureAxios from "../../UseProvider/UseSecureAxios/useSecureAxios";
import { useEffect, useState } from "react";
import Halmate from "../../Sheard/Halmate";

const Deshboard = () => {
  const { user, handleLogOut } = useAuth();
  const [users, setUsers] = useState([]);
  const axiosSecure = useSecureAxios();
  console.log("dash-user", user);

  const handleSignOut = () => {
    handleLogOut().then().catch();
  };

  useEffect(() => {
    const res = axiosSecure.get(`/users/${user?.email}`).then((res) => {
      setUsers(res.data);
    });
    // console.log(res.data);
  }, [axiosSecure, user]);
  return (
    <div>
      <Halmate title={"Deshboard"} name={"travelwp"} />
      <div className="flex ">
        <div className="w-72 bg-[#d1a054]  text-2xl h-screen uppercase">
          <ul className="menu p-5">
            {users.map((customar) => (
              <div key={customar._id}>
                {customar.role === "Admin" && (
                  <>
                    <li className="text-2xl">
                      <NavLink to="/deshboard/adminProfile">
                        <FaHome></FaHome> Admin Home
                      </NavLink>
                    </li>
                    <li className="text-2xl">
                      <NavLink to="/deshboard/manageusers">
                        <FaList></FaList> manage Users
                      </NavLink>
                    </li>
                    <li className="text-2xl">
                      <NavLink>
                        <FaItunes></FaItunes> add Packages
                      </NavLink>
                    </li>
                  </>
                )}
                {customar.role === "Tour Guide" && (
                  <>
                    <li className="text-2xl">
                      <NavLink to="/deshboard/touristprofile">
                        <FaHome></FaHome> My Profile
                      </NavLink>
                    </li>
                    <li className="text-2xl">
                      <NavLink to="/deshboard/MyAssignedTours">
                        <FaHome></FaHome> My Assigned Tours
                      </NavLink>
                    </li>
                  </>
                )}

                {customar && (
                  <>
                    <li className="text-2xl">
                      <NavLink to="/deshboard/mywishlist">
                        <FaShoppingCart></FaShoppingCart> My Wishlist
                      </NavLink>
                    </li>
                    <li className="text-2xl">
                      <NavLink>
                        <FaBook></FaBook> add review
                      </NavLink>
                    </li>
                    <li className="text-2xl">
                      <NavLink to="/deshboard/turistbooking">
                        <FaBookOpen></FaBookOpen> My Booking
                      </NavLink>
                    </li>
                  </>
                )}
              </div>
            ))}

            <div className="divider"></div>
            <li className="text-2xl">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li className="text-2xl">
              <NavLink to="/allpackages">
                <FaHamburger></FaHamburger> All Packages
              </NavLink>
            </li>
            <li className="text-2xl">
              <NavLink to="/blogs">
                <FaShoppingBag></FaShoppingBag> Bolgs
              </NavLink>
            </li>
            <li className="text-2xl">
              <button onClick={handleSignOut}>LogOut</button>
            </li>
          </ul>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshboard;
