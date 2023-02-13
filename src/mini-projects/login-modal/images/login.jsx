import React from "react";
import img from "../images/image.jpg";
import facebook from "../images/facebook.png";
import google from "../images/google.png";

function LoginModal() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-100">
      {/* Card Container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* Left Side */}
        <div className="p-6 md:p-20">
          <h1 className="font-mono text-4xl font-extrabold mb-5">Log In</h1>
          <p className="max-w-sm mb-12 font-sans text-gray-600">
            Log In to your account to upload or download pictures, videos and
            music.
          </p>
          <input
            placeholder="Enter your Email address"
            className="placeholder:text-sm placeholder:font-sans p-5 w-full border border-gray-300 rounded-md"
          />

          <div className="flex flex-col items-center justify-between space-y-5 mt-6 md:flex-row md:space-y-0">
            <p className="font-sans text-cyan-700 font-medium">
              Forget Password
            </p>
            <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans fond-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-200">
              <span>Log In</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="border-b-2 p-5" />
          <p className="text-center p-4 text-gray-400">Or log in with</p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-3">
            <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 rounded-md py-2 w-full hover:-translate-y-0.5 transition duration-200">
              <img src={facebook} alt="" className="w-8" />
              <span>Facebook</span>
            </button>

            <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 rounded-md py-2 w-full hover:-translate-y-0.5 transition duration-200">
              <img src={google} alt="" className="w-8" />
              <span>Google</span>
            </button>
          </div>
        </div>
        {/* Left Side End */}
        {/* Right Side */}
        <img src={img} alt="Img" className="w-[430px] hidden md:block" />
        {/* Right Side End */}

        {/* Close button */}
        <div className="absolute group -top-4 right-4 p-2 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transitiion duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* Close button End */}
      </div>
      {/* Card Container End */}
    </div>
  );
}

export default LoginModal;
