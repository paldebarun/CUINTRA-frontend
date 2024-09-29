"use client"

import Image from 'next/image'
import React from 'react'
import arrow from '../../images/Group 3430.png'

const SecondForm = ({ pagination, setPagination }: { pagination: number, setPagination: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div className='w-full px-3 '>
        <p className='text-lg'>STUDENT SECRETARY/ JOINT SECRETARY DETAILS</p>

        <div className='firstsection flex gap-6 w-w-full mx-auto justify-between py-16'>
            <div className='w-4/12 space-y-3'>
            <p >STUDENT SECRETARY 1 NAME</p>
            <input type="text" className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'/>
            </div>

         <div className='w-4/12 space-y-3'>
         <p>UID</p>
         <input type="text" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>

         <div className='w-4/12 space-y-3'>
         <p>PHONE NO</p>
         <input type="tel" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>
          
        </div>

        <div className='secondsection flex gap-6 w-w-full mx-auto justify-between py-16'>
            <div className='w-4/12 space-y-3'>
            <p >STUDENT SECRETARY 2 NAME</p>
            <input type="text" className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'/>
            </div>

         <div className='w-4/12 space-y-3'>
         <p>UID</p>
         <input type="text" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>

         <div className='w-4/12 space-y-3'>
         <p>PHONE NO</p>
         <input type="tel" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>
          
        </div>

        <div className='thirdsection flex gap-6 w-full mx-auto justify-between py-16'>
            <div className='w-4/12 space-y-3'>
            <p >STUDENT JOINT SECRETARY 1 NAME</p>
            <input type="text" className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'/>
            </div>

         <div className='w-4/12 space-y-3'>
         <p>UID</p>
         <input type="text" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>

         <div className='w-4/12 space-y-3'>
         <p>PHONE NO</p>
         <input type="tel" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>
          
        </div>

        <div className='fourthsection flex gap-6 w-full mx-auto justify-between py-16'>
            <div className='w-4/12 space-y-3'>
            <p >STUDENT JOINT SECRETARY 2 NAME</p>
            <input type="text" className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'/>
            </div>

         <div className='w-4/12 space-y-3'>
         <p>UID</p>
         <input type="text" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>

         <div className='w-4/12 space-y-3'>
         <p>PHONE NO</p>
         <input type="tel" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>
          
        </div>

        <div className='w-full flex justify-end gap-6 px-5 py-16'>
            <div onClick={()=>{setPagination(pagination-1)}} className='bg-[#767676] text-white px-4 py-3 rounded-lg hover:cursor-pointer'>CANCEL</div>
            <div onClick={()=>{setPagination(pagination+1)}} className='bg-[#6296FE] text-white px-4 py-3 rounded-lg gap-2 flex items-center justify-center hover:cursor-pointer'>
                <p>SUBMIT</p>
                <Image src={arrow} alt="arrow" />
            </div>
        </div>


    </div>
  )
}

export default SecondForm