import React from 'react'
import {Link} from 'react-router-dom';
import { TfiWorld } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='Footer flex justify-between px-[5%] py-[2%] border-y-[1px] border-zinc-300 bg-zinc-100'>

        <div className='left flex text-gray-600 text-sm gap-4'>
            <p>© 2024 Airbnb,Inc.</p>
            <Link to={""}><p>•  Privacy</p></Link>
            <Link to={""}><p>•  Terms</p></Link>
            <Link to={""}><p>•  Sitemap</p></Link>
            <Link to={""}><p>•  Company  details</p></Link>
        </div>

        <div className='right flex gap-7 place-items-center'>
            
            <div className='country flex place-items-center gap-2 text-sm font-semibold'>
                <TfiWorld className="text-zinc-900"/>
                <p className='text-zinc-600'>English(IN)</p>
            </div>

            <div className='currency text-sm font-semibold text-zinc-600'>₹ INR</div>

            <div className='socialmedia flex gap-3 text-xl'>
                <Link to={""}><FaFacebookSquare/></Link>
                <Link to={""}><FaSquareInstagram/></Link>
                <Link to={""}><FaSquareTwitter/></Link>
            </div>

        </div>

    </div>
  )
}

export default Footer