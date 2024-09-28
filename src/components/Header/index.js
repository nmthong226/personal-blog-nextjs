import React from 'react'
import { FcFile } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import Link from 'next/link';
import logo from '/public/logo.png';
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import Logo from './Logo';
import { FaBloggerB } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";


const Header = () => {
  return (
    <header>
      <nav className='flex w-full px-10 py-3 border-b-[1px] border-gray-400 justify-between ml-auto space-x-[1%] items-center bg-white'>
        <div className='flex flex-row space-x-4'>
          <div className='flex flex-row items-center'>
            <Logo />
          </div>
          <div className='flex relative items-center'>
            <CiSearch className='absolute ml-2 text-gray-600' />
            <input className='w-80 border-2 border-gray-200 shadow-inner rounded-xl px-2 pl-8 py-1 text-md focus:outline-none' placeholder='Search' />
          </div>
        </div>
        <div className='flex flex-row space-x-5'>
          <Link
            href='/my-blogs'
            className='flex flex-row text-md items-center space-x-1'>
            <FaBloggerB className='text-sky-600'/>
            <span className='hover:text-sky-600'>
              Blog
            </span>
          </Link>
          <Link
            href='/my-cheatsheet'
            className='flex flex-row text-md items-center space-x-1'>
            <FcFile />
            <span className='hover:text-[#90CAF9]'>
              Docs
            </span>
          </Link>
          <Link
            href='/my-interview'
            className='flex flex-row text-md items-center space-x-1'>
            <FcFlashOn />
            <span className='hover:text-[#FFC107]'>Interview</span>
          </Link>
          <Link
            href='/demo'
            className='flex flex-row text-md items-center space-x-1'>
            <FaGamepad className='text-gray-600'/>
            <span className='hover:text-[#a0aec2]'>Game</span>
          </Link>
          <Link
            href='/about-me'
            className='text-md px-2 py-1 border-2 border-zinc-800 bg-zinc-800 text-white rounded-xl hover:bg-white hover:text-zinc-800'>
            About me
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header