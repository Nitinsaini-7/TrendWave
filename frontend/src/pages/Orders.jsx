import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {

  const {backendUrl, token, currency} = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async ()=>{
    try {
      if(!token){
        return null;
      }

      const response = await axios.post(backendUrl+'/api/order/userorders', {}, {headers:{token}}) 
      
      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.paymeny
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
        
      }
      

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"My"} text2={"Order"}/>
      </div>

      <div>
        {
          orderData.map((item, index)=>(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-5 text-sm'>
                <img src={item.image[0]} alt="" className='w-16 sm:w-20'/>
                <div>
                  <p className='text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-4 mt-2 text-base text-gray-700'>
                    <p className='text-left'>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size} </p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'> {new Date(item.date).toDateString()} </span></p>
                  <p className='mt-2'>Payment: <span className='text-gray-400'> {item.paymentMethod} </span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'> {item.status} </p>
                </div>
                <button onClick={loadOrderData} className='border px-4 text-black text-sm p-2 rounded-full'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders