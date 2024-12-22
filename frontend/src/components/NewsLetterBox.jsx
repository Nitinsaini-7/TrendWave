import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }
    
  return (
    <div className='text-center mt-5'>
        <p className='text-2xl font-medium text-gray-800 capitalize'>subscribe now and get 20% off</p>
        
        <form onSubmit={onSubmitHandler} className='w-full rounded-full sm:w-1/2 flex items-center gap-4 mx-auto my-6 border pl-3'>
            <input type="text" className='w-full sm:flex-1 outline-none' placeholder='Enter your mail'/>
            <button type='submit' className='p-2 rounded-full uppercase bg-black text-white px-4'>subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox