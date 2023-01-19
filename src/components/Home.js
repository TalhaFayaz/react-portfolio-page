import React from 'react'
import hero from '../assets/hero.jpg'


const Home = () =>  {
  return (
    <div
    name="home"
    className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
  >
    <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-5xl sm:text-7xl font-bold text-white">
          Lorem Ipsum
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          I have 1 years of experience building and desgining Websites.
          Currently, I love to work on web application using technologies like
          React, Tailwind, wordpress, node.
        </p>
        <div>
        <button className='text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600'>
Portfolio
</button>
        </div>
      </div>
      <div>
        <img
          src={hero}
            
          className="rounded-2xl mx-auto w-2/3  object-fill"
        />
      </div>
    </div>
  </div>
  )
}

export default Home

