import React from 'react'
import Header from './components/header'
import './styles/landing.css'

type Props = {}

export default function Home({}: Props) {
  return (
    <>
        <div className="flex flex-col">
            <Header/>
        </div>
    </>
  )
}