import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showfilter, setShowfilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if(showSearch && search){
      productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productCopy);
  };

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();

    switch (sortType) {
      case "low-to-high":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-to-low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;  
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (

    <div className="py-5">
    <div className="text-center">
      <Title text1={"All"} text2={"Collections"} />
    </div>
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 sm:p-10 p-5 border-2">
      {/* filter options */}
      <div className="min-w-60">
        <p className="my-2 text-lg flex items-center uppercase cursor-pointer gap-2">
          filter
          <img
            onClick={() => setShowfilter(!showfilter)}
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden rotate-90 ${showfilter ? "-rotate-90" : ""}`}
          />
        </p>

        {/* category filter */}
        <div
          className={`border border-gray-400 rounded-md pl-5 py-3 mt-6 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm mb-3 font-medium uppercase">categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* subcatogry filter */}
        <div
          className={`border border-gray-400 rounded-md pl-5 py-3 my-5 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm mb-3 font-medium uppercase">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwere
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwere
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              winterwere
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1 ">
        <div className="flex justify-end text-base sm:text-2xl mb-4">
          

          {/* product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border p-2 rounded-md border-gray-300 text-sm px-2">
            <option value="relavant">Sort by: Relavant</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* map the product */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              
            />
          ))}
        </div>
      </div>
    </div>

    </div>
  );
};

export default Collection;
