import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <div className="w-full h-52  flex flex-col items-center justify-center">
      <div className="font-bold text-3xl md:text-5xl flex items-center justify-center pt-2 text-customYellow uppercase">
        <Typewriter
          options={{
            strings: [
              "Hello, world!",
              "Welcome to my website!",
              "Enjoy your stay!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="font-bold text-lg md:text-2xl flex justify-center pt-5 text-[#22631B] w-full px-5 md:w-2/3 lg:w-1/2">
        <p className="text-center">
          Green isn't just our color, it's our promise to you — and your
          satisfaction is 100% guaranteed.
        </p>
      </div>
    </div>
  );
}
