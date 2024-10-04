import React from 'react'

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
    <div className='flex justify-between lg:mx-32 md:mx-10 mx-5 pt-7'>
        <div>
             <h2 className='font-bold text-3xl'>E-learn</h2>
        </div>
        <div className='hidden lg:block'>
            <ul className='flex gap-10 mt-2 font-semibold'>
            {menuItems.map((item,index)=>(
                <li key={index} >
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
            </ul>
        </div>
        <div>
            <button className='border border-gray-800 rounded-full px-8 py-2 font-semibold'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar