import LottieAnimation from '@/components/Contact/LottieAnimation'
import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center'>
        <div className='inline-block w-2/5 h-full border-r-2 border-solid border-dark'>
            <LottieAnimation/>
        </div>
        <div>
            contact form
        </div>
    </section>
  )
}

export default Contact