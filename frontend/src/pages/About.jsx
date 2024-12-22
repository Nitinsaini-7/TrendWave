import React from "react";
import Title from "../components/Title";
import about from "../assets/frontend_assets/about.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className=" flex items-center justify-center py-8">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img
                src={about}
                alt="About Us"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Welcome to{" "}
                <span className="font-semibold text-[orange]">Trend Wave</span>, your
                ultimate destination for stylish and quality clothing. We
                believe in empowering individuals through fashion that fits
                every personality and occasion.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our mission is to offer a curated collection of trendy,
                sustainable, and affordable apparel that inspires confidence and
                embraces diversity. Whether you're dressing for work, play, or
                special moments, we’ve got you covered.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At the heart of our business lies a commitment to exceptional
                customer service, fast shipping, and an easy online shopping
                experience. Explore our collection and find your perfect style
                today.
              </p>

              <Link to={"/collection"} onClick={()=>window.scroll(0,0)} className="bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
