import React from 'react'

import loginlogo1 from '../images/loginpageicon1.png'
import loginlogo2 from '../images/loginpageicon2.png'
import Image from 'next/image'
import appointmentlogo from '../images/dashboard.png'
import adminlogo from '../images/domain.png'
import secretarylogo from '../images/school.png'
import Link from 'next/link'


const page = () => {
  return (
    <div className='loginpage bg-slate-300  min-h-screen flex flex-col items-center gap-10 py-20 '>
        <div className='flex gap-10 w-full justify-center items-center'>
            <Image alt="logo1" className='w-[150px] h-[50px]' src={loginlogo1} />
            <Image alt="logo2" className='w-[160px] h-[50px]' src={loginlogo2} />

        </div>

        <div className='flex flex-wrap gap-8 overflow-hidden justify-center '>
            <div className=' w-[20rem] h-[27rem] text-white flex text-center flex-col gap-4 items-center  box-border py-7 rounded-3xl ' >
                <div className='w-full space-y-3 border rounded-3xl py-10 px-2 flex flex-col items-center'>
                <Image src={adminlogo} alt="adminlogin" />
                <p className='text-3xl'>Admin</p>
                <p className='text-sm'>College officials and associate dignitaries</p>
                </div>

                <Link href="/login/Admin" className='w-full bg-[#D91F23] font-bold rounded-full py-2 text-2xl'>
                    login
                </Link>
            </div>
            
            <div className='w-[20rem] h-[27rem] text-white flex text-center flex-col gap-4 items-center  box-border py-7 rounded-3xl '>

                <div className='w-full space-y-3 border rounded-3xl py-10 px-2 flex flex-col items-center'>
                <Image src={appointmentlogo} alt="appointmentlogo" />
                <p className='text-3xl'>Appointment Holders</p>
                <p className='text-sm'>For faculty advisor and co advisor</p>

                </div>
                
                <Link href="/login/AppointmentHolder" className='w-full bg-[#D91F23] font-bold rounded-full py-2 text-2xl'>
                    login
                </Link>

            </div>
            
            <div className='w-[20rem] h-[27rem] text-white flex text-center flex-col gap-4 items-center  box-border py-7 rounded-3xl '>

                <div className='w-full space-y-3 border rounded-3xl py-10 px-2 flex flex-col items-center'>
                <Image src={secretarylogo} alt="secretarylogo" />
                <p className='text-3xl'>Secretary</p>
                <p className='text-sm'>For faculty advisor and co advisor</p>
                </div>
                <Link href="/login/secretary" className='w-full bg-[#D91F23] font-bold rounded-full py-2 text-2xl'>
                    login
                </Link>
            </div>
        </div>

        <Link href='/EntityForm' className='bg-[#4587D5] text-xl text-white w-2/12 text-center rounded-3xl py-5 overflow-hidden shadow-slate-400 shadow-2xl'>
        New Entity Proposal
        </Link>
    </div>
  )
}

export default page