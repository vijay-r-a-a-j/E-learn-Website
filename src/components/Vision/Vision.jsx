import React from 'react'
import Image1 from '../../assets/PeopleImage1.jpg'
import Image2 from '../../assets/PeopleImage2.jpg'
import Image3 from '../../assets/PeopleImage3.jpg'

const Vision = () => {
  return (
    <div className='mt-60 py-20'>
        <div className=' w-[80%] mx-auto'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Educating, Inspiring,<br/>& Transforming</h1>
            <img className='w-[200px] h-[300px] rounded-t-full rounded-b-full' src={Image1}/>
        </div>
        <div className='flex'>
            <img className='w-[300px] h-[400px] rounded-t-full rounded-b-full' src={Image2}/>
            <div className='ml-10  my-auto'>
                <h1 className='text-5xl font-bold mb-5'>Our Vision</h1>
                <p className='text-xl font-semibold'>Empowering young women, changing the world.<br/>Cultivating the potential of young women<br/>through a challenging,holistic education rooted<br/>in the tradition.</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='my-auto'>
                <h1  className='text-5xl font-bold mb-5'>Our Mission</h1>
                <p className='text-xl font-semibold'>Cultivating the potential of young women<br/>through a challeging,holistic education rooted<br/>in the Ursuline tradition.</p>
            </div>
            <div >
            <img className='w-[400px] h-[250px] rounded-l-full rounded-r-full' src={Image3}/>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Vision;