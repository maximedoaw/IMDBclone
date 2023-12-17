import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch';
function Header() {
  return (
    <div className='flex justify-between mx-2
    max-w-6xl sm:mx-auto items-center py-6'>
    
        <div className="flex lg:flex">
            <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
            <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="flex
        items-center space-x-5">
          <DarkModeSwitch />

          <Link href="/">
            <h2 classname='text-4xl'>
              <span className='font-bold bg-amber-500
              py-2 px-1 rounded-lg mr-1
              '>IMDB</span>
              <span className='text-xl hidden
              sm:inline'>Clone</span>
            </h2>
          </Link>
        </div>
    </div>
  )
}

export default Header