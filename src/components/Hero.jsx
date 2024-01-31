import React from 'react'
import heroVid from '../assets/earth.mp4'

function Hero() {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video className='object-cover h-full w-full absolute -z-10' src={heroVid} autoPlay loop muted />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>Empower Your Business</h1>
        <h1 className='py-2'>with <span className='text-[var(--primary-blue)]'>Artificial Intelligence</span></h1>
        <p className='text-xl py-4'>Empower your productivity with Aleph Null's AI-powered tools.</p>
        <div>
          <button className='m-2'>Test</button>
          <button className='m-2 bg-transparent'>Test2</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'>maybe we need some text here!</p>
      </div>
    </div>
  )
}

export default Hero