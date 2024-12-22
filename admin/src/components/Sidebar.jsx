import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/admin_assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[20%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-xl'>
            <NavLink to="/add" className="flex items-center gap-4 border border-gray-300 border-r-0 px-3 py-2 rounded-l" >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add item</p>
            </NavLink>

            <NavLink to="/list" className="flex items-center gap-4 border border-gray-300 border-r-0 px-3 py-2 rounded-l" >
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List item</p>
            </NavLink>

            <NavLink to="/orders" className="flex items-center gap-4 border border-gray-300 border-r-0 px-3 py-2 rounded-l" >
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Order item</p>
            </NavLink>

            <NavLink to="/contact-data" className="flex items-center gap-4 border border-gray-300 border-r-0 px-3 py-2 rounded-l" >
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Contact Data</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar