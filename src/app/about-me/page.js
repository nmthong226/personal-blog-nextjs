"use client"

import React, { useEffect, useState } from 'react'
import avatar from '@/public/avatar.png';
import school from '@/public/school.png';
import img_bb from '@/public/img-bb.png';
import img_map from '@/public/img-map.png';
import img_code from '@/public/img-code.png';
import img_pet from '@/public/img-pet.png';
import img_hsr from '@/public/img-hsr.png';
import img_zzz from '@/public/img-zzz.png';
import img_arknights from '@/public/img-arknights.png';
import img_reverse1999 from '@/public/img-reverse1999.png';
import img_carrie from '@/public/img-carrie.png';
import img_fried from '@/public/img-fried.png';
import img_thai from '@/public/img-thai.png';
import img_cancer from '@/public/img-cancer.png';
import gif_stardew from '@/public/gif-stardewvalley.gif';
import gif_cat from '@/public/gif-cat.gif';
import gif_pho from '@/public/gif-pho.gif';
import gif_egg from '@/public/gif-egg.gif';
import Image from 'next/image'
import { FaRegFileLines } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBloggerB } from "react-icons/fa";
import SpotifyWebApi from "spotify-web-api-js";
import Link from 'next/link';
import { delay, motion } from 'framer-motion';

const spotifyApi = new SpotifyWebApi();

