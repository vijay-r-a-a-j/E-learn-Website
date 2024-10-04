import React from 'react'
import Image from'../../assets/PeopleImage1.jpg'

const OurHistory = () => {
  return (
    <div className='bg-orange-200 h-screen py-20 px-32'>
        <div className='flex gap-20'>
          <div>
            <img className='w-[400px] h-[500px] rounded-t-full rounded-b-full'src={Image}/>
          </div>
          <div className='my-auto'>
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