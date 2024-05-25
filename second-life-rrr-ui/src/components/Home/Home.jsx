import React, { useEffect } from "react";
import Slidebar from "../Slidebar";
import CarouselHome from "./CarosuelHome";
import TypeWriter from "./TypeWriter";
import HeroFirst from "./HeroFirst";
import HeroSecond from "./HeroSecond";
export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <div>
        {/* <CarouselHome /> */}
        <TypeWriter />
        <HeroFirst />
        <HeroSecond />
      </div>
    </>
  );
}
