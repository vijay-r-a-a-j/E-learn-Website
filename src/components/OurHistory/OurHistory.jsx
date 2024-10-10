import React from 'react'
import Image from'../../assets/FemaleImage6.jpg'

const OurHistory = () => {
  return (
    <div className='bg-orange-200  lg:h-screen py-10 lg:py-20 lg:px-32' >
        <div className='flex flex-wrap lg:flex-nowrap gap-20' id="studentInfo">
          <div className='mx-auto'>
            <img className=' max-w-80 max-h-96 lg:max-w-[400px] lg:max-h-[600px] rounded-xl lg:rounded-t-full lg:rounded-b-full' src={Image}/>
          </div>
          <div className='mx-auto my-auto text-center lg:text-start'>
            <h1 className='text-5xl font-bold mb-5'>Our History and <br/>Core Values</h1>
            <p className=' font-semibold mb-5'>Our academy is part of a 45 year tradition of providing a high quality<br/>
            middle school education to adolescents with great potential but with <br/>limited resources. Part of a NativityMiguel network.</p>
            <p className=' font-semibold mb-5'>Our academy founded on the premise that the community would<br/>invest in an education that allows every child</p>
            <button className='border border-black py-3 px-8 rounded-full font-bold'>LearnMore</button>
          </div>
        </div>
    </div>
  )
}

export default OurHistory