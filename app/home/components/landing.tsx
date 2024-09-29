import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Landing({}: Props) {
  return (
    <section className='w-full min-h-screen bg flex flex-row justify-evenly'>
        <Image src='/landing.png' alt='landing' width={1000} height={1000} className='h-8 w-auto'/>
    </section>
  )
}