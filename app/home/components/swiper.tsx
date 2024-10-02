"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import '../styles/home.css';

import { Autoplay } from 'swiper/modules';



export default function SwiperCont(data:any) {

  console.log("data is : ",data);
  
  

  return (
  
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        {
          data.data.map((ele:any,index:any)=>(
            <SwiperSlide key={index}>
            <Image
                  src={ele.imageUrl}
                  alt={`Memory ${index}`}
              
                  width={1000} 
                  height={1000} 
                  className='h-[275px] w-[275px] object-cover rounded-3xl'
                
                />
        </SwiperSlide>
          ))
        }
        
      </Swiper>

  );
}