import React from 'react'
import avatar from '../../../public/avatar.png';
import school from '../../../public/school.png';
import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full h-full justify-center lg:justify-end bg-white'>
            <div className='flex flex-col lg:h-full lg:w-1/3 lg:fixed lg:left-0 p-20'>
                <div className='w-48 h-48 border-[1px] rounded-full items-center justify-center flex hover:cursor-pointer'>
                    <Image src={avatar} alt='avatar' className='w-44 h-44 rounded-full' />
                </div>
                <div className='mt-6'>
                    <h1 className='text-4xl font-extrabold'>Thong Nguyen</h1>
                    <ul className='space-y-3 mt-6 text-xl text-zinc-700'>
                        <li>💼 Web Developer</li>
                        <li>🌏 Stayed in HCMC, VietNam</li>
                        <li>🎂 Since 22/06/2003</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col p-20 lg:w-[60%] h-full'>
                <div className='grid grid-cols-4 grid-rows-2 gap-2 h-80'>
                    <div className='flex col-span-1 row-span-2 bg-black text-white rounded-3xl relative'>
                        <Image src={school} alt='school' className='w-full h-full object-cover rounded-2xl' />
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2'>❤️</div>
                    </div>
                    <div className='col-span-1 row-span-1 bg-zinc-900 text-white rounded-3xl'>
                        <div className='flex flex-col w-full h-full p-2 justify-center items-center'>
                            <p className='text-xl font-bold text-center whitespace-pre-line flex-shrink-0'>
                                Obsession{'\n'}
                                beats talent{'\n'}
                                every time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe