import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate= useNavigate()
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex item-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 bg-orange-700 p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                <img onClick={()=>navigate(1)} className='w-8 bg-orange-700 p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />

            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-orange-700 px-4 py-1 rounded-2xl hidden md:block cursor-pointer text-amber-50 text-[15px]'>Explore Premium</p>
           <p className='bg-orange-700 px-4 py-1 rounded-2xl hidden md:block cursor-pointer text-amber-50 text-[15px]'>Install App</p>
           <p className='bg-orange-900 w-7 h-7 rounded-full  items-center justify-center flex text-amber-50 '>J </p>

            </div>

        </div>
        <div className='items-center flex gap-2 mt-4'>
            <p className='px-4 py-1 rounded-2xl bg-orange-700 text-white cursor-pointer '>All</p>
            <p className='px-4 py-1 rounded-2xl bg-orange-700 text-white cursor-pointer'>Music</p>
            <p className='px-4 py-1 rounded-2xl bg-orange-700 text-white cursor-pointer'>Podcasts</p>


        </div>
    </>
  )
}

export default Navbar