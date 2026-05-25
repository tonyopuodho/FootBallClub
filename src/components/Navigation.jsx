import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

function Navigation() {
    const navLinks = [
        {
            name:"Home",
            link:"/"
        },{
            name:"About",
            link:"/about"
        },{
            name:"Program",
            link:"/program"
        },{
            name:"Gallery",
            link:"/gallery"
        },{
            name:"Contact us",
            link:"/contact"
        }
    ]
    const [openNav,setOpenNav] = useState(false)
  return (
    <div>
        <div className={`fixed top-0 w-full bg-gray-100 shadow-md font-serif p-2 h-[10vh] flex justify-center items-center z-10`}>
            <div className={`max-w-7xl md:w-[80%] mx-auto px-2 w-full flex items-center justify-between`}>
                <h1 className={`text-4xl font-extrabold`}>Elite
                    <span className='text-green-400'>Club</span>
                </h1>
            
                <div className='md:flex items-center gap-10 hidden'>
                <ul className='flex justify-between gap-4'>
                    {
                        navLinks.map((item) => (
                            <li key={item.name} className='text-md font-bold'>
                            
                                <NavLink to={item.link} className={({isActive,pending}) => 
                                isActive ? "active" :
                                pending ? "pending" : ""
                                
                                } key={item.name}>{item.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                    <button className='py-2 bg-green-400 text-black px-10 rounded-md font-bold cursor-pointer'>Register</button>
                </div>
                <div className='md:hidden' onClick={() => setOpenNav(!openNav)}>
                    {
                        openNav ? <FaBars className='text-2xl text-green-400 font-bold'/> : <FaXmark className='text-2xl text-green-400 font-bold'/>
                    }
                    
                </div>                
            </div>
        </div>
        {/* mobile navigation */}
        <div className={`absolute w-full shadow-lg h-[50vh] bg-gray-100 py-2 transition-all duration-300 ${openNav ? 'top-[-200%]' : 'top-0'} md:hidden`}>
            <ul className=' mt-25 gap-4 text-center space-y-5'>
                    {
                        navLinks.map((item) => (
                            <li key={item.name} className='text-md font-bold'>
                            
                                <NavLink to={item.link} className={({isActive,pending}) => 
                                isActive ? "active" :
                                pending ? "pending" : ""
                                
                                } key={item.name} onClick={() => setOpenNav(!openNav)}>{item.name}</NavLink>
                            </li>
                        ))
                    }
            </ul>
        </div>
    </div>
   
  )
}

export default Navigation