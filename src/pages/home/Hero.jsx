import React from 'react'
import { FaTrophy, FaUser, FaUsers } from 'react-icons/fa'
import { FaFootball } from 'react-icons/fa6'

function Hero() {
  return (
    <div className='relative sm:h-full md:h-[100vh] w-full font-serif'>
        {/* background image slider with overlay */}
        <div className='absolute inset-0 z-0'>
             <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black-70 to-black/40 z-3'></div>
             {/* background image */}
             <div className='w-full h-full object-center' style={{backgroundImage:`url(src/assets/image1.jpg)`}}></div>
        </div>
        {/* text content */}
        <div className='relative z-7 pt-20 md:pt-0 flex items-center justify-center h-full'>
        <div className='max-w-7xl md:w-[80%] flex flex-col md:flex-row justify-between gap-5 px-2'>
          <div className='top-30 md:w-[50%] flex flex-col gap-5'>
            <h1 className='text-6xl md:text-7xl text-white font-extrabold'>Good talent requires Professional training</h1>
            <p className='text-2xl text-white'>Train with professionals</p>
              <div className={`flex flex-col sm:flex-row gap-5`}>
                  <a href="#classes" className='group relative overflow-hidden rounded-full bg-green-600 px-8 py-4 text-white font-medium
                  text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg
                  '>
                      <span className='relative z-10'>Register now</span>
                      <div className='absolute inset-0 bg-gradient-to-r from-green-700 to-green-500
                      transform scale-x-0 group-hover:scale-100 transition-all duration-300 origin-left
                      '></div>
                  </a>
                  <a href="#classes" className='group relative overflow-hidden rounded-full border-2 px-8 py-4 text-white font-medium
                  text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg
                  '>
                      <span className='relative z-10'>Contact us</span>
                      <div className='absolute inset-0 bg-gradient-to-r from-green-700 to-green-500
                      transform scale-x-0 group-hover:scale-100 transition-all duration-300 origin-left
                      '></div>
                  </a>
                </div>
                 <div className='text-white font-bold text-md'> 1,000+ trained footballers</div>
          </div>
          <div className='bg-black/40 backdrop-blur-md p-8 rounded-3xl border
          border-white/10 shadow-xl relative overflow-hidden  w-full md:w-[50%]'>
            <h1 className='text-bold text-white text-2xl mb-2'>Why train with us?</h1>
            <div className='flex flex-col gap-3 mt-4'>
                <div className='flex gap-3 justify-between'>
                    <div className='h-10 w-10 rounded-full flex justify-center items-center bg-green-400 backdrop-blur-md '>
                        <FaFootball className='h-4 w-4 text-2xl rounded-full'/>
                    </div>
                    <div className='flex flex-col overflow-clip'>
                        <h3 className='font-bold text-white text-lg'>Professional Coaching</h3>
                        <p className='text-sm text-white'>Train with experienced coaches who help improve skills, tactics, fitness, and overall performance.</p>
                    </div>                               
                </div>
                    <div className='flex gap-3'>
                    <div className='h-10 w-10 rounded-full flex justify-center items-center bg-green-400 backdrop-blur-md '>
                        <FaUsers className='h-4 w-4 text-2xl rounded-full'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-white text-lg'>Teamwork & Discipline</h3>
                        <p className='text-sm text-white'>Build strong teamwork, leadership, discipline, and communication skills both on and off the field.</p>
                    </div>                               
                </div>
                    <div className='flex gap-3'>
                    <div className='h-10 w-10 rounded-full flex justify-center items-center bg-green-400 backdrop-blur-md '>
                        <FaTrophy className='h-4 w-4 text-2xl rounded-full'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-white text-lg'>Competitive Opportunities</h3>
                        <p className='text-sm text-white'>Get chances to participate in tournaments, showcase talent, and grow your football career.</p>
                    </div>                               
                </div>
                <hr className='border border-green-500/20'/>
                <p className='flex text-green-300 font-bold hover:cursor-pointer'>Discover all amenities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero