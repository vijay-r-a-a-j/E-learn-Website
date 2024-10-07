import React from 'react'

const Intro = () => {
  return (
    <div className='text-center mt-20 lg:mt-24'>
        <h1 className='text-5xl lg:text-6xl font-bold mb-5 lg:mb-10'>The best way to learn or<br/>practice a language</h1>
        <p className='font-semibold mb-5 lg:mb-10 mx-1'> Educating, Inspiring, & Transforming young women. A Tution-Free Private Middle School </p>
        <div >
            <button className='px-10 py-4 text-white bg-black font-bold rounded-full lg:mr-7'>Contact Us</button>
            <button className='px-10 py-4 border border-black font-bold rounded-full  hover:bg-black hover:text-white'>Apply Now</button>
        </div>
    </div>
  )
}

export default Intro