import React, { useContext, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { FaRegBuilding } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { BiPaste } from "react-icons/bi";
import GeneralHeader from '../generalheader';
import { usercontext } from '../UserContext';
import { Myplaces } from './myplaces';
import axios from 'axios';

 const AccountPage = () => {
  const {user,ready,setuser} = useContext(usercontext);
  const [redirect, setredirect] = useState(null)
  const {subpage} = useParams();

  function linkclass(type=null){
    let classes = 'py-2 px-5 flex gap-4 items-center rounded-3xl';
    if(type === subpage) classes +=' bg-red-500  text-white';
    else classes+=' bg-gray-300'
    return classes;
  }

  async function logout(){
    try{
      const resp = await axios.post('/logout');
      if(resp.data.success)
      {
        setredirect('/')
        setuser('');
      }
    }
    catch{
       alert('Unable to process Request');
    }
  }
  if(!ready) {return 'Loading ...'}
  if(ready && !user && !redirect) {return <Navigate to={'/login'}/>}
  if(redirect) {return <Navigate to={redirect}/>}

  return (
    <>
        <GeneralHeader/>
        <nav className='flex gap-14 mt-7 mb-12 justify-center text-lg font-semibold'>
            <Link to={'/account/profile'} className={linkclass('profile')}>
              <LuUser2/>
              My Profile
            </Link>

            <Link to={'/account/bookings'} className={linkclass('bookings')}>
              <BiPaste/>
              My Bookings
            </Link>

            <Link to={'/account/accomodation'} className={linkclass('accomodation')}>
              <FaRegBuilding />
              My Accomodation
            </Link>
        </nav>
        {subpage === 'profile' && (
          <div className='flex flex-col items-center gap-5'>
            <p className=' text-lg'>Logged in as {user}</p>
            <button className='py-3 px-8 bg-red-500 rounded-xl text-white text-large font-medium' onClick={logout}>Logout</button>
          </div>
        )}
        {subpage === 'accomodation' && (
          <Myplaces/>
        )}

        {subpage === 'bookings' && (
          <div className='flex justify-center text-xl'>
            <p>Your Bookings .....</p>
          </div>
        )}
        
    </>
  )
}
export default AccountPage;