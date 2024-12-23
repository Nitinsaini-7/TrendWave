import React from "react";
import shoping from "../assets/frontend_assets/shopping-bag.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-800">
      <div className="mx-auto max-w-screen-xl py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-center lg:justify-start">

            <div className=" w-40 h-16 rounded-full flex items-center justify-center">
              <div className="bg-white bg-opacity-10 rounded-full gap-2 flex items-center justify-center p-2">
                <p className="text-black text-lg font-bold font-sans uppercase">
                  Trend <span className="text-[orange]">Wave</span>
                </p>
                <div className="flex items-center justify-center">
                  <img src={shoping} className="w-5" alt="" />
                </div>
              </div>
            </div>
            </div>

            <p className="mt-6 max-w-md mx-2 mb-5 text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              Elevate your style with effortless fashion. Discover trendy,
              high-quality clothing for every occasion, delivered to your
              doorstep. Shop smart, dress sharp!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-8">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-[orange]">COMPANY</p>

              <ul className="mt-4 space-y-4 text-sm grid">
                <Link
                  className="text-white transition hover:text-[orange]"
                  href="#"
                >
                  Company History
                </Link>

                <Link
                  className="text-white transition hover:text-[orange]"
                  href="#"
                >
                  Meet the Team
                </Link>

                <Link
                  className="text-white transition hover:text-[orange]"
                  href="#"
                >
                  Employee Handbook
                </Link>

                <Link
                  className="text-white transition hover:text-[orange]"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </Link>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-[orange]">Contact Us</p>

              <ul className="mt-4 space-y-4 text-sm grid">
                <Link
                  className="text-white transition hover:text-[orange]"
                  href="#"
                >
                  john@doe.com
                </Link>

                <Link
                  className="text-white transition hover:text-[orange]"
                  href="#"
                >
                  0123456789
                </Link>

                <Link className="text-white transition hover:text-[orange]">
                  Hapur, Uttar Pradesh, India
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-5">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white">
              <span className="block sm:inline">Developed By </span>

              <Link to={"https://personal-portfolio-nitin-saini.vercel.app/"}
                className="inline-block pt-2 font-bold transition hover:text-[orange]"
                href="#"
              >
                Nitin Saini
              </Link>
              <span> With 🧡</span>

             
            </p>

            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              &copy; 2024 TrendWave
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
