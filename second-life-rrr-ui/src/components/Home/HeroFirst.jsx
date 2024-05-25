import React from "react";
import HeroFirstCard from "./HeroFirstCard";

import { GrCertificate } from "react-icons/gr";
import { FaPeopleLine } from "react-icons/fa6";
import { MdOutlineDataThresholding } from "react-icons/md";

export default function HeroFirst() {
  const arr = [
    {
      icon: <GrCertificate />,
      text: "Authorized end destinations for all waste streams",
    },
    {
      icon: <FaPeopleLine />,
      text: "Professional & diverse core team",
    },
    {
      icon: <MdOutlineDataThresholding />,
      text: "Dignified & safe careers that have uplifted the socio-economic status of our field team",
    },
    {
      icon: <GrCertificate />,
      text: "Authorized end destinations for all waste streams",
    },
  ];
  return (
    <>
      <section
        className="flex flex-col justify-center  h-auto
      px-6 py-6 mx-auto sm:px-6  "
      >
        <div className="flex flex-wrap justify-center  gap-10">
          {arr.map((item, index) => (
            <HeroFirstCard key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
