"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { FacebookIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import siteMetadata from '@/utils/siteMetaData'
import useThemeSwitch from '../Hooks/useThemeSwitch'
import { cx } from '@/utils'

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button className="inline-block sm:hidden z-50 m-5" onClick={toggle} aria-label="Hamburger Menu">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1
              }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
            >&nbsp;</span>
          </div>
        </div>
      </button>
      <nav className={`w-full py-3 px-4 sm:px-8 font-medium capitalize items-center border-t-2 justify-center flex sm:hidden
        fixed bottom-6 right-1/2 translate-x-1/2 bg-light backdrop-blur-sm z-50 transition-all ease duration-300`}
        style={{ bottom: click ? "0rem" : "-5rem" }}>
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/newsfeed" className="mx-2">Newsfeed</Link>
        <Link href="/myblogs" className="mx-2">Blog</Link>
        <Link href="/about" className="mx-2">About</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" : "bg-light text-dark")}
          aria-label="theme-switcher">
          {mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />}
        </button>
      </nav>
      <nav className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center hidden sm:flex fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/newsfeed" className="mx-2">Newsfeed</Link>
        <Link href="/myblogs" className="mx-2">Blog</Link>
        <Link href="/about" className="mx-2">Me</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" : "bg-light text-dark")}
          aria-label="theme-switcher">
          {mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />}
        </button>
      </nav>
      <div className="hidden sm:flex items-center">
        <a href={siteMetadata.github} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
        <a href={siteMetadata.linkedin} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedInIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.twitter} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.facebook} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><FacebookIcon className="hover:scale-125 transition-all ease duration-200" /></a>
      </div>
    </header>
  );
}

export default Header;