import React from 'react'
import { FaFacebookSquare,FaInstagram,FaLinkedin,FaTelegram,FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <hr />
       <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-5'>
                    <FaFacebookSquare/>
                    <FaTelegram/>
                    <FaLinkedin/>
                    <FaInstagram/>

                </div>
                <div className='mt-6 border-t border-gray-700 flex flex-col items-center'>
                    <p>
                        &copy;2024 your company  all rights reserved
                    </p>
                    <p>supportive Mahmood & Alam</p>
                </div>
            </div>

        </div>

       </footer>
      
    </>
  )
}

export default Footer

