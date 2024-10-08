import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import QuickMenu from './components/quickmenu'
import Slider from './components/slider'
import DiscussionForum from './components/discussionforum'
import Ranking from './components/ranking'
import './styles/home.css'
import Memories from './components/memories'


export default function Home() {
  return (
    <div className="flex flex-col bg-[#FEFEFE]">
        <Header/>
        <div className="flex  h-full w-full">
            <Sidebar/>
            <div className="flex flex-col  overflow-y-scroll justify-start w-full p-6 space-y-6">
                <QuickMenu/>
                <div className="flex flex-row space-x-6 py-4 px-2">
                    <div className="w-[60%] rounded-[50px] shadow-lg overflow-hidden h-[370px]">
                        <Slider/>
                    </div>
                    <div className="w-[40%] grid place-items-center shadow-lg rounded-[50px]">
                        <DiscussionForum/>
                    </div>
                </div>
                <div className="flex flex-row space-x-6 py-4 px-2">
                    <div className="w-[40%] rounded-[50px] shadow-lg overflow-hidden h-[370px]">
                        <Ranking/>
                    </div>
                    <div className="w-[60%] rounded-[50px] shadow-lg overflow-hidden" >
                        <Memories/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}