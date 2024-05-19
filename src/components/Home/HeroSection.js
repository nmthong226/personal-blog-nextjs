"use client"
import Image from 'next/image'
import React from 'react'
import avatar from "../../../public/avatar.jpg"
import { TypeAnimation } from 'react-type-animation';
import { IconDownload, IconLink } from '@tabler/icons-react';

const HeroSection = () => {
    return (
        <section className='group h-auto lg:h-[85vh] grid grid-cols-1 lg:grid-cols-12 items-center justify-center text-dark dark:text-light border rounded-2xl border-dark dark:border-light mx-5 sm:mx-10 bg-beige dark:bg-dark'>
            <div className='order-2 lg:order-1 col-span-12 lg:col-span-7 px-10 sxl:px-0 sxl:pl-10 space-y-2 xs:space-y-8 mb-2 xs:mb-10 lg:mb-0'>
                <h1 className='flex flex-col xs:flex-row text-dark dark:text-light text-2xl sm:text-3xl md:text-4xl sxl:text-5xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-darkBlue to-lightBlue dark:from-[#FF2718] dark:to-[#FFF801] mr-2'>Hello, I'm {" "}</span>
                    <TypeAnimation
                        sequence={[
                            'Thong Nguyen',
                            1000,
                            'Web Developer',
                            1000,
                            'UI/UX Designer',
                            1000,
                            'Vietnamese',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-dark dark:text-light text-base md:text-lg lg:text-xl'>
                    I kinda love sharing things, so this is my be-side place to 
                    share my own memories and stories. Welcome to my living page!
                </p>
                <div className='flex xs:flex-row flex-col'>
                    <button className='flex bg-gradient-to-r from-darkBlue to-lightBlue dark:from-[#FF2718]/90 dark:to-[#FFF801]/90  p-4 rounded-lg text-center text-light xs:mb-0 mb-2 xs:mr-2 mr-0'>
                        <IconLink className='mr-2' />
                        My portfolio
                    </button>
                    <button className='flex p-4 border border-dark dark:border-light rounded-lg bg-light dark:bg-dark '>
                        <IconDownload className='mr-2' />
                        Download CV
                    </button>
                </div>
            </div>
            <div className='order-1 lg:order-2 col-span-12 lg:col-span-5 p-2 xs:p-10 flex justify-center'>
                <Image
                    src={avatar}
                    alt='my-avatar'
                    className='w-full h-full object-center object-cover rounded-2xl'
                    priority
                />
            </div>
        </section>
    )
}

export default HeroSection