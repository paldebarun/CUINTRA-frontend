import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




export default function Header() {
    return (

        <header className="bg-[#151515]/[.25] z-20 backdrop-blur-[520.83px] text-white p-4 absolute top-0 left-0 w-full px-6">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Image src="/culogo.png" alt='cu-logo' width={1000} height={1000} className='h-8 w-auto' />
                    <Image src="/logo2.png" alt='qsranking-logo' width={1000} height={1000} className='h-8 w-auto'/>
                    <Image src="/logo3.png" alt='cuactivities-logo' width={1000} height={1000} className='h-8 w-auto'/>
                   
                </div>
                <nav className="flex items-center dm-sans-regular">
                    <Link href="/home" className="hover:underline mx-3 text-lg">Home</Link>
                    <Link href="/home" className="hover:underline mx-3 text-lg">Events</Link>
                    <Link href="/home" className="hover:underline mx-3 text-lg">Activities</Link>
                    <Link href="/Entities/Club" className="hover:underline mx-3 text-lg">Entities</Link>
                    <Link href='/login' className="bg-transparent border border-white px-5 py-1 rounded-full hover:bg-white hover:text-[#D91F23] transition-colors ml-20 mr-4 pb-2">
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    )
}