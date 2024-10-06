"use client"

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

const OngoingEvents = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [slides, setSlidesData] = useState<any[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            changeSlide((currentSlide + 1) % slides.length);
        }, 8000); // 8 seconds interval
        return () => clearInterval(timer);
    }, [currentSlide, slides.length]);

    const changeSlide = (index: number) => {
        if (index !== currentSlide && !transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentSlide(index);
                setTransitioning(false);
            }, 500);
        }
    };

    useEffect(() => {
        const fetchEvents = async () => {
            const entityRef = localStorage.getItem('entity');
            console.log("this is entity ref : ", entityRef);

            try {
                const events = await axios.get(`http://localhost:4000/api/event/getAllEventsById`, {
                    params: { entityRef: entityRef },
                });

                console.log("this is event : ", events);

                setSlidesData(events.data.events);
            } catch (error) {
                toast.error('error while fetching ongoing events');
                console.log("this is error : ", error);
            }
        }

        fetchEvents();
    }, []);

    const isRegistrationOpen = (startDate: string) => {
        const eventStartDate = new Date(startDate).getTime();
        return eventStartDate > Date.now(); // If start date is in the future
    }

    return (
        <section
            className="w-full rounded-2xl mx-auto h-96 flex flex-row justify-evenly relative overflow-hidden"
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

                        {
                            isRegistrationOpen(slides[currentSlide].date.startDate) ? (
                                <button className="inter-semibold text-white text-base px-4 py-2 rounded-xl shadow-md bg-[#FBB03B] transition-all hover:bg-[#fff] hover:text-[#FBB03B]">
                                    Register now
                                </button>
                            ) : (
                                <button className="inter-semibold text-white text-base px-4 py-2 rounded-xl shadow-md bg-[#FBB03B] transition-all hover:bg-[#fff] hover:text-[#FBB03B]">
                                    Registration closed
                                </button>
                            )
                        }
                    </div>
                </div>
            )}
            <div className="absolute bottom-5 w-full  justify-center left-1/2 transform -translate-x-1/2 flex z-20">
                {slides.map((_, index) => {
                    const offset = index - currentSlide;
                    const translateX = offset * 20;
                    return (
                        <button
                            key={index}
                            className={`rounded-full cursor-pointer z-20 transition-all duration-300 ${currentSlide === index ? 'w-3 h-3 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/75'}`}
                            style={{
                                transform: `translateX(${translateX}px)`,
                            }}
                            onClick={() => changeSlide(index)}
                        ></button>
                    );
                })}
            </div>
        </section>
    )
}

export default OngoingEvents;
