import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-[orange] text-4xl font-medium uppercase'>{text1} <span className='text-gray-700 '>{text2}</span> </p>
        <p className='w-8 sm:w-12 h-1 bg-gray-700'></p>
    </div>
  )
}

export default Title