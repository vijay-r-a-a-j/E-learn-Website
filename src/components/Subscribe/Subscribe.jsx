import React, { useState } from 'react'
import { RxArrowTopRight } from "react-icons/rx";

const Subscribe = () => {

  const [email,setEmail] = useState("");

  return (
    <div className='text-center py-20 bg-fuchsia-100'>
       
       <h1 className='text-5xl font-bold mb-5'>Subscribe our newsletter</h1>
        <p className='font-semibold mb-5'>Teaches you How To Communicate Your Unique Comedy Skillfully. Virtual comedy<br/>
        workshop. Virtual stand up comedy. Virtual comedy class.</p>
       <form className='w-full  md:w-[500px] flex mx-auto border-2 border-b-black py-5'>
        <input className='w-11/12 bg-transparent outline-none placeholder-black placeholder-xl placeholder:hidden'
         type='email'
          placeholder='Enter your E-mail address'
          value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button className='w-1/12'><RxArrowTopRight className='w-5 h-5' /></button>
       </form>
    
    </div>
  )
}

export default Subscribe