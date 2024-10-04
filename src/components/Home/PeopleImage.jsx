import React from 'react'
import Image1 from "../../assets/PeopleImage1.jpg"
import Image2 from "../../assets/PeopleImage2.jpg"
import Image3 from "../../assets/PeopleImage3.jpg"

const PeopleImage = () => {
    const Images = [
        Image1,Image2,Image3
    ]
   
  return (
    <div className='mt-20 '>
        <div className='flex gap-10 w-[80%] mx-auto '>
           {Images.map((img,index)=>(
            <div className='w-[350px] h-[500px]' key={index}>
                <img className ='w-full h-full rounded-t-full rounded-b-full' src={img}/>
            </div>
           ))}
        </div>
    </div>
  )
}

export default PeopleImage