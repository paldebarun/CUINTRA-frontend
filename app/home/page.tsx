import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import QuickMenu from './components/quickmenu'
import Slider from './components/slider'
import DiscussionForum from './components/discussionforum'
import Ranking from './components/ranking'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="flex flex-col h-full">
        <Header/>
        <div className="flex flex-row h-full w-full">
            <Sidebar/>
            <div className="flex flex-col justify-center w-full h-screen overflow-scroll pt-[350px] p-6 space-y-6">
                <QuickMenu/>
                <div className="flex flex-row space-x-6">
                    <div className="w-[60%] rounded-[50px] overflow-hidden h-[350px]">
                        <Slider/>
                    </div>
                    <div className="w-[40%] grid place-items-center">
                        <DiscussionForum/>
                    </div>
                </div>
                <div className="flex flex-row space-x-6">
                    <div className="w-[40%] rounded-[50px] overflow-hidden h-[370px]">
                        <Ranking/>
                    </div>
                    <div className="w-[60%] grid place-items-center">
                        <DiscussionForum/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}