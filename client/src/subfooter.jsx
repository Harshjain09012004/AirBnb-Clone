import React from 'react'
import {Link} from 'react-router-dom';

const Subfooter = () => {
  return (
    <>
    <div className='Subfooter mt-10 px-[5%] py-[3%] bg-zinc-100 flex flex-col gap-10'>

      <p className=' text-center text-xl font-semibold'>Inspiration for future getaways</p>

      <div className='Links flex gap-48 text-sm'>
        <div className='flex flex-col gap-3 text-gray-600'>
          <p className='text-zinc-800 font-semibold'>Support</p>
          <Link to={""}>Help Centre</Link>
          <Link to={""}>AirCover</Link>
          <Link to={""}>Air-discrimination</Link>
          <Link to={""}>Disability support</Link>
          <Link to={""}>Cancellation options</Link>
          <Link to={""}>Report neighbourhood concern</Link>
        </div>

        <div className='flex flex-col gap-3 text-gray-600'>
          <p className='text-zinc-800 font-semibold'>Explore</p>
          <Link to={""}>Explore Experiences</Link>
            <Link to={""}>Travel Credit</Link>
            <Link to={""}>Business Travel</Link>
        </div>

        <div className='flex flex-col gap-3 text-gray-600'>
          <p className='text-zinc-800 font-semibold'>Connect</p>
          <Link to={""}>Host an Experience</Link>
            <Link to={""}>Invite Friends</Link>
            <Link to={""}>Gift Cards</Link>
        </div>
        
      </div>
      
    </div>
    </>
  )
}

export default Subfooter;