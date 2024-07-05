import React from 'react'
import logo from '../assets/spotify-logo.webp'
import { GoHomeFill } from "react-icons/go";
import { LuSearch } from "react-icons/lu";


const Nav = () => {
  return (
    <div className='text-white rounded-lg bg-zinc-900 w-full h-40 mt-[7px] mb-3'>
        <div>
            <div className="logo flex items-center gap-1 p-3 cursor-pointer">
                <img className='w-10' src={logo} alt="" />
                <h4 className='text-sm font-semibold'>Spotify</h4>
            </div>

            <div className='pl-6 space-y-4'>
                <div className='flex gap-2 cursor-pointer'>
                <GoHomeFill size={21} /> 
                <h3 className='font-semibold'>Home</h3>
                </div>
                <div className='flex gap-2 cursor-pointer text-gray-400'>
                <LuSearch size={21} /> 
                <h3 className='font-semibold'>Search</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav