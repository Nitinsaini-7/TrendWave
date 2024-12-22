import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    
    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"Latest"} text2={"Collection"}/>
            <p className='w-4/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Step into style with our newest arrivals, where fashion meets comfort. Our latest collection is thoughtfully curated to keep you ahead of the trends with versatile pieces perfect for any occasion. From chic dresses and tailored jackets to cozy loungewear and everyday essentials, find the perfect look to elevate your wardrobe. Explore premium fabrics, bold patterns, and timeless designs crafted with care. Shop now and redefine your style with effortless elegance!
            </p>
        </div>
        
        {/* rendring product */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
            {
                latestProducts.map((item, index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection