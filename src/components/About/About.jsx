import React from 'react'
import Image1 from '../../assets/FemaleImage5.jpg'
import Image2 from '../../assets/FemaleImage1.jpg'

const About = () => {
  return (
    <div className=' w-full lg:w-[80%] mx-auto text-center lg:text-start' id="about">
        <div className='flex flex-wrap lg:flex-nowrap my-20 justify-center'>
             <div className='my-auto'>
                  <button className='px-5 py-2 border border-black font-bold mb-5 rounded-full hover:bg-black hover:text-white'>A TUTION FREE PRIVATE SCHOOL</button>
                  <h1 className='text-5xl font-bold mb-5'>An Exceptional<br/>Education</h1>
                  <p className=' font-semibold'>Serivam Girls Academy is the only tution-free private School for<br/>
                  girls from under-resourced families in Delaware.Serviam's<br/>
                  mission is to provide quality education to 60 undeserved middle <br/>
                  school girls in grades 5th to 8th. Small classes 12-18students<br/>
                  are intentionally designed to foster a strong.</p>
             </div>
             <div className='justify-center'>
             <img className='mx-auto lg:ml-32 max-w-80 max-h-96 lg:max-w-[400px] lg:max-h-[600px] rounded-xl lg:rounded-t-full lg:rounded-b-full mt-10 lg:mt-0' src={Image1}/>
             </div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap my-20'>
            <div className='mx-auto'>
            <img className='max-w-80 max-h-96 lg:max-w-[400px] lg:max-h-[600px] rounded-xl lg:rounded-t-full lg:rounded-b-full mb-10 lg:mb-0' src={Image2}/>
            </div>
            <div className='my-auto mx-auto lg:ml-32'>
                <button className='px-5 py-2 border border-black font-bold mb-5 rounded-full  hover:bg-black hover:text-white'>LONG TERM SUCCESS</button>
                <h1  className='text-5xl font-bold mb-5'>Graduate Support<br/>Program</h1>
                <p  className=' font-semibold'>Serviam Girls Academy is committed to ensuring the long-term<br/>
                success of our students as they begin their journey beyond<br/>
                Serviam. Our Graduate support Program </p>
                
            </div>
        </div>
    </div>
  )
}

export default About