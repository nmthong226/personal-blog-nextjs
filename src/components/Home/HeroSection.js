import Image from 'next/image'
import React from 'react'
import avatar from "../../../public/avatar.jpg"

const HeroSection = () => {
  return (
    <section className='md:h-[75vh] grid grid-cols-1 lg:grid-cols-12 items-center justify-center text-dark dark:text-light
    border rounded-xl border-dark mx-5 lg:mx-10'>
        <div className='col-span-7 px-10'>
            <h1 className='text-dark text-4xl lg:text-6xl font-extrabold mb-4'>Hello, I'm Thong Nguyen</h1>
            <p className='text-dark text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu aliquet enim. In hac habitasse platea dictumst. 
                Nam metus nibh, ultrices vel congue ac, pharetra in enim. Sed sit amet sem ut orci ullamcorper faucibus. 
            </p>
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