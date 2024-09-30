import React from 'react'
import Header from './components/header'
import './styles/landing.css'
import Landing from './components/landing'

type Props = {}

export default function Landing({}: Props) {
  return (
    <>
        <div className="flex flex-col">
            <Header/>
            <Landing/>
        </div>
    </>
  )
}