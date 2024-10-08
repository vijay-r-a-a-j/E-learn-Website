import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialYoutube } from "react-icons/ti"

const Footer = () => {
  return (
    <div className='bg-fuchsia-200 md:px-20 '>
        <div>
            <div className='flex flex-wrap md:flex-nowrap justify-between py-10 border-b border-gray-700'>
                <h1 className='text-3xl md:text-4xl font-semibold '>Follow us no filter.</h1>
                    <div className='flex gap-2 md:gap-10 mt-5 mx-auto lg:mx-0'>
                        <a><TiSocialLinkedin  className='w-7 h-7'/></a>
                        <a><TiSocialFacebook  className='w-7 h-7'/></a>
                        <a><TiSocialInstagram className='w-7 h-7' /></a>
                        <a><TiSocialTwitter className='w-7 h-7' /></a>
                        <a><TiSocialYoutube  className='w-7 h-7'/></a>
                    </div>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap justify-between py-10'>
                <div className='flex flex-wrap lg:flex-nowrap lg:gap-32'>
                    <p>@2021 Msoft Ltd. All Rights Reserved. </p>
                    <p>Terms Of Use</p>
                    <p>Privacy policy</p>
                </div>
                <div>Developed By Vijay Raaj</div>
            </div>
        </div>
          
    </div>
  )
}

export default Footer