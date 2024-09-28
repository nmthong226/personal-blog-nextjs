import React from 'react';
import { NTR } from 'next/font/google';
import self from '@/public/self.png';
import HSR from '@/public/HSR.png';
import ZZZ from '@/public/ZZZ.png';
import Arknights from '@/public/Arknights.png';
import INFJ from '@/public/INFJ.png';
import Image from 'next/image';

// Import the Dela Gothic One font locally
const delaGothic = NTR({
    weight: '400',
    subsets: ['latin'],
});

const Bento = () => {
    return (
        <div className={`h-screen w-full flex items-center justify-center dark:bg-slate-900 ${delaGothic.className}`}>
            {/* <div className='grid h-full w-full grid-cols-6 grid-rows-3 gap-3 p-32 pt-6 mt-10'>
                <div className='flex items-center justify-center col-span-2 row-span-2 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-green-500 dark:to-green-700'>
                    <div className='flex flex-col w-full h-full p-5 justify-center items-center'>
                        <Image src={self} alt='my-self' className='h-80 w-auto border-b-2' />
                        <span className='text-zinc-900 dark:text-white text-3xl mt-8 text-nowrap'>Nguyen Minh Thong</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-rose-300 dark:to-rose-500'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>since</span>
                        <img width="96" height="96" src="https://img.icons8.com/emoji/96/birthday-cake-emoji.png" alt="birthday-cake-emoji" className='mx-auto' />
                        <span className='text-zinc-900 dark:text-white text-xl'>22/06/2003</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>language</span>
                        <img width="96" height="96" src="https://img.icons8.com/fluency/96/language.png" alt="language" />
                        <span className='text-zinc-900 dark:text-white text-xl'>VN, EN, JP</span>
                    </div>
                </div>
                <div className='col-span-2 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-green-300 dark:via-blue-500 dark:to-purple-600'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>games</span>
                        <div className='flex flex-row w-full justify-between px-4'>
                            <Image src={HSR} alt='HSR' className='h-24 w-auto rounded-lg' />
                            <Image src={ZZZ} alt='ZZZ' className='h-24 w-auto rounded-lg' />
                            <Image src={Arknights} alt='Ark' className='h-24 w-auto rounded-lg' />
                        </div>
                        <span className='text-zinc-900 dark:text-white text-xl'>and Reverse1999</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-blue-400 dark:to-emerald-500'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>zodiac</span>
                        <img width="96" height="96" src="https://img.icons8.com/color/96/cancer.png" alt="cancer" />
                        <span className='text-zinc-900 dark:text-white text-xl'>Cancer</span>
                    </div>
                </div>
                <div className='col-span-2 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-pink-500 dark:via-red-500 dark:to-yellow-500'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>hobbies</span>
                        <div className='flex flex-row w-full justify-between px-6 items-center'>
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/fry.png" alt="fry" />
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/headphones.png" alt="headphones" />
                            <img width="96" height="96" src="https://img.icons8.com/color/96/controller.png" alt="controller" />
                        </div>
                        <span className='text-zinc-900 dark:text-white text-xl'>watch anime/movie, walking</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-green-500 dark:to-green-700'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>favorite pet</span>
                        <img width="96" height="96" src="https://img.icons8.com/color/96/dog-paw-print.png" alt="dog-paw-print" />
                        <span className='text-zinc-900 dark:text-white text-xl'>Dog & Cat</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-rose-300 dark:to-rose-500'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>nationality</span>
                        <img width="96" height="96" src="https://img.icons8.com/color/96/vietnam.png" alt="vietnam" className='mx-auto' />
                        <span className='text-zinc-900 dark:text-white text-xl'>VietNam</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-pink-500 dark:via-red-500 dark:to-yellow-500'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>born in</span>
                        <img width="96" height="96" src="https://img.icons8.com/fluency/96/company.png" alt="company" />
                        <span className='text-zinc-900 dark:text-white text-xl'>HCM City</span>
                    </div>
                </div>
                <div className='col-span-2 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-fuchsia-600 dark:to-pink-600'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>I like to eat</span>
                        <div className='flex flex-row w-full justify-between'>
                            <div className='flex flex-col items-center justify-center'>
                                <img width="96" height="96" src="https://img.icons8.com/color/96/sunny-side-up-eggs.png" alt="sunny-side-up-eggs" />
                                <span className='text-zinc-900 dark:text-white text-xl'>FriedEgg</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img width="96" height="96" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Curry-international-food-goofy-flat-kerismaker.png" alt="external-Curry-international-food-goofy-flat-kerismaker" />
                                <span className='text-zinc-900 dark:text-white text-xl'>Curry</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img width="96" height="96" src="https://img.icons8.com/fluency/96/popcorn.png" alt="popcorn" />
                                <span className='text-zinc-900 dark:text-white text-xl'>Popcorn</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 to-indigo-500'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>I'm a</span>
                        <Image src={INFJ} alt='INFJ' className='h-24 w-auto' />
                        <span className='text-zinc-900 dark:text-white text-xl'>INFJ-T</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gradient-to-r dark:from-blue-400 dark:to-emerald-500'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>I can play</span>
                        <img width="96" height="96" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Kalimba-musical-instrument-goofy-flat-kerismaker.png" alt="external-Kalimba-musical-instrument-goofy-flat-kerismaker" className='size-20' />
                        <span className='text-zinc-900 dark:text-white text-xl'>Kalimba</span>
                    </div>
                </div>
            </div> */}
            <div className='grid h-full w-full lg:grid-cols-6 lg:grid-rows-3 gap-3 p-32 pt-6'>
                <div className='flex items-center justify-center col-span-2 row-span-2 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 justify-center items-center'>
                        <Image src={self} alt='my-self' className='h-80 w-auto border-b-2' />
                        <span className='text-zinc-900 dark:text-white text-3xl mt-8 text-nowrap'>Nguyen Minh Thong</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>since</span>
                        <img width="96" height="96" src="https://img.icons8.com/emoji/96/birthday-cake-emoji.png" alt="birthday-cake-emoji" className='mx-auto' />
                        <span className='text-zinc-900 dark:text-white text-xl'>22/06/2003</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>language</span>
                        <img width="96" height="96" src="https://img.icons8.com/fluency/96/language.png" alt="language" />
                        <span className='text-zinc-900 dark:text-white text-xl'>VN, EN, JP</span>
                    </div>
                </div>
                <div className='col-span-2 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>games</span>
                        <div className='flex flex-row w-full justify-between px-4'>
                            <Image src={HSR} alt='HSR' className='h-24 w-auto rounded-lg' />
                            <Image src={ZZZ} alt='ZZZ' className='h-24 w-auto rounded-lg' />
                            <Image src={Arknights} alt='Ark' className='h-24 w-auto rounded-lg' />
                        </div>
                        <span className='text-zinc-900 dark:text-white text-xl'>and Reverse1999</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>zodiac</span>
                        <img width="96" height="96" src="https://img.icons8.com/color/96/cancer.png" alt="cancer" />
                        <span className='text-zinc-900 dark:text-white text-xl'>Cancer</span>
                    </div>
                </div>
                <div className='col-span-2 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>hobbies</span>
                        <div className='flex flex-row w-full justify-between px-6 items-center'>
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/fry.png" alt="fry" />
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/headphones.png" alt="headphones" />
                            <img width="96" height="96" src="https://img.icons8.com/color/96/controller.png" alt="controller" />
                        </div>
                        <span className='text-zinc-900 dark:text-white text-xl'>watch anime/movie, walking</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>favorite pet</span>
                        <img width="96" height="96" src="https://img.icons8.com/color/96/dog-paw-print.png" alt="dog-paw-print" />
                        <span className='text-zinc-900 dark:text-white text-xl'>Dog & Cat</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>nationality</span>
                        <img width="96" height="96" src="https://img.icons8.com/color/96/vietnam.png" alt="vietnam" className='mx-auto' />
                        <span className='text-zinc-900 dark:text-white text-xl'>VietNam</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>born in</span>
                        <img width="96" height="96" src="https://img.icons8.com/fluency/96/company.png" alt="company" />
                        <span className='text-zinc-900 dark:text-white text-xl'>HCM City</span>
                    </div>
                </div>
                <div className='col-span-2 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>I like to eat</span>
                        <div className='flex flex-row w-full justify-between'>
                            <div className='flex flex-col items-center justify-center'>
                                <img width="96" height="96" src="https://img.icons8.com/color/96/sunny-side-up-eggs.png" alt="sunny-side-up-eggs" />
                                <span className='text-zinc-900 dark:text-white text-xl'>FriedEgg</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img width="96" height="96" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Curry-international-food-goofy-flat-kerismaker.png" alt="external-Curry-international-food-goofy-flat-kerismaker" />
                                <span className='text-zinc-900 dark:text-white text-xl'>Curry</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img width="96" height="96" src="https://img.icons8.com/fluency/96/popcorn.png" alt="popcorn" />
                                <span className='text-zinc-900 dark:text-white text-xl'>Popcorn</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>I'm a</span>
                        <Image src={INFJ} alt='INFJ' className='h-24 w-auto' />
                        <span className='text-zinc-900 dark:text-white text-xl'>INFJ-T</span>
                    </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-xl bg-white border-2 dark:bg-gray-800'>
                    <div className='flex flex-col w-full h-full p-5 items-center justify-between'>
                        <span className='text-xl text-zinc-900 dark:text-white'>I can play</span>
                        <img width="96" height="96" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Kalimba-musical-instrument-goofy-flat-kerismaker.png" alt="external-Kalimba-musical-instrument-goofy-flat-kerismaker" className='size-20' />
                        <span className='text-zinc-900 dark:text-white text-xl'>Kalimba</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bento;