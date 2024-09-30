import React from 'react'
import Header from './components/header'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="flex flex-col">
        <Header/>
    </div>
  )
}