import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

    const {currency, deliveryFee, cartAmount} = useContext(ShopContext)

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={"cart"} text2={"total"}/>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {cartAmount()}.00</p>
            </div>

            <hr />

            <div className='flex justify-between'>
                <p>Shopping</p>
                <p>{currency} {deliveryFee}.00</p>
            </div>
            <hr />

            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {cartAmount() === 0 ? 0: cartAmount() + deliveryFee}.00</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal