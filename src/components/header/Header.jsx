import React from 'react'
import Navbar from '../Navbar'
import Singer from '../Singer'
import Aside from './Aside'
import SignupAlert from '../SignupAlert'

const Header = () => {
  return (
    <header className="bg-black relative h-screen">
      <div className='flex justify-between'>
        <div className="w-[24.5%] h-screen bg-black">
          <Aside />
        </div>

        <div className="w-[75%] h-screen bg-zinc-900">
            <div className="bg-black text-white ">
          <Navbar />

            </div>
          <Singer />
        </div>
      </div>

      <div className='absolute w-full bottom-0'>
        <SignupAlert />
      </div>
    </header>
  );
}

export default Header