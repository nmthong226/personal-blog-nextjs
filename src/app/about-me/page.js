"use client"

import React, { useEffect, useState } from 'react'
import avatar from '../../../public/avatar.png';
import school from '../../../public/school.png';
import img_bb from '../../../public/img-bb.png';
import img_map from '../../../public/img-map.png';
import img_code from '../../../public/img-code.png';
import img_pet from '../../../public/img-pet.png';
import gif_cat from '../../../public/gif-cat.gif';
import Image from 'next/image'
import { FaRegFileLines } from "react-icons/fa6";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

const AboutMe = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full h-full justify-center lg:justify-end bg-white overflow-y-auto'>
            <div className='flex flex-col lg:h-full lg:w-1/3 lg:fixed lg:left-0 p-20'>
                <div className='w-48 h-48 border-[1px] rounded-full items-center justify-center flex hover:cursor-pointer'>
                    <Image src={avatar} alt='avatar' className='w-44 h-44 rounded-full' />
                </div>
                <div className='mt-6'>
                    <h1 className='text-4xl font-extrabold'>Thong Nguyen</h1>
                    <ul className='space-y-3 mt-6 text-xl text-zinc-700'>
                        <li>💼 Web Developer</li>
                        <li>💻 UI/UX Desiger</li>
                        <li>🌏 Stayed in HCMC, VietNam</li>
                        <li>🎂 Since 22/06/2003</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col p-20 lg:w-[60%] h-full gap-3'>
                <h1 className='font-bold text-lg'>About me 🙋‍♂️</h1>
                <div className='grid grid-cols-4 grid-rows-2 h-[352px] gap-3'>
                    <div className='flex col-span-1 row-span-2  text-white rounded-3xl relative'>
                        <Image src={school} alt='school' className='w-full h-full object-cover rounded-2xl' />
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>📖 Uni</div>
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
                    <div className='col-span-1 row-span-1 text-white rounded-3xl'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={img_bb} alt='img-bb' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                    </div>
                    <div className='col-span-1 row-span-1 text-white rounded-3xl'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={gif_cat} alt='img-cat' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                    </div>
                    <div className='flex col-span-1 row-span-1 bg-white hover:bg-gray-50 hover:cursor-pointer border-2 text-zinc-900 rounded-3xl relative'>
                        <a href='https://nmthong226.vercel.app/'
                            target='_blank'
                            className='flex flex-col w-full h-full p-2 justify-center '>
                            <h1 className='text-base font-bold line-clamp-1'>
                                My Portfolio
                            </h1>
                            <span className='text-sm text-slate-500 line-clamp-1'>
                                nmthong226.vercel.app
                            </span>
                        </a>
                        <div className='flex w-10 h-10 border-2 rounded-xl absolute items-center justify-center m-2'>
                            <FaRegFileLines className='w-6 h-6 rotate-[20deg] top-0' />
                        </div>
                    </div>
                    <div className='flex col-span-2 row-span-1 rounded-3xl relative'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={img_map} alt='img-map' className='w-full h-full object-fill rounded-2xl' />
                        </div>
                        <div className='flex absolute w-[14px] h-[14px] left-[50%] top-[30%] rounded-full bg-[#0160C9] border-2 border-white animate-grow-shrink' />
                        <div className='flex absolute px-2 bg-white text-zinc-900 rounded-lg bottom-0 m-2'>HCMC, Vietnam</div>
                    </div>
                </div>
                <div className='grid grid-cols-4 grid-rows-2 gap-3 h-[352px]'>
                    <div className='col-span-1 row-span-1 bg-zinc-400 text-white rounded-3xl'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={img_code} alt='img-code' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                    </div>
                    <div className='col-span-1 row-span-1 bg-[#0a2748] text-white rounded-3xl'>
                        <div className='flex flex-col w-full h-full p-2 justify-center items-center'>
                            <p className='text-xl font-bold whitespace-pre-line flex-shrink-0'>
                                speaks 👄{'\n'}
                                VN{'\n'}
                                EN{'\n'}
                                JP.
                            </p>
                        </div>
                    </div>
                    <div className='flex col-span-2 row-span-2 rounded-3xl relative'>
                        <iframe src="https://open.spotify.com/embed/playlist/3zptUL73sNzy6weGlOQ1RP?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className='flex col-span-2 row-span-1 rounded-3xl relative'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_pet} alt='img-map' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='flex absolute px-2 bg-white border-2 text-zinc-900 rounded-lg bottom-0 m-2 text-sm'>❤️ Pet</div>
                    </div>
                </div>
                <h1 className='font-bold text-lg mt-10'>My socials 📫</h1>
            </div>
        </div>
    )
}

export default AboutMe