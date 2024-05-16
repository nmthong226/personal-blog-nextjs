import AboutCoverSection from '@/components/About/AboutCoverSection'
import Skills from '@/components/About/Skills'
import ContactForm from '@/components/Contact/ContactForm'
import LottieAnimation from '@/components/Contact/LottieAnimation'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "About me",
    description: `Here are some details about myself`,
}

const About = () => {
    return (
        <div>
            <AboutCoverSection />
            <Skills />
            <section className='w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center text-dark dark:text-light'>
                <div className='w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8'>
                    <h2 className='font-bold capitalize text-2xl xs:text-3xl sm:text-4xl mt-12 sm:mt-0'>
                        Let's connect!
                    </h2>
                    <ContactForm />
                </div>
                <div className='inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-l-2 border-solid border-dark dark:border-light'>
                    <LottieAnimation />
                </div>
            </section>
        </div>
    )
}

export default About