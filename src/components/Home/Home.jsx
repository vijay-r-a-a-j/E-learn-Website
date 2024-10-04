import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import PeopleImage from './PeopleImage'

const Home = () => {
  return (
    <div >
        <div className='bg-fuchsia-200 h-[800px] relative'>
           <Navbar />
           <Intro />
           <PeopleImage/>     
        </div>
    </div>
  )
}

export default Home