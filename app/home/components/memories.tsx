"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const images = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
]

export default function Memories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-blue-500 text-white text-xl font-bold py-3 px-4 rounded-t-lg text-center">
        Memories & Adventures
      </div>
      <div 
        className="bg-gray-100 p-4 rounded-b-lg overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Memory ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}