import React from "react";
import "../css/homePage.css";
export default function HeroFirstCard({ item }) {
  return (
    <>
      <div className="w-[300px] aspect-video rounded-lg shadow flex flex-col items-center justify-center pl-5 herofirstcard">
        <div className="flex flex-col items-center p-8 rounded-md w-full sm:px-12  ">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Dubai</h2>
            <p className="text-sm text-gray-400">March 13</p>
          </div>
          <div className="w-32 h-32 p-6 text-gray-400 fill-current  text-7xl">
            {item.icon}
          </div>
          <div className="mb-2 text-1xl  text-center">
            <p className="text-gray-400">{item.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
