import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import QuickMenu from './components/quickmenu'
import Slider from './components/slider'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="flex flex-col">
        <Header/>
        <div className="flex flex-row h-full w-full">
            <Sidebar/>
            <div className="flex flex-col justify-center h-full w-full p-6 space-y-6">
                <QuickMenu/>
                <div className="flex flex-row">
                    <div className="w-2/3">
                        <Slider/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}