'use client'

import { useState, useEffect } from 'react'
// import Image from 'next/image'
import '../../landing/styles/landing.css'
import axios from 'axios'


// type SlideData = {
//   image: string
//   title: string
//   description: string
// }

// const slides: SlideData[] = [
//   {
//     image: '/landing-image.png',
//     title: 'CU FEST <span class="text-[#FBB03B]">2024</span>',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus, tellus ac volutpat sollicitudin, risus nibh facilisis sapien, eu consectetur arcu ipsum in ipsum.',
//   },
//   {
//     image: '/landing-image-2.png',
//     title: 'CU FEST <span class="text-[#FBB03B]">Events</span>',
//     description: 'Discover exciting performances, workshops, and cultural showcases at CU FEST 2024. Join us for an unforgettable experience of talent and creativity.',
//   },
//   {
//     image: '/landing-image-3.png',
//     title: 'CU FEST <span class="text-[#FBB03B]">Highlights</span>',
//     description: 'Relive the best moments from previous CU FEST editions. Get ready for an even more spectacular celebration of art, music, and culture this year.',
//   },
//   {
//     image: '/landing-image.png',
//     title: 'CU FEST <span class="text-[#FBB03B]">2024</span>',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus, tellus ac volutpat sollicitudin, risus nibh facilisis sapien, eu consectetur arcu ipsum in ipsum.',
//   },
//   {
//     image: '/landing-image-2.png',
//     title: 'CU FEST <span class="text-[#FBB03B]">Events</span>',
//     description: 'Discover exciting performances, workshops, and cultural showcases at CU FEST 2024. Join us for an unforgettable experience of talent and creativity.',
//   },
//   {
//     image: '/landing-image-3.png',
//     title: 'CU FEST <span class="text-[#FBB03B]">Highlights</span>',
//     description: 'Relive the best moments from previous CU FEST editions. Get ready for an even more spectacular celebration of art, music, and culture this year.',
//   },
// ]

interface Event {
  eventType: string;     
  approval: boolean;     
  category: string;      
  date: string;          
  entity: {
    type: string;        
    id: string;         
  };
  featured: boolean;    
  imageUrl: string;      
  name: string;         
  organizer: {
    type: string;       
    id: string;         
  };
  venue: string;      
  __v: number;        
  _id: string;           
}

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [slides, setSlidesData] = useState<Event[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 8000); // 8 seconds interval
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://intracu-backend-mdl9.onrender.com/api/event/getallEvents');
        console.log('Fetched events: ', response);
        setSlidesData(response.data.events);
      } catch (error) {
        console.error('Error fetching events: ', error);
      }
    };

    fetchEvents();
  }, []);

  const changeSlide = (index: number) => {
    if (index !== currentSlide && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTransitioning(false);
      }, 500);
    }
  };

  return (
    <section
      className="w-full h-full  flex flex-row justify-evenly relative overflow-hidden"
      style={{
        backgroundImage: `url(${slides.length > 0 ? slides[currentSlide].imageUrl : 'https://res.cloudinary.com/dnkaxyuf3/image/upload/v1723988879/cu_work/tmp-1-1723988877518_pdjlbs.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      {slides.length > 0 && (
        <div className="relative z-10 flex flex-row justify-evenly items-end w-full">
         
          <div className="flex flex-col justify-center items-start h-full pb-4">
            <h3
              className="inter-bold text-white text-4xl"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].name }}
            >
            
            </h3>
            <p className="text-white text-base inter-medium max-w-[340px] text-justify my-6">
              {slides[currentSlide].venue}
            </p>
            <button className="inter-semibold text-white text-base px-4 py-2 rounded-xl shadow-md bg-[#FBB03B] transition-all hover:bg-[#fff] hover:text-[#FBB03B]">
              Explore More
            </button>
          </div>
        </div>
      )}
      <div className="absolute  bottom-5 left-1/2 transform -translate-x-1/2 flex z-20">
        {slides.map((_, index) => {
          const offset = index - currentSlide;
          const translateX = offset * 20; // Adjust this value to change the spacing between circles
          return (
            <button
              key={index}
              className={`rounded-full cursor-pointer z-20 transition-all duration-300 ${
                currentSlide === index
                  ? 'w-3 h-3 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75'
              }`}
              style={{
                transform: `translateX(${translateX}px)`,
              }}
              onClick={() => changeSlide(index)}
            ></button>
          );
        })}
      </div>
    </section>
  );
}
