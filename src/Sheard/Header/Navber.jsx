import { FaClock, FaLocationArrow, FaPhoneVolume } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import LoginModel from "../../Components/Model/LoginModel";
import useAuth from "../../Hooks/useAuth/useAuth";
// import useQueryUser from "../../UseProvider/useQuery/useQuery";
// import useSecureAxios from "../../UseProvider/UseSecureAxios/useSecureAxios";
// import { useState } from "react";

const Navber = () => {
  const { user } = useAuth();
  // const [users, setUsers] = useState([]);
  // console.log("nav-user", user);

  // console.log(users.role);
  // const [users] = useQueryUser();
  // const axiosSecure = useSecureAxios();
  // const handle = async () => {
  //   const res = await axiosSecure.get(`/users/${user?.email}`);
  //   // console.log(res.data);
  //   setUsers(res.data);
  // };
  // handle();

  const nav = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/community"> Community</NavLink>
      </li>
      <li>
        <NavLink to="/allpackages"> All Packages</NavLink>
      </li>
      <li>
        <NavLink to="/aboutus"> About Us</NavLink>
      </li>
      <li>
        <NavLink to="/blogs"> Blogs</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <Link to="deshboard/touristprofile">Deshboard</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <div className=" gap-3">
              <LoginModel></LoginModel>
            </div>
          </li>
          <li>
            <NavLink to="/register"> Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="border-b-2">
      <div className="bg-[#414b4f]">
        <div className="md:flex hidden items-center justify-between w-5/6 mx-auto h-12 text-white">
          <h1 className="flex items-center gap-3">
            <FaClock />
            Mon - Sat 8.00 - 18.00
          </h1>
          <div className="flex items-center gap-3">
            <h1 className="flex items-center gap-3">
              <FaPhoneVolume /> 0123456789
            </h1>
            <h1 className="flex items-center gap-3">
              <FaLocationArrow /> 1010 Moon ave, New York, NY US
            </h1>
          </div>
        </div>
      </div>
      <div className="navbar    w-5/6 font-bold mx-auto uppercase text-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn z-10 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <img
            src="https://travelwp.physcode.com/wp-content/uploads/2016/09/logo_sticky.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        {user?.email && (
          <>
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL}
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <h1>{user.displayName}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
