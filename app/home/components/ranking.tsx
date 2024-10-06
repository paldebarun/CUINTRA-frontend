import React from 'react'
import Image from 'next/image'



export default function Ranking() {
  return (
    <div className="w-full h-full">
        <Image src='/ranking.png' alt="ranking" layout='cover' width={1000} height={1000} className='h-full w-full' />
    </div>
  )
}