"use client"
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Dribbble, DribbbleIcon, GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from './Icons'
import siteMetadata from '@/utils/siteMetaData'
import useThemeSwitch from '../Hooks/useThemeSwitch'
const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  return (
    <header className='w-full p-4 px-10 flex items-center justify-between'>
        <Logo />
        <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize 
        flex items-center space-x-4 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop:blur-sm z-50'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                <SunIcon/>
            </button>
        </nav>
        <div className='space-x-4'>
            <a href={siteMetadata.linkedin} className='inline-block w-6 h-6'><LinkedInIcon  className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href={siteMetadata.twitter} className='inline-block w-6 h-6'><TwitterIcon className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href={siteMetadata.github} className='inline-block w-6 h-6'><GithubIcon className="hover:scale-125 transition-all ease duration-200"/></a>
            <a href={siteMetadata.dribbble} className='inline-block w-6 h-6'><DribbbleIcon className="hover:scale-125 transition-all ease duration-200"/></a>
        </div>
    </header>
  )
}

export default Header