import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import shooping from "../assets/frontend_assets/shopping-bag.png";

const navData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Collection",
    link: "/collection",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, cartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-white shadow-md fixed w-full top-0 left-0 z-40">
      <div className="flex items-center justify-between  font-medium">
        <div className=" w-40 h-16 rounded-full flex items-center justify-center">
          <div className="bg-black bg-opacity-5 rounded-full gap-2 flex items-center justify-center p-2">
            <p className="text-black text-lg font-bold font-sans uppercase">
              Trend <span className="text-[orange]">Wave</span>
            </p>
            <div className="flex items-center justify-center">
              <img src={shooping} className="w-5" alt="" />
            </div>
          </div>
        </div>

        <ul className="hidden sm:flex gap-5 uppercase text-gray-700">
          {navData.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="flex flex-col items-center gap-1"
            >
              <p>{item.name}</p>
              <hr className="w-2/4 border-none h-1 bg-[orange] hidden" />
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt=""
            className="w-5 cursor-pointer"
          />

          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer"
            />

            {/* dropdown menu */}
            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu left-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-gray-500">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Order
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt=""
              className="w-5 min-w-5 cursor-pointer"
            />
            <span className="inline-flex absolute -right-1 -bottom-1 leading-4 w-4 text-center text-xs items-center justify-center bg-red-500 aspect-square text-white rounded-full">
              {cartCount()}
            </span>
          </Link>

          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt=""
            className="w-5 cursor-pointer sm:hidden"
          />
        </div>
      </div>

      {/* mobile view navbar */}

      <div
        className={`absolute top-0 right-0 bottom-0 h-screen overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-300 space-y-2">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 p-3"
          >
            <img src={assets.dropdown_icon} alt="" className="w-4 " />
          </div>
          {navData.map((item, index) => (
            <NavLink
              onClick={() => setVisible(false)}
              to={item.link}
              key={index}
              className="py-3 text-black bg-gray-100 text-center "
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
