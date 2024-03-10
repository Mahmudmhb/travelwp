import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Heading from "../../Sheard/Heading/Heading";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center w-5/6 mx-auto my-20">
      <div className=" p-5">
        <Heading heading={"Login Form"}></Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            className="py-3 px-2 w-full border  my-2 shadow-xl rounded-xl"
            {...register("email")}
          />

          <input
            type="password"
            placeholder="Password"
            className="py-3 px-2 w-full my-2 border shadow-xl rounded-xl"
            {...register("password")}
          />

          <button
            type="submit"
            className="w-full border-[#ffb300] text-xl py-2 my-5 rounded-lg  bg-[#ffb300] shadow-xl  text-white hover:text-xl duration-700"
          >
            Login
          </button>
        </form>
        <h1>
          NEW HERE?
          <Link to="/register">
            <span className="text-[#ffb300]">CREATE A NEW ACCOUNT</span>
          </Link>
        </h1>
        <div className="flex gap-5 justify-center my-5">
          <button>
            <FaGoogle className="text-2xl duration-300 hover:text-[#ffb300]" />
          </button>
          <button>
            <FaFacebook className="text-2xl duration-300 hover:text-[#ffb300]" />
          </button>
          <button>
            <FaGithub className="text-2xl duration-300 hover:text-[#ffb300]" />
          </button>
        </div>
      </div>
      <div className=" ">
        <img
          src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-6-m.jpg"
          alt=""
          className="w-[600px] rounded-full border-8 border-[#ffb300]"
        />
      </div>
    </div>
  );
};

export default Login;
