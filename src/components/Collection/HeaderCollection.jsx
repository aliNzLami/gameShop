import React from 'react'
import Title from './Title'

function HeaderCollection({ text1, text2, description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod perferendis"}) {
  return (
    <div className="showSmoothly">
        <div className='text-center text-30'>
            <Title text1={text1} text2={text2} />
        </div>
        <p className='w-3/4 m-auto text-18 sm:text-sm md:text-base text-gray-400 text-center mb-15'>
            { description }
        </p>
    </div>
  )
}

export default HeaderCollection