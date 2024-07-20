import React, { useContext } from 'react'
import { FaAirbnb } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import {usercontext} from './UserContext'

const Header = () => {
  const {user} = useContext(usercontext);
  return (
    <>
    <div className='bg-white h-20 w-full flex  place-items-center px-[5%] justify-between shadow-md'>
        <Link to={'/'}>
            <div className='logo text-red-500 flex place-items-center gap-[2px] '>
                <FaAirbnb className="text-3xl"/>
                <p className='font-bold text-2xl'>airbnb</p>
            </div>
        </Link>

        <div className='searchbar flex text-sm gap-5 place-items-center divide-x divide-slate-400 shadow-lg bg-white rounded-full p-2'>

            <div className='px-2'>Anywhere</div>
            <div className='px-2 py-1'>Any week</div>
            <div className='flex gap-4 place-items-center px-2'>
                <p className='text-gray-400'>Add guests</p>
                <IoSearchCircle className="text-red-500 text-3xl"/>
            </div>

        </div>
        
        <div className='flex place-items-center gap-6'>
            <div className='flex text-sm gap-6 place-items-center'>
                <p>Airbnb your home </p>
                <TfiWorld/>
            </div>
            <div className='flex place-items-center gap-3  rounded-full p-2 shadow-lg bg-white'>
                <HiOutlineMenu className='text-2xl'/>
                <Link to={user?'/Account':'/login'}><MdAccountCircle className='text-3xl'/></Link>
                <h1>{user}</h1>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Header