import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {navigate, backendUrl, token, cartItems, setCartItems, cartAmount, products, deliveryFee, } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data=>({...data,[name]:value}))
  }

  const initPay = (order) => {
    const options = {
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency:order.currency,
      name:'Order Payment',
      description:'Order Payment',
      order_id:order.id,
      receipt:order.receipt,
      handler:async(response)=>{
        // console.log(response);
        try {
          const {data} = await axios.post(backendUrl+'/api/order/verifyRazorpay',response,{headers:{token}})
          if(data.success){
            navigate('/orders')
            setCartItems({})
          }
        } catch (error) {
          // console.log(error);
          toast.error(error)
          
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const onSubmitHandler = async (event)=>{
    event.preventDefault()
    try {
      let orderItems = []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product=>product._id === items))
            if(itemInfo){
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo)
            }
          }
        }
      }
     let orderData = {
      address: formData,
      items: orderItems,
      amount: cartAmount() + deliveryFee
     }

     switch(method){
      // API call for COD
      case 'cod':
        const response = await axios.post(backendUrl+'/api/order/place', orderData,{headers:{token}});
        
        if(response.data.success){
          setCartItems({})
          navigate('/orders')
        }else{
          toast.error(response.data.message)
        }
        break;

        case 'stripe':
        const responseStripe = await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{token}})
        if(responseStripe.data.success){
          const {session_url} = responseStripe.data
          window.location.replace(session_url)
        }else{
          toast.error(responseStripe.data.message)
        }

        break;

        case 'razorpay':
        const responseRazorpay = await axios.post(backendUrl+'/api/order/razorpay', orderData, {headers:{token}})
        if(responseRazorpay.data.success){
          initPay(responseRazorpay.data.order);
          
        }

        default:
          break;
     }

    } catch (error) {
      // console.log(error);
      toast.error(error.message)
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"delivery"} text2={"infornation"} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            value={formData.firstName}
            name="firstName"
            required
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
          <input
            onChange={onChangeHandler}
            value={formData.lastName}
            name="lastName"
            required
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>
        <input
            onChange={onChangeHandler}
            value={formData.email}
            name="email"
          type="email"
            required
          placeholder="Email"
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
        <input
            onChange={onChangeHandler}
            value={formData.phone}
            name="phone"
            required
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
        <input
            onChange={onChangeHandler}
            value={formData.street}
            name="street"
            required
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            value={formData.city}
            name="city"
            required
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
          <input
            onChange={onChangeHandler}
            value={formData.state}
          name="state"
            required
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>{" "}
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            value={formData.zipcode}
            name="zipcode"
            type="number"
            required
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
          <input
            onChange={onChangeHandler}
            value={formData.country}
            name="country"
            type="text"
            required
            placeholder="Country"
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>
      </div>
      {/* right */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-10">
          <Title text1={"Payment"} text2={"Method"} />

          {/* paymant */}
          <div className="flex gap-4 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-4 h-4 border rounded-full ${
                  method === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-4 h-4 border rounded-full ${
                  method === "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-4 h-4 border rounded-full ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-gray-700 text-sm font-medium mx-4">
                Cash on delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white p-2 px-8">Place Order</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
