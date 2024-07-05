import React from 'react'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import { FcNext,FcPrevious } from "react-icons/fc";
import { GrFormNext,GrFormPrevious } from "react-icons/gr";
const Navbar = () => {
  return (
    <div className='h-[70px] py-2 flex items-center justify-between px-8 w-full'>
        <div className='flex items-center gap-3'>
            <GrFormPrevious color='gray' fontWeight={100} size={32} style={{cursor:'pointer'}} />
            <GrFormNext  fontWeight={100} size={32} style={{cursor:'pointer'}} />
        </div>
        <div className='flex items-center gap-8'>
            <button className='font-medium text-zinc-300'>Sign up</button>
            <button className='bg-white rounded-full px-6 py-[10px] text-black cursor-pointer font-medium'>Log in</button>
        </div>
    </div>
  )
}

export default Navbar