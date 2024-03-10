import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginModel = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="uppercase"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* contact form  */}
          <div className=" p-5">
            <h1 className="text-center text-2xl my-5">Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email"
                className="py-3 px-2 w-full border shadow-xl rounded-xl"
                {...register("email")}
              />
              <input
                type="password"
                placeholder="Password"
                className="py-3 px-2 w-full my-2 border shadow-xl rounded-xl"
                {...register("password")}
              />

              <input
                type="submit"
                value="Login"
                className="w-full border-[#ffb300] text-xl py-2 my-5 rounded-lg  bg-[#ffb300] shadow-xl  text-white hover:text-xl duration-700"
              />
            </form>
            <h1>
              New here?{" "}
              <span className="text-[#ffb300]">
                <Link>Create a New Account</Link>
              </span>{" "}
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
      </dialog>
    </div>
  );
};

export default LoginModel;
