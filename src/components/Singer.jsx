import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { ContextProvider } from '../context/Context'

const Singer = () => {
    const context = useContext(ContextProvider)
    console.log()
  return (
    <div className='px-10 my-10 text-white'>
        <h3 className='text-[26px] font-semibold my-6'>Popular artists</h3>
       
        <div className='flex items-center justify-between gap-5 w-full'>
        {context.artists.map((items,index) => (
            <React.Fragment key={index}>
                { }
            <Link to={`artist/${items.name.split(' ').join('-')}`} className=' cursor-pointer bg-black/30 p-3 rounded-lg hover:bg-black/50 shadow-md -shadow-md shadow-zinc-900 w-[20%] overflow-hidden'>
            <div className='w-full'>
            <img className='w-60 h-60 rounded-full object-cover' src={items.singer} alt="" />
            <h4 className='font-semibold'>{items.name}</h4>
            <p className='text-[13px] text-gray-300 font-medium py-1'>{items.title}</p>
        </div>
        </Link>
        </React.Fragment>
        ))}
        </div>

        <div className='flex items-center justify-between w-full gap-5 mt-10'>
        {context.albums.map((items,index) => (
            <div key={index} className='cursor-pointer bg-black/30 rounded-lg  shadow-md -shadow-md shadow-zinc-900 w-[20%] overflow-hidden hover:scale-[1.02] transition-scale ease-in duration-500'>
            <img className='w-full h-60 object-cover' src={items.album} alt="" />
            <h4 className='font-semibold px-3 pt-2 '>{items.name}</h4>
            <p className='text-[13px] text-gray-300 font-medium px-3 pt-1 pb-3'>{items.title}</p>
        </div>
        ))}
        </div>
    </div>
    
  )
}

export default Singer