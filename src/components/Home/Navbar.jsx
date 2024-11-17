import React, { useState } from 'react'
import { BsMenuButtonFill } from "react-icons/bs";
import Signup from './Signup';
import { FaXmark } from "react-icons/fa6"
import { Link } from 'react-scroll'

const Navbar = () => {
    const menuItems = [
        {
            link:"Home",
            path:"home"
        },
        {
            link:"About",
            path:"about"
        },
        {
            link:"Student Info",
            path:"studentInfo"
        },
        {
            link:"Support",
            path:"support"
        },
        {
            link:"Admissions",
            path:"admission"
        }
    ]
    
    const [menuOpen,setMenuOpen] =useState(false)
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const handleOpenSignup = () => setIsSignupOpen(true);
    const handleCloseSignup = () => setIsSignupOpen(false);
    const handleSuccess = () => {
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000); // Auto-hide after 3 seconds
    };

  return (
    <div className='flex justify-between lg:mx-32 md:mx-10 mx-5 py-7'>
        <div>
             <h2 className='font-bold text-3xl'>E-learn</h2>
        </div>
        <div className={`lg:my-0 my-10 absolute lg:static w-full lg:w-auto h-screen lg:h-auto bg-fuchsia-200 lg:bg-fuchsia-200 py-10 lg:py-0  pr-10 lg:pr-0 rounded-xl lg:rounded-none 
                        left-0 transition-all duration-500 ease-in ${menuOpen ? "left-0" :"left-[-1000px]"}`}>
            <ul className='lg:flex gap-7 lg:gap-5 font-semibold '>
            {menuItems.map((menu)=>(
                <li  className=' hover:bg-black hover:text-white px-5 py-2 rounded-lg duration-300 cursor-pointer' key={menu.link} >
                    <Link spy={true} smooth={true} offset={-100} to={menu.path}>{menu.link}</Link>
                </li>
            ))}
            </ul>
        </div>
        <div className='hidden lg:block'>
            <button  onClick={handleOpenSignup} className='border border-gray-800 rounded-full px-8 py-2 font-semibold  hover:bg-black hover:text-white duration-300'>Sign up</button>
        </div>
          {/* Success Message */}
          {successMessage && (
               <div className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded shadow">
                    Signed up successfully!
               </div>
          )}

          {/* Signup Modal */}
           <Signup
              isOpen={isSignupOpen}
                 onClose={handleCloseSignup}
                    onSuccess={handleSuccess}
          />
        
        <div className='block lg:hidden'>
         <button onClick={()=>setMenuOpen(!menuOpen)} >{menuOpen ? <FaXmark  className='w-8 h-8'/>:<BsMenuButtonFill  className='w-8 h-8'/>}</button>
        </div>
    </div>
  )
}

export default Navbar