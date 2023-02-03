import React from "react";
import img from './images/image.jpg'

function EmailSubscribe() {
  return (
   
    <div>
    {/* BackGround Container */}
      <div className="flex items-center justify-center h-screen bg-zinc-700">
      {/* Card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
      {/* Flex Container */}
      <div className="flex flex-col md:flex-row rounded-l-xl">
      {/* image */}
      <img src={img} className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"/>
     {/* content */}
     <div className="p-6 md:p-12">
      <h2 className="text-xl font-medium text-center text-white md:text-left">Get diet and fit tips in your inbox</h2>
      <p className="text-white max-w-xs text-xs leading-6 tracking-wide text-center">Eat better and exercise better. Sign up for the Diet and fitness newsletter</p>
     <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
     <input placeholder="Enter your Email Address" className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"/>
     <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500 font-medium">Subscribe</button>
     </div>
     </div>
     {/* content end */}
      </div>
      {/* Flex Container end */}
      </div>
       {/* Card end */}
      </div>
      {/* BackGround Container end */}
    </div>
  );
}

export default EmailSubscribe;
