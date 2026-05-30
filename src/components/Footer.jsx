import React from 'react'
import { FaCopyright, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-gray-900 py-10'>
        <div className='max-w-7xl md:w-[80%] mx-auto px-2'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 font-serif'>
                <div>
                    <h1 className='text-4xl text-green-400 font-extrabold'>EliteClub football club</h1>
                </div>
                <div>
                    <h1 className='text-4xl text-green-400 font-extrabold'>Quick links</h1>
                    <div className='text-white cursor-pointer ml-2'>
                        <p>About</p>
                        <p>Contact us</p>
                        <p>Registration</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl text-green-400 font-extrabold'>Socials</h1>
                    <div className='text-white cursor-pointer '>
                        <p className='items-center flex gap-2'><FaFacebook/> EliteClub</p>
                        <p className='items-center flex gap-2'> <FaTwitter/> @EliteClub</p>
                        <p className='items-center flex gap-2'><FaWhatsapp/> 0794498656</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl text-green-400 font-extrabold'>News letter</h1>
                    <p className='text-white'>Get our latest events and news</p>
                    <form action="">
                        <input type="text" className='w-full p-2 bg-white rounded-md' />
                        <button className='w-full py-2 font-extrabold cursor-pointer rounded-md mt-2 bg-green-400'>Subscribe</button>
                    </form>
                </div>
            </div>
            <hr  className='text-green-400 mt-4'/>
            <div className='flex justify-center items-center mt-5 text-green-400'>
                <p className='flex items-center'><FaCopyright/> {new Date().getFullYear()} elitefootballclub All rights reserved
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer