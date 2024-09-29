import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Header({ }: Props) {
    return (

        <header className="bg-[#151515]/[.15] backdrop-blur-[520.83px] text-white p-4 absolute top-0 left-0 w-full">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Image src="/culogo.png" alt='cu-logo' width={1000} height={1000} className='h-8 w-auto' />
                    <Image src="/qsranking.png" alt='qsranking-logo' width={1000} height={1000} className='h-8 w-auto'/>
                    <Image src="/cuactivitieslogo.png" alt='cuactivities-logo' width={1000} height={1000} className='h-8 w-auto'/>
                   
                </div>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Events</a>
                    <a href="#" className="hover:underline">Activities</a>
                    <a href="#" className="hover:underline">Entities</a>
                    <button className="bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-red-800 transition-colors">
                        Login
                    </button>
                </nav>
            </div>
        </header>
    )
}
