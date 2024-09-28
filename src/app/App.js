"use client"

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react'
import { usePathname } from 'next/navigation';

const App = ({children}) => {
  const pathName = usePathname();
  const aboutMe = pathName === '/about-me';
  return (
    <>
      {!aboutMe && <Header />}
      {children}
      {!aboutMe && <Footer />}
    </>
  )
}

export default App; 
