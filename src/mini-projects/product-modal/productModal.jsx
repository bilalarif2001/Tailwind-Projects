import React from "react";
import Headphone from "./images/headphone.png";
import imgWeight from "./images/weight.png";
import imgHeart from "./images/heart.png";

function ProductModal() {
  return (
    /* Background Container */
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      {/* Card */}
      <div className="bg-white font-medium rounded-lg flex flex-col shadow-2xl p-6 m-3 space-y-10 md:flex-row md:space-y-0 md:space-x-10">
        {/* Img Div */}
        <div>
          <img
            src={Headphone}
            className="w-60 hover:scale-105 duration-200 mx-auto"
          />
        </div>{/* Wrapping Image in div to avoid stretching of Image */}
        {/* Img Div End*/}

        {/* Content */}
        <div className="flex flex-col space-y-6">
          {/* Label Container */}
          <div className="flex-col mb-4 space-y-3 text-center md:text-left">
            <p className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
              Free Shipping
            </p>
              {/* Title */}
            <p className="max-w-sm text-2xl font-medium">
              Razer Karaken Kitty V2 Pro Gaming Headset Quartz
            </p>
            {/* Title End*/}
          </div>
          {/* Label Container End */}
          {/* Price Container */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <p className="line-through">$799</p>
            <p className="text-5xl font-bold">$599</p>
            <p className="text-sm font-light text-gray-400">
              This offer is valid until April 3rd or as long as stock lasts!
            </p>
          </div>
          {/* Price Container End */}

          {/* Add to Cart Button */}
          <div className="group">
            <button className="w-full text-white border-b-8 border-b-blue-700 rounded-lg py-4 bg-blue-500 group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg duration-200">
              Add to Cart
            </button>
          </div>
          {/* Add to Cart Button End*/}

          {/* Stock */}
          <div className="flex items-center space-x-3 group">
            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping" />
            <div className="text-sm">50+ pcs. in stock</div>
          </div>
          {/* Stock End */}
          {/* Bottom Button */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
              <img src={imgWeight} alt="button" className="w-8" />
              <span>Add to Cart</span>
            </button>
            <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
              <img src={imgHeart} alt="button" className="w-8" />
              <span>Add to Wishlist</span>
            </button>
          </div>
          {/* Bottom Button End*/}
        </div>
        {/* Content End */}
        {/* Label Container End */}
        {/* Content End */}
      </div>
      {/* Card End */}
    </div>
  );
}

export default ProductModal;
