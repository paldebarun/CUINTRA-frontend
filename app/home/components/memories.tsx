"use client"

import React, { useState, useEffect } from 'react'

import SwiperCont from './swiper'
import axios from 'axios'



export default function Memories() {

    const [events,setEvents]=useState([]);

    useEffect(()=>{

        const fetchEvents=async ()=>{
            try {
                const response = await axios.get('http://localhost:4000/api/event/getallEvents');
                console.log('Fetched events: ', response);
                setEvents(response.data.events);
              } catch (error) {
                console.error('Error fetching events: ', error);
              }


        }

        fetchEvents();


    },[]);

    return (
        <>
            <style jsx>{`
        .grad {
          background: linear-gradient(45deg, #6fa8e7 0%, #194d95 100%);
        }
        .blur-overlay {
          background: linear-gradient(to bottom, transparent, white);
        }
      `}</style>
            <div className="w-full">

                <div className="grad rounded-t-[50px] text-white text-xl font-bold py-3 px-4 inter-medium text-center">
                    Memories and Adventure
                </div>

                <div className="w-full px-4 pt-4 h-[300px] ">
                    <SwiperCont data={events} />
                </div>
            </div>
        </>
    )
}