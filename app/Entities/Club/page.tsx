
"use client"
import React from 'react'
import EntityBanner from '../EntityBanner'
import EntityDisplay from './EntityDisplay'
import { useState,useEffect } from 'react';




const Page = () => {

  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024); // 1024px is the threshold for desktop view
  };


  useEffect(() => {
 
    handleResize();


    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <p className='text-xl font-bold'>Please open this page on a desktop for the best experience.</p>
      </div>
    );
  }
  
     
   
  return (
    <div className='w-9/12 flex py-10'>
        <div className='w-5/12'>
        <EntityBanner text="club" description="Discover a world of opportunities to explore your passions and make a lasting impact on campus." leftcolor='#EE8585' rightcolor='#7A180B' />
       

        </div>
        
        <EntityDisplay  />

    </div>
  )
}

export default Page