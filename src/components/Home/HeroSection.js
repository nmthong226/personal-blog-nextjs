"use client"
import Image from 'next/image'
import React from 'react'
import avatar from "../../../public/avatar.jpg"
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='md:h-[75vh] grid grid-cols-1 lg:grid-cols-12 items-center justify-center text-dark dark:text-light
        border rounded-2xl border-dark dark:border-light mx-5 lg:mx-10'>
            <div className='col-span-7 px-10 space-y-4'>
                <h1 className='text-dark dark:text-light text-4xl md:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-darkBlue to-lightBlue dark:from-purpleBlue dark:to-purplePink'>Hello, I'm {" "}</span>
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
                <p className='text-dark dark:text-light text-lg lg:text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu aliquet enim. In hac habitasse platea dictumst.
                    Nam metus nibh, ultrices vel congue ac, pharetra in enim. Sed sit amet sem ut orci ullamcorper faucibus.
                </p>
                <div className='flex space-x-4'>
                    <button className='bg-gradient-to-r from-darkBlue to-lightBlue dark:from-purpleBlue dark:to-purplePink  p-4 rounded-lg text-center text-light'>
                        My portfolio
                    </button>
                    <button className='p-4 border border-dark dark:border-light rounded-lg'>
                        Download CV
                    </button>
                </div>
            </div>
            <div className='col-span-5 p-10'>
                <Image
                    src={avatar}
                    className='w-full h-full rounded-3xl'
                    alt='my-avatar'
                />
            </div>
        </section>
    )
}

export default HeroSection