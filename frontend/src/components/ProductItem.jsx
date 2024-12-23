import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, description }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link onClick={()=>window.scroll(0,0)} to={`/product/${id}`} className="text-gray-800 hover:shadow-xl">
      <div className="overflow-hidden w-full h-72">
        
        <img src={image[0]} alt="" className="hover:scale-105 w-full  object-cover  duration-300 " />
        
      </div>
        <div className="p-2 grid">
          <p className=" text-sm font-semibold">{name}</p>
          <p className="text-sm font-medium text-green-600">
            {currency} {price}
          </p>
        </div>
    </Link>
  );
};

export default ProductItem;
