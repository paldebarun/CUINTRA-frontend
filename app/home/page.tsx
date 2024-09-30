import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="flex flex-col">
        <Header/>
        <div className="flex flex-row h-full w-full">
            <Sidebar/>
        </div>
    </div>
  )
}