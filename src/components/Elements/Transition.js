"use client"
import React from 'react'
import { motion } from "framer-motion"
const Transition = () => {
    return (
        <div>
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[70] bg-gray'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-light'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            />
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[50] bg-lightBlue'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            />
        </div>
    )
}

export default Transition