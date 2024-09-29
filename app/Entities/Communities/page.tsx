
"use client"


import React from 'react'
import EntityBanner from '../EntityBanner'
import EntityDisplay from './EntityDisplay'
import { useEffect,useState } from 'react'

const Page = () => {

  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  // Function to handle screen size
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024); // 1024px is the threshold for desktop view
  };

  useEffect(() => {
    // Check screen size on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
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
        <EntityBanner text="Communities" description="Discover a world of opportunities to explore your passions and make a lasting impact on campus." leftcolor='#45C87A' rightcolor='#146034' />
       

        </div>
        
        <EntityDisplay />

    </div>
  )
}

export default Page