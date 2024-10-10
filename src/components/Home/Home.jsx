import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import PeopleImage from './PeopleImage'

const Home = () => {
  return (
    <div  id='home'>
        <div className='bg-fuchsia-200 h-[700px] md:h-[600px] lg:h-[750px] relative '>
           <Navbar />
           <Intro />
           <PeopleImage/>     
        </div>
    </div>
  )
}

export default Home