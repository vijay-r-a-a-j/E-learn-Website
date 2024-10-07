import React from 'react'
import Image1 from "../../assets/PeopleImage2.jpg"
import Image2 from "../../assets/PeopleImage3.jpg"
import Image3 from "../../assets/FemaleImage2.jpg"

const PeopleImage = () => {
    const Images = [
        Image1,Image2,Image3
    ]
   
  return (
    <div className='mt-10'>
        <div className='flex gap-3 md:gap-16 lg:gap-10 w-full md:w-[80%] mx-auto justify-center align-center'>
           {Images.map((img,index)=>(
            <div className=' w-24 h-32 md:w-[200px] md:h-[300px] lg:w-[350px] lg:h-[450px]' key={index}>
                <img className ='w-full h-full rounded-t-full rounded-b-full' src={img}/>
            </div>
           ))}
        </div>
    </div>
  )
}

export default PeopleImage