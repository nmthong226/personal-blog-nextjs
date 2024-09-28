import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImg from '../../../public/logo.png'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark dark:text-light'>
        <div className='w-8 md:w-10 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4'>
            <Image src={profileImg} alt='nmthong226' className='w-full h-auto rounded-full' sizes='33vw' priority/>
        </div>
        <span className='font-bold dark:font-semibold text-lg md:text-xl'>
            nmthong226
        </span>
    </Link>
  )
}

export default Logo;