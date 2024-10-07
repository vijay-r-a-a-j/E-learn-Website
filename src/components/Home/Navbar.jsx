import React from 'react'
import { BsMenuButtonFill } from "react-icons/bs";

const Navbar = () => {
    const menuItems = [
        {
            name:"Home",
            link:"/home"
        },
        {
            name:"About",
            link:"/about"
        },
        {
            name:"Student Info",
            link:"/studentInfo"
        },
        {
            name:"Support",
            link:"/support"
        },
        {
            name:"Admissions",
            link:"/admission"
        }
    ]
  return (
    <div className='flex justify-between lg:mx-32 md:mx-10 mx-5 py-7'>
        <div>
             <h2 className='font-bold text-3xl'>E-learn</h2>
        </div>
        <div className='hidden lg:block'>
            <ul className='flex gap-5 font-semibold'>
            {menuItems.map((item,index)=>(
                <li className=' hover:bg-black hover:text-white px-5 py-2 rounded-lg' key={index} >
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
            </ul>
        </div>
        <div className='hidden lg:block'>
            <button className='border border-gray-800 rounded-full px-8 py-2 font-semibold  hover:bg-black hover:text-white'>Sign up</button>
        </div>
        <div className='block lg:hidden'>
         <button ><BsMenuButtonFill  className='w-8 h-8'/></button>
        </div>
    </div>
  )
}

export default Navbar