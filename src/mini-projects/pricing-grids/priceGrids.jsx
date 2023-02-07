import React from "react";
import check from "./images/check.svg";

function PriceGrids() {
  return (
    /* Background container */
    <div className="bg-slate-800 min-h-screen flex justify-center items-center">
      {/* Card Container*/}
      <div className="flex flex-col text-white space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        {/* Card 1*/}
        <div className="rounded-xl bg-slate-700">
          {/* Upper Container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <p className="text-center uppercase">Basic</p>
            <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 className="mt-2 text-center">$1.99/Month</h3>

            <div className="flex justify-center">
              <button className="px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200">
                Purchase
              </button>
            </div>
          </div>
          {/* Upper Container End */}
          <div className="border-t border-slate-700"></div> {/* Border */}
          {/* Lower Container */}
          <div className="mx-3 mb-3 p-8 rounded-b-xl bg-slate-800">
            {/* List container */}
            <div className=" flex flex-col space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">100 GB of storage</p>
              </div>
              {/* List Item 1 end */}
              {/* List Item 2 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">Option to add members</p>
              </div>
              {/* List Item 2 end */}
              {/* List Item 3 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">Extra member benefits</p>
              </div>
              {/* List Item 3 end */}
            </div>
            {/* List container end */}
          </div>
          {/* Lower Container end */}
        </div>
        {/* Card 1 end */}
        {/* Card 2*/}
        <div className="rounded-xl bg-violet-600">
          {/* Upper Container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <p className="text-center uppercase">Standard</p>
            <h2 className="mt-10 font-serif text-5xl text-center">200GB</h2>
            <h3 className="mt-2 text-center">$3.99/Month</h3>

            <div className="flex justify-center">
              <button className="px-10 py-3 my-6 text-center border bg-violet-700 border-violet-700 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200">
                Purchase
              </button>
            </div>
          </div>
          {/* Upper Container End */}
          <div className="border-t border-slate-700"></div> {/* Border */}
          {/* Lower Container */}
          <div className="mx-3 mb-3 p-8 rounded-b-xl bg-slate-800">
            {/* List container */}
            <div className=" flex flex-col space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">200 GB of storage</p>
              </div>
              {/* List Item 1 end */}
              {/* List Item 2 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">Option to add members</p>
              </div>
              {/* List Item 2 end */}
              {/* List Item 3 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">Extra member benefits</p>
              </div>
              {/* List Item 3 end */}
            </div>
            {/* List container end */}
          </div>
          {/* Lower Container end */}
        </div>
        {/* Card 2 end*/}
        {/* Card 3*/}
        <div className="rounded-xl bg-slate-700">
          {/* Upper Container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <p className="text-center uppercase">Premium</p>
            <h2 className="mt-10 font-serif text-5xl text-center">1TB</h2>
            <h3 className="mt-2 text-center">$9.99/Month</h3>

            <div className="flex justify-center">
              <button className="px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200">
                Purchase
              </button>
            </div>
          </div>
          {/* Upper Container End */}
          <div className="border-t border-slate-700"></div> {/* Border */}
          {/* Lower Container */}
          <div className="mx-3 mb-3 p-8 rounded-b-xl bg-slate-800">
            {/* List container */}
            <div className=" flex flex-col space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">1000 GB of storage</p>
              </div>
              {/* List Item 1 end */}
              {/* List Item 2 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">Option to add members</p>
              </div>
              {/* List Item 2 end */}
              {/* List Item 3 */}
              <div className="flex justify-center">
                <img src={check} className="w-4" alt="svg-icon"></img>
                <p className="text-sm ml-1">Extra member benefits</p>
              </div>
              {/* List Item 3 end */}
            </div>
            {/* List container end */}
          </div>
          {/* Lower Container end */}
        </div>
        {/* Card 3 end */}
      </div>
      {/* Card Container end*/}
    </div>
  );
}

export default PriceGrids;
