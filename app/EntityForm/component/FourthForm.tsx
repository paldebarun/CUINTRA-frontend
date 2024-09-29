"use client"

import React from 'react'
import Image from 'next/image'
import arrow from '../../images/Group 3430.png'


const FourthForm = ({ pagination, setPagination }: { pagination: number, setPagination: React.Dispatch<React.SetStateAction<number>> }) => {

    const SubmitHanlder=async (e:any)=>{
      e.preventDefault();

    }


  return (
    <div className='w-full flex justify-end gap-6 px-5 py-16'>
    <div onClick={()=>{setPagination(pagination-1)}}  className='bg-[#767676] text-white px-4 py-3 rounded-lg hover:cursor-pointer'>CANCEL</div>
    <div onClick={SubmitHanlder} className='bg-[#6296FE] text-white px-4 py-3 rounded-lg gap-2 flex items-center justify-center hover:cursor-pointer'>
        <p>SUBMIT</p>
        <Image src={arrow} alt="arrow" />
    </div>
</div>
  )
}

export default FourthForm