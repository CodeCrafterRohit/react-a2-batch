import { useState } from "react";
import toast from "react-hot-toast";
import { FaLock, FaUser } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";

let ToggleAndNotify = () => {
  //! state for password toggle
  let [showPassword, setShowPassword] = useState(false);

  //! togglePassword -> on and off
  let togglePassword = () => {
    setShowPassword(!showPassword);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    // toast.success("Form Submitted");
    // toast.error("User already exist!");
    // toast("Hello");
    // toast(
    //   "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
    //   {
    //     duration: 6000,
    //   },
    // );
    toast("Hello Darkness!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <article className="w-1/4 bg-white shadow-2xl rounded-lg">
        <header className="text-center p-5 bg-blue-600 rounded-t-lg">
          <h1 className="text-2xl font-semibold text-white">
            Login Welcome Back User!
          </h1>
        </header>
        <main className="w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2 p-6"
          >
            <div className="w-full  flex flex-col gap-2 relative">
              <label
                htmlFor="email"
                className="text-lg text-gray-600 font-semibold"
              >
                Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="py-2 pl-8 outline-none border border-gray-400 rounded-md focus:ring-1 focus:ring-blue-700 "
              />
              <span className="absolute top-12 left-2">
                <FaUser className="text-blue-600" />
              </span>
            </div>
            <div className="w-full  flex flex-col gap-2 relative">
              <label
                htmlFor="password"
                className="text-lg text-gray-600 font-semibold"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="py-2 pl-8 outline-none border border-gray-400 rounded-md focus:ring-1 focus:ring-blue-700 "
              />
              <span className="absolute top-12 left-2">
                <FaLock className="text-blue-600" />
              </span>
              {/* For Eye icons */}
              <span
                onClick={togglePassword}
                className="absolute right-2 top-12 text-lg text-blue-600 cursor-pointer hover:text-blue-700 transition"
              >
                {showPassword ? <IoEye /> : <IoEyeOff />}
              </span>
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <button className="bg-blue-600 py-2 px-20 rounded-lg text-white font-semibold cursor-pointer hover:scale-105 transition-all duration-100 ease-linear">
                Login User
              </button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default ToggleAndNotify;
