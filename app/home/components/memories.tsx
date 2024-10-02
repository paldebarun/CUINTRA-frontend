"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SwiperCont from './swiper'

const images = [
    '/memories.png',
    '/memories.png',
    '/memories.png',
    '/memories.png',
]

export default function Memories() {

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
                <div className="flex px-4 pt-4 h-[300px]">
                    <SwiperCont />
                </div>
            </div>
        </>
    )
}