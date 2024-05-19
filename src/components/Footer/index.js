"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { FacebookIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '../Header/Icons';
import Link from 'next/link';
import siteMetadata from '@/utils/siteMetaData';

const index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <footer className='mt-16 rounded-2xl bg-dark dark:bg-accentDark m-5 sm:m-10 flex flex-col items-center text-light dark:text-dark'>
      <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
        This is my story
      </h3>
      <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base'>
      Welcome to my cozy corner of the internet! Here, I'm excited to share snippets of my life, thoughts, and adventures.
      But it's not just about me—I'm eager to connect with new friends! If you'd like to join me on this journey, simply drop your email below, and I'll make sure to reach out. 
      Welcome you into my digital world! 🌟
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4'>
        <input
          type="text"
          placeholder="Enter your email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i, maxLength: 83 })}
          className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 pl-2 sm:pl-0' />
        <input type="submit" className='bg-dark dark:bg-light text-light dark:text-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1' value="Send" />
      </form>
      <div className='flex items-center mt-8 space-x-4'>
        <a href={siteMetadata.github} className='inline-block w-6 h-6 fill-light'><GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark" /></a>
        <a href={siteMetadata.linkedin} className='inline-block w-6 h-6'><LinkedInIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.twitter} className='inline-block w-6 h-6'><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.facebook} className='inline-block w-6 h-6'><FacebookIcon className="hover:scale-125 transition-all ease duration-200" /></a>
      </div>
      <div className='w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex md:flex-row flex-col
      items-center justify-between'>
        <span className='text-center'> &copy; 2024 nmthong226. All rights reserved</span>
        <Link href="./sitemap.xml" className='text-center underline my-4 md:my-0'>
          sitemap.xml
        </Link>
        <div className='text-center'>
          Made with &hearts; by <a href='https://facebook.com/nmthong226' className='underline'>nmthong226</a>
        </div>
      </div>
    </footer>
  )
}

export default index