"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Dribbble, DribbbleIcon, GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from './Icons'
import siteMetadata from '@/utils/siteMetaData'
import useThemeSwitch from '../Hooks/useThemeSwitch'
const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  return (
    <header className='w-full p-4 px-5 sm:px-10 flex items-center justify-between'>
      <Logo />
      <button className='inline-block sm:hidden z-50' onClick={() => setClick(!click)}>
        <div className='w-6 cursor-pointer transition-all ease duration-300'>
          <div className='relative'>
            <span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-300'
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}>&nbsp;</span>
            <span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-300'
              style={{
                opacity: click ? "0" : "100%"
              }}>&nbsp;</span>
            <span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-300'
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}>&nbsp;</span>
          </div>
        </div>
      </button>
      <nav className='w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize 
        items-center space-x-4 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop:blur-sm z-50 sm:hidden flex
        transition-all ease duration-300'
        style={{
          top: click ? "1rem" : "-5rem"
        }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <SunIcon />
        </button>
      </nav>
      <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize 
        items-center space-x-4 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop:blur-sm z-50 hidden sm:flex'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <SunIcon />
        </button>
      </nav>
      <div className='hidden sm:flex sm:items-center sm:space-x-4'>
        <a href={siteMetadata.linkedin} className='inline-block w-6 h-6'><LinkedInIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.twitter} className='inline-block w-6 h-6'><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.github} className='inline-block w-6 h-6'><GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
        <a href={siteMetadata.dribbble} className='inline-block w-6 h-6'><DribbbleIcon className="hover:scale-125 transition-all ease duration-200" /></a>
      </div>
    </header>
  )
}

export default Header