import React from 'react'

const SignupAlert = () => {
    
  return (
    <div className='w-full h-16 bg-gradient-to-r from-purple-900 to-blue-800 flex items-center justify-between py-2 px-10'>
        <div>
            <h3 className='font-semibold text-[15px] text-white'>Preview of Spotify</h3>
            <p className='text-white font-light text-sm mt-1'>Sign up to get unlimited song and podcasts with occiasional ads. No credit Card Needed</p>
        </div>
        <button className='w-40 py-3 rounded-full font-medium bg-white'>Sign up free</button>
    </div>
  )
}

export default SignupAlert