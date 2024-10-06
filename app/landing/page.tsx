import React from 'react'
import Header from './components/header'
import './styles/landing.css'
import Landing from './components/landing'



export default function LandingPage() {
  return (
    <>
        <div className="flex flex-col">
            <Header/>
            <Landing/>
        </div>
    </>
  )
}