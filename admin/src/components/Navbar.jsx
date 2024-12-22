import React from 'react'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between px-4'>
        <div className=" w-60 h-16 rounded-full flex items-center justify-center">
                  <div className="bg-black bg-opacity-5 rounded-full gap-2 flex items-center justify-center p-2">
                    <p className="text-black text-lg font-bold font-sans uppercase">
                      Trend <span className="text-[orange]">Wave</span>
                    </p>
                    <div className="flex items-center justify-center">
                     Admin Pannel
                    </div>
                  </div>
                </div>
        <button onClick={()=>setToken('')} className='bg-red-600 hover:bg-red-500 duration-200 cursor-pointer text-white rounded-full border-none px-4 p-2 '>Logout</button>
    </div>
  )
}

export default Navbar