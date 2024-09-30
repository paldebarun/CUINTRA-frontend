import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import QuickMenu from './components/quickmenu'
import Slider from './components/slider'
import DiscussionForum from './components/discussionforum'

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
                    <div className="w-[60%] rounded-3xl overflow-hidden bg-red-600 h-[350px]">
                        <Slider/>
                    </div>
                    <div className="w-[40%] grid place-items-center">
                        <DiscussionForum/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}