import React from "react";
import { Carousel } from "antd";

const CarouselHome = () => (
  <Carousel autoplay>
    <div>
      <div className="lg:h-[550px] h-72 relative">
        <img
          src={`${process.env.PUBLIC_URL}/slider-1.jpg`}
          className="w-full h-full object-cover filter blur-[1px]"
        />

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white   p-4 w-11/12 
        md:w-4/6 lg:w-3/6 text-center"
        >
          <div className="mb-4 font-bold text-lg">
            <span className="text-2xl md:text-4xl ">
              Get end to end waste management solutions that meet your ESG goals
            </span>
          </div>
          <ul className="list-disc list-inside text-left md:text-2xl mx-auto">
            <li>95% diversion from landfills</li>
            <li>On-site & off-site waste management solutions</li>
            <li>Zero waste certification</li>
          </ul>
          <div className="text-left pt-8">
            <button className="bg-customYellow   text-black text-1x font-medium  py-2 px-6 rounded-full ">
              Get a call back
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="lg:h-[550px] h-72 relative">
        <img
          src={`${process.env.PUBLIC_URL}/slider-2.jpg`}
          className="w-full h-full object-cover filter blur-[1px]"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white   p-4 w-11/12 
        md:w-4/6 lg:w-3/6 text-center"
        >
          <div className="mb-4 font-bold text-lg">
            <span className="text-2xl md:text-4xl ">
              Get end to end waste management solutions that meet your ESG goals
            </span>
          </div>
          <ul className="list-disc list-inside text-left md:text-2xl mx-auto">
            <li>95% diversion from landfills</li>
            <li>On-site & off-site waste management solutions</li>
            <li>Zero waste certification</li>
          </ul>
          <div className="text-left pt-8">
            <button className="bg-customYellow   text-black text-1xl font-medium py-2 px-4 rounded-full ">
              Get a call back
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="lg:h-[550px] h-72 relative">
        <img
          src={`${process.env.PUBLIC_URL}/slider-3.jpg`}
          className="w-full h-full object-cover filter blur-[1px]"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white   p-4 w-11/12 
        md:w-4/6 lg:w-3/6 text-center"
        >
          <div className="mb-4 font-bold text-lg">
            <span className="text-2xl md:text-4xl ">
              Get end to end waste management solutions that meet your ESG goals
            </span>
          </div>
          <ul className="list-disc list-inside text-left md:text-2xl mx-auto">
            <li>95% diversion from landfills</li>
            <li>On-site & off-site waste management solutions</li>
            <li>Zero waste certification</li>
          </ul>
          <div className="text-left pt-8">
            <button className="bg-customYellow   text-black text-1xl font-medium py-2 px-4 rounded-full ">
              Get a call back
            </button>
          </div>
        </div>
      </div>
    </div>
  </Carousel>
);
export default CarouselHome;
