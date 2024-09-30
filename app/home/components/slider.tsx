'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import '../../landing/styles/landing.css'

type SlideData = {
  image: string
  title: string
  description: string
}

const slides: SlideData[] = [
  {
    image: '/landing-image.png',
    title: 'CU FEST <span class="text-[#FBB03B]">2024</span>',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus, tellus ac volutpat sollicitudin, risus nibh facilisis sapien, eu consectetur arcu ipsum in ipsum.',
  },
  {
    image: '/landing-image-2.png',
    title: 'CU FEST <span class="text-[#FBB03B]">Events</span>',
    description: 'Discover exciting performances, workshops, and cultural showcases at CU FEST 2024. Join us for an unforgettable experience of talent and creativity.',
  },
  {
    image: '/landing-image-3.png',
    title: 'CU FEST <span class="text-[#FBB03B]">Highlights</span>',
    description: 'Relive the best moments from previous CU FEST editions. Get ready for an even more spectacular celebration of art, music, and culture this year.',
  },
  {
    image: '/landing-image-3.png',
    title: 'CU FEST <span class="text-[#FBB03B]">Highlights</span>',
    description: 'Relive the best moments from previous CU FEST editions. Get ready for an even more spectacular celebration of art, music, and culture this year.',
  },
  {
    image: '/landing-image-3.png',
    title: 'CU FEST <span class="text-[#FBB03B]">Highlights</span>',
    description: 'Relive the best moments from previous CU FEST editions. Get ready for an even more spectacular celebration of art, music, and culture this year.',
  },
  {
    image: '/landing-image-3.png',
    title: 'CU FEST <span class="text-[#FBB03B]">Highlights</span>',
    description: 'Relive the best moments from previous CU FEST editions. Get ready for an even more spectacular celebration of art, music, and culture this year.',
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length)
    }, 8000) // 8 seconds interval
    return () => clearInterval(timer)
  }, [currentSlide])

  const changeSlide = (index: number) => {
    if (index !== currentSlide && !transitioning) {
      setTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setTransitioning(false)
      }, 500)
    }
  }

  return (
    <section 
      className="w-full h-[300px] bg flex flex-row justify-evenly relative overflow-hidden"
    //   style={{
    //     backgroundImage: `url(${slides[currentSlide].image})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     transition: 'background-image 0.5s ease-in-out'
    //   }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-row justify-evenly items-end w-full">
        <Image src='/landing-image.png' alt='landing' width={700} height={700} className='h-[95%] w-auto'/>
        <div className="flex flex-col justify-center items-start h-full">
          <h3 className='inter-bold text-white text-6xl' dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}></h3>
          <p className="text-white text-lg inter-medium max-w-[550px] my-12">{slides[currentSlide].description}</p>
          <button className='inter-semibold text-white text-lg px-8 py-3 rounded-xl shadow-md bg-[#FBB03B] transition-all hover:bg-[#fff] hover:text-[#FBB03B]'>Explore More</button>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex z-20">
        {slides.map((_, index) => {
          const offset = index - currentSlide
          const translateX = offset * 20 // Adjust this value to change the spacing between circles
          return (
            <button
              key={index}
              className={`rounded-full cursor-pointer z-20 transition-all duration-300 ${
                currentSlide === index ? 'w-4 h-4 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
              style={{
                transform: `translateX(${translateX}px)`,
              }}
              onClick={() => changeSlide(index)}
            ></button>
          )
        })}
      </div>
    </section>
  )
}