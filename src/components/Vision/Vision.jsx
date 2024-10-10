import React from 'react'
import Image1 from '../../assets/PeopleImage1.jpg'
import Image2 from '../../assets/PeopleImage2.jpg'
import Image3 from '../../assets/PeopleImage3.jpg'

const Vision = () => {
  return (
    <div className='mt-10 pt-32 lg:pt-60 pb-20'>
        <div className=' w-[80%] mx-auto'>
        <div className=' hidden lg:flex justify-between '>
            <h1 className='text-3xl  lg:text-5xl font-bold'>Educating, Inspiring,<br/>& Transforming</h1>
            <img className='w-[200px] h-[300px] rounded-t-full rounded-b-full' src={Image1}/>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap '>
            <img className='w-32 h-36 lg:w-[300px] lg:h-[400px] rounded-t-full rounded-b-full mx-auto lg:mx-0' src={Image2}/>
            <div className='lg:ml-10  my-auto text-center lg:text-start'>
                <h1 className='text-4xl lg:text-5xl font-bold mb-5'>Our Vision</h1>
                <p className='lg:text-xl font-semibold'>Empowering young women, changing the world.<br/>Cultivating the potential of young women<br/>through a challenging,holistic education rooted<br/>in the tradition.</p>
            </div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap justify-between text-center lg:text-start mt-10 lg:mt-0'>
            <div className='my-auto order-2 lg:order-1'>
                <h1  className='text-5xl font-bold mb-5'>Our Mission</h1>
                <p className='text-xl font-semibold'>Cultivating the potential of young women<br/>through a challeging,holistic education rooted<br/>in the Ursuline tradition.</p>
            </div>
            <div className='order-1 lg:order-2 mx-auto lg:mx-0'>
            <img className='w-36 h-28 lg:w-[400px] lg:h-[250px] rounded-l-full rounded-r-full' src={Image3}/>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Vision;