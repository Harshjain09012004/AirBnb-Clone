import React, { useContext } from 'react'
import { FaAirbnb } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import {usercontext} from './UserContext'

const GeneralHeader = () => {
  const {user} = useContext(usercontext);
  return (
    <>
    <div className='bg-white h-[68px] w-full flex  place-items-center px-[5%] justify-between shadow-md'>
        <Link to={'/'}>
            <div className='logo text-red-500 flex place-items-center gap-[2px] '>
                <FaAirbnb className="text-3xl"/>
                <p className='font-bold text-2xl'>airbnb</p>
            </div>
        </Link>
        
        <div className='flex place-items-center gap-6'>
            <div className='flex text-sm gap-6 place-items-center'>
                <p>Airbnb your home </p>
                <TfiWorld/>
            </div>
            <div className='flex place-items-center gap-3  rounded-full p-2 shadow-lg bg-white'>
                <HiOutlineMenu className='text-xl'/>
                <Link to={user?'/Account':'/login'}><MdAccountCircle className='text-3xl'/></Link>
                <h1>{user}</h1>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default GeneralHeader