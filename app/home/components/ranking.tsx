import React from 'react'
import Image from 'next/image'

type Props = {}

export default function ranking({}: Props) {
  return (
    <div className="w-full">
        <Image src='/ranking.png' alt="ranking" height={100} width={100} />
    </div>
  )
}