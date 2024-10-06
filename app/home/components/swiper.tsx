"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import '../styles/home.css';

import { Autoplay } from 'swiper/modules';

interface Event {
  Eventtype: string; // Example: "flagship"
  approval: boolean; // Example: false
  budget: number; // Example: 20000
  category: string; // Example: "Hackathon"
  date: string;
  entity: {
    type: string; // Example: "club"
    id: string; // MongoDB ObjectId as a string
  };
  featured: boolean; // Example: false
  imageUrl: string; // URL to the event image
  name: string; // Example: "hackfest"
  organizationLevel: string; // Example: "Open for all"
  organizer: {
    type: string; // Example: "Department"
    id: string; // MongoDB ObjectId as a string
  };
  venue: string; // Example: "c2"
  __v: number; // Version key from MongoDB
  _id: string; // MongoDB ObjectId as a string
}

interface Data{
  data:Event[];
}

export default function SwiperCont(data:Data) {

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
          data.data.map((ele:Event,index:number)=>(
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