import React from 'react'
import Image1 from '../../assets/FemaleImage5.jpg'
import Image2 from '../../assets/FemaleImage1.jpg'

const About = () => {
  return (
    <div className='w-[80%] mx-auto'>
        <div className='flex my-20'>
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
             <img className=' ml-32 w-[400px] h-[500px] rounded-t-full rounded-b-full' src={Image1}/>
             </div>
        </div>
        <div className='flex my-20'>
            <div>
            <img className=' w-[400px] h-[500px] rounded-t-full rounded-b-full' src={Image2}/>
            </div>
            <div className='my-auto ml-32'>
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