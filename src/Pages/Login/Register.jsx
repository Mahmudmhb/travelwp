import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Heading from "../../Sheard/Heading/Heading";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { handleRegisterWithEmailAndPass, handleUpdate } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const password = data.password;
    const Photourl = data.photourl;
    const email = data.email;
    handleRegisterWithEmailAndPass(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdate(name, Photourl)
          .then((result) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${result.user.displayName} SuccessFully Register !!`,
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.message}  !!`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center w-5/6 mx-auto my-10">
      <div className=" ">
        <img
          src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-6-m.jpg"
          alt=""
          className="w-[800px] rounded-full border-8 border-[#ffb300]"
        />
      </div>
      <div className=" p-5">
        <Heading heading={"Register Form"}></Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            className="py-3 px-2 w-full  my-2 border shadow-xl rounded-xl"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="py-3 px-2 w-full border  my-2 shadow-xl rounded-xl"
            {...register("email")}
          />
          <input
            type="text"
            placeholder="Photo Url"
            className="py-3 px-2 w-full border shadow-xl rounded-xl"
            {...register("photourl")}
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
            Register
          </button>
        </form>
        <h1>
          Already registered?
          <Link to="/login">
            {" "}
            <span className="text-[#ffb300]">Go to log in</span>
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
    </div>
  );
};

export default Register;
