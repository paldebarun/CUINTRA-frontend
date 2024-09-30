"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <Image src="/culogo.png" alt="Chandigarh University Logo" width={100} height={100} />
        <Image src="/qsranking.png" alt="NAAC Grade A+" width={100} height={80} />
        <Image src="/cuactivitieslogo.png" alt="NAAC Grade A+" width={100} height={80} />
        
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative ">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-inner shadow-[inset 2px 4px 4px rgba(0, 0, 0, 0.95)] focus:outline-none poppins-regular"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-[#363636] hover:text-gray-800">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
        <button className="text-[#363636] border-[#363636] px-4 py-1 rounded-full border transition duration-300">
          Log in
        </button>
      </div>
    </header>
  )
}