import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex flex-1 flex-col-reverse gap-4 sm:flex-row">
          <div className="flex sm:flex-col sm:gap-0 gap-2 pb-2 overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-[25%] sm:w-full sm:mb-4 border border-gray-200 cursor-pointer flex-shrink-0"
              />
            ))}
          </div>

          <div className="w-full sm:w-[70%] ">
            <img src={image} alt="" className="w-full h-auto " />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium mt-2 text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className="pl-2">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-xl">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border rounded-full bg-slate-300 w-12 h-12 ${
                    item === size ? "border-orange-400 border-2" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black rounded-full text-white text-sm active:bg-gray-500 px-4 p-2"
          >
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-400 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery</p>
            <p>Easy return and exchange policy with in 7 days</p>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Discover a wide range of fashion-forward clothing that combines
            style, comfort, and quality. From trendy outfits to timeless
            essentials, we offer carefully curated pieces for every occasion.
            Whether you're looking for casual wear, formal attire, or something
            in between, our collection has something to suit your taste.
          </p>
          <p>
            Explore the latest designs, made with premium fabrics and crafted
            for a perfect fit. Each piece is selected to help you express your
            personal style effortlessly. Shop now and experience fashion like
            never before with our exclusive range of apparel designed to make
            you look and feel your best.
          </p>
        </div>
      </div>

      {/* disply related product */}
      <div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