const AboutMe = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full h-full justify-center lg:justify-end bg-white overflow-y-auto'>
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0 }}
                className='flex flex-col h-full lg:w-[30%] sxl:w-1/3 lg:fixed lg:left-0 p-3 xs:p-10 sxl:p-20 max-lg:mt-80'>
                <div className='max-lg:hidden w-48 h-48 border-[1px] rounded-full items-center justify-center flex hover:cursor-pointer'>
                    <Image src={avatar} alt='avatar' className='w-44 h-44 rounded-full' />
                </div>
                <div className='flex flex-col xs:flex-row mt-32 xs:mt-6 space-x-0 xs:space-x-6'>
                    <div className='lg:hidden w-36 h-36 sm:w-48 sm:h-48 border-[1px] rounded-full items-center justify-center flex hover:cursor-pointer'>
                        <Image src={avatar} alt='avatar' className='w-32 h-32 sm:w-44 sm:h-44 rounded-full' />
                    </div>
                    <div>
                        <h1 className='text-lg xs:text-xl sm:text-3xl sxl:text-4xl font-extrabold max-xs:mt-4'>Thong Nguyen</h1>
                        <ul className='space-y-3 mt-6 text-sm xs:text-base sm:text-lg sxl:text-xl text-zinc-700 whitespace-nowrap'>
                            <li>💼 Web Developer</li>
                            <li>💻 UI/UX Desiger</li>
                            <li>🌏 Stayed in HCMC, VietNam</li>
                            <li>🎂 Since 22/06/2003</li>
                        </ul>
                        <Link
                            href="/my-blogs"
                            className="flex items-center justify-center p-2 w-32 bg-zinc-800 text-white rounded-lg mt-12 ">
                            <FaBloggerB className="mr-2" />
                            My blog
                        </Link>
                    </div>
                </div>
            </motion.div>
            <div className='flex flex-col p-3 xs:p-10 sxl:p-20 w-full lg:w-[70%] sxl:w-[60%] h-full gap-6'>
                <h1 className='font-bold text-lg'>About me 🙋‍♂️</h1>
                <div className='grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 h-[724px] md:h-[352px] gap-6'>
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className='flex col-span-1 row-span-2  text-white rounded-3xl relative h-[352px] order-1'>
                        <Image src={school} alt='school' className='w-full h-full object-cover rounded-2xl' priority />
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>📖 Uni</div>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className='col-span-1 row-span-1 bg-zinc-900 text-white rounded-3xl h-[164px] order-2'>
                        <div className='flex flex-col w-full h-full p-2 justify-center items-center'>
                            <p className='text-sm xs:text-xl font-bold text-center whitespace-pre-line flex-shrink-0'>
                                Obsession{'\n'}
                                beats talent{'\n'}
                                every time.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className='col-span-1 row-span-1 text-white rounded-3xl order-5 md:order-3'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={img_bb} alt='img-bb' className='w-full h-full object-cover rounded-2xl' priority />
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className='col-span-1 row-span-1 text-white rounded-3xl order-4'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={gif_cat} alt='img-cat' className='w-full h-full object-cover rounded-2xl' priority />
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className='col-span-1 row-span-1 bg-zinc-400 text-white rounded-3xl h-[164px] order-5 relative'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={img_cancer} alt='img-cancer' className='w-full h-full object-cover rounded-2xl' priority />
                        </div>
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>♋ Cancer</div>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className='flex col-span-2 row-span-1 md:col-span-2 md:row-span-1 rounded-3xl relative order-6'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={img_map} alt='img-map' className='w-full h-full object-fill rounded-2xl' priority />
                        </div>
                        <div className='flex absolute w-[14px] h-[14px] left-[50%] top-[30%] rounded-full bg-[#0160C9] border-2 border-white animate-grow-shrink' />
                        <div className='flex absolute px-2 bg-white text-zinc-900 rounded-lg bottom-0 m-2'>HCMC, Vietnam</div>
                    </motion.div>
                </div>
                <div className='grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 h-[724px] md:h-[352px] gap-6'>
                    <div className='col-span-1 row-span-1 bg-zinc-400 text-white rounded-3xl h-[164px]'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <Image src={img_code} alt='img-code' className='w-full h-full object-cover rounded-2xl' priority />
                        </div>
                    </div>
                    <div className='col-span-1 row-span-1 bg-gray-100 text-zinc-700 border-2 rounded-3xl h-[164px] relative'>
                        <div className='flex flex-col w-full h-full p-2 justify-center items-center'>
                            <p className='text-xl font-bold whitespace-pre-line flex-shrink-0'>
                                VN, EN, JP
                            </p>
                        </div>
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>👄 Speak</div>
                    </div>
                    <div className='flex col-span-2 row-span-2 rounded-3xl relative'>
                        <iframe src="https://open.spotify.com/embed/playlist/3zptUL73sNzy6weGlOQ1RP?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className='flex col-span-2 row-span-1 rounded-3xl relative h-[164px]'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_pet} alt='img-map' className='w-full h-full object-cover rounded-2xl' priority />
                        </div>
                        <div className='flex absolute px-2 bg-white border-2 text-zinc-900 rounded-lg bottom-0 m-2 text-sm'>❤️ Pet</div>
                    </div>
                </div>
                <h1 className='font-bold text-lg mt-16'>My games ⚔️</h1>
                <div className='grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 h-[724px] md:h-[352px] gap-6'>
                    <div className='col-span-1 row-span-1 bg-gradient-to-b from-[#535252] to-[#0c0c0c] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative order-1'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_hsr} alt='img-hsr' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='absolute right-0 top-0 m-4 p-1 rounded-full bg-black/60'>
                            <FaArrowUp className='rotate-45 w-4 h-4' />
                        </div>
                    </div>
                    <div className='flex col-span-1 row-span-1 bg-gradient-to-b from-[#5391e9] to-[#0c3e85] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative order-2'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_zzz} alt='img-zzz' className='w-full h-full object-cover rounded-2xl order-1' />
                        </div>
                        <div className='absolute right-0 top-0 m-4 p-1 rounded-full bg-black/60'>
                            <FaArrowUp className='rotate-45 w-4 h-4' />
                        </div>
                    </div>
                    <div className='flex col-span-2 row-span-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[352px] relative order-5 md:order-3'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={gif_stardew} alt='img-arknights' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>🐤 Stardew Valley</div>
                    </div>
                    <div className='flex col-span-1 row-span-1 bg-gradient-to-b from-[#3b5998] to-[#052d66] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative order-4'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_arknights} alt='img-arknights' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='absolute right-0 top-0 m-4 p-1 rounded-full bg-black/60'>
                            <FaArrowUp className='rotate-45 w-4 h-4' />
                        </div>
                    </div>
                    <div className='flex col-span-1 row-span-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative order-3 md:order-5'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_reverse1999} alt='img-arknights' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='absolute right-0 top-0 m-4 p-1 rounded-full bg-black/60'>
                            <FaArrowUp className='rotate-45 w-4 h-4' />
                        </div>
                    </div>
                </div>
                <h1 className='font-bold text-lg mt-16'>Yummy things 😋</h1>
                <div className='grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 h-[724px] md:h-[352px] gap-6'>
                    <div className='col-span-2 row-span-1 bg-gradient-to-b from-[#535252] to-[#0c0c0c] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative order-1'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_carrie} alt='img-hsr' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>Curry</div>
                    </div>
                    <div className='col-span-1 row-span-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative order-3 md:order-2'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_fried} alt='img-arknights' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>Fried shrimp</div>
                    </div>
                    <div className='col-span-1 row-span-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[352px] relative order-4 md:order-3'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={gif_pho} alt='img-arknights' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>Noodles</div>
                    </div>
                    <div className='col-span-2 row-span-1 bg-gradient-to-b from-[#3b5998] to-[#052d66] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative order-2 md:order-4'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={gif_egg} alt='img-arknights' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>Fried egg</div>
                    </div>
                    <div className='col-span-1 row-span-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative order-5'>
                        <div className='flex flex-col w-full h-full justify-center border-2 rounded-2xl items-center'>
                            <Image src={img_thai} alt='img-arknights' className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='flex px-2 justify-center items-center absolute z-10 bg-gray-50 rounded-md text-zinc-600 bottom-0 text-sm m-2 border-2'>Thai hot pot</div>
                    </div>
                </div>
                <h1 className='font-bold text-lg mt-16'>My socials 📫</h1>
                <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-6 h-[550px] md:h-[352px]'>
                    <div className='col-span-1 row-span-1 bg-gradient-to-b from-[#535252] to-[#0c0c0c] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative'>
                        <div className='flex flex-col justify-between w-full h-full p-4'>
                            <BsGithub className='text-white w-10 h-10' />
                            <div className='flex flex-col'>
                                <p className='text-lg font-extrabold'>Github</p>
                                <p className='text-[12px]'>@nmthong226</p>
                            </div>
                        </div>
                        <div className='absolute right-0 top-0 m-4 p-1 rounded-full bg-white/60'>
                            <FaArrowUp className='rotate-45 w-4 h-4' />
                        </div>
                    </div>
                    <div className='flex col-span-1 row-span-1 bg-gradient-to-b from-[#5391e9] to-[#0c3e85] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative'>
                        <div className='flex flex-col justify-between w-full h-full p-4'>
                            <FaLinkedinIn className='text-white w-10 h-10' />
                            <div className='flex flex-col'>
                                <p className='text-lg font-extrabold'>LinkedIn</p>
                                <p className='text-[12px]'>@nmthong226</p>
                            </div>
                        </div>
                        <div className='absolute right-0 top-0 m-4 p-1 rounded-full bg-white/60'>
                            <FaArrowUp className='rotate-45 w-4 h-4' />
                        </div>
                    </div>
                    <div className='flex col-span-1 row-span-1 bg-gradient-to-b from-[#3b5998] to-[#052d66] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative'>
                        <div className='flex flex-col justify-between w-full h-full p-4'>
                            <FaFacebookF className='text-white w-10 h-10' />
                            <div className='flex flex-col'>
                                <p className='text-lg font-extrabold'>Facebook</p>
                                <p className='text-[12px]'>@nmthong226</p>
                            </div>
                        </div>
                        <div className='absolute right-0 top-0 m-4 p-1 rounded-full bg-white/60'>
                            <FaArrowUp className='rotate-45 w-4 h-4' />
                        </div>
                    </div>
                    <div className='flex col-span-1 row-span-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 hover:cursor-pointer text-white rounded-3xl h-[164px] relative'>
                        <div className='flex flex-col justify-between w-full h-full p-4'>
                            <FaInstagram className='text-white w-10 h-10' />
                            <div className='flex flex-col'>
                                <p className='text-lg font-extrabold'>Instagram</p>
                                <p className='text-[12px]'>@nmthong226</p>
                            </div>
                        </div>
                        <div className='absolute right-0 top-0 m-4 p-1 rounded-full bg-white/60'>
                            <FaArrowUp className='rotate-45 w-4 h-4' />
                        </div>
                    </div>
                </div>
                <h1 className='font-bold text-lg mt-16'>My others ✨</h1>
                <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-2 gap-6 h-[550px] md:h-[352px]'>
                    <div className='flex col-span-1 row-span-1 bg-white hover:bg-gray-50 hover:cursor-pointer border-2 text-zinc-900 rounded-3xl relative h-[164px] order-3 md:order-5'>
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
                </div>
            </div>
        </div >
    )
}

export default AboutMe