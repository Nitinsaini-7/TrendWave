import React from "react";
import { TypeAnimation } from "react-type-animation";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  
  return (
    <div className=" relative mt-24">
      <img
        src={assets.hero_img}
        alt=""
        className="w-full rounded-md object-cover md:h-full xl:h-[500px] "
      />
      {/* <div className="absolute inset-0  rounded-md"></div> */}
      <div  className=" absolute rounded-md  inset-0 flex pl-5 lg:pl-10 items-center "
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 16%, rgba(0,0,0,0) 100%)",
        }}>
        <div className="grid">
          <div>
            <p className="text-white text-3xl sm:text-6xl font-semibold normal-case">
              Welcome to,
            </p>
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-blue-500">
              <h2 className=" text-4xl sm:text-8xl font-bold py-1 ">
                Trend Wave
              </h2>
            </div>
          </div>

          <TypeAnimation
            className=" font-semibold text-2xl sm:text-4xl  text-white"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Style that speaks !",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Style that shines !",
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{}}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
