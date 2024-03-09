import React from "react";

const LoginModel = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="uppercase"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        login/register
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
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Name"
                className="py-2 px-2 w-full my-2 border"
              />
              <input
                type="email"
                placeholder="Email"
                className="py-2 px-2 w-full border"
              />
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LoginModel;
