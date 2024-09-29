"use client"

import React from 'react'
import { useState } from 'react'
import arrow from '../../images/Group 3430.png'
import Image from 'next/image'


const entityTypes=[
    "CLUB",
    "DEPT. SOCIETY",
    "COMMUNITY",
    "PROFF. SOCIETY"
]

const entitycategoryData=[
    "A",
    "B",
    "C",
    "D"
]

const proposedByData=[
    "Student",
    "Faculty"
]

const EntityNature=[
    "Domain Specific (Skill Based) ",
    "Hackathon and Challenge",
    "Invention and Incubation",
    "Social Value and Outreach"
]

const FirstForm = ({ pagination, setPagination }: { pagination: number, setPagination: React.Dispatch<React.SetStateAction<number>> }) => {



    const [checkedEntityType,setEntityType]=useState<string>("CLUB");
    const [entityCategory,setCategory]=useState<string>("A");
    const [proposedBy,setProposedby]=useState<string>("Student")

  return (
    <div className='w-full  '>
        <div className='border-[#99BBFF] border-2 rounded-xl w-10/12 mx-auto px-3 py-2 space-y-3'>
          <p className='font-semibold'> GENERAL POINTS:</p>
          <p>1. Recommendation from the Member of Advisory Board is mandatory</p>
          <p>2. Required Documents: Please refer to the attached Appendix - 1</p>

          <p className='font-semibold'><sup>*</sup>Note: Read the [Co- Curricular Document] and [List of Clubs @CU Document] before filing the form.</p>
        </div>

        <div className='entitytypesection w-10/12 mx-auto space-y-6 py-10'>

            <p className='text-xl text-slate-600'>Types of Entity</p>

            <div className='flex gap-4'>
              {
                entityTypes.map((entity,index)=>(
                    <div onClick={()=>{setEntityType(entity)}} key={index} className={checkedEntityType==entity ? 'bg-[#BDD3FF] hover:cursor-pointer px-4 py-3 rounded-lg':'border-2 border-[#99BBFF] hover:cursor-pointer px-4 py-3 rounded-lg'}>
                        <p>{entity}</p>
                        </div>
                ))
              }
            </div>



        </div>

        <div className='nameanddatesection flex w-10/12 mx-auto justify-between '>
            <div className='w-5/12 space-y-3'>
            <p>PROPOSED NAME</p>
            <input type="text" className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'/>
            </div>

         <div className='w-5/12 space-y-3'>
         <p>PROPOSED DATE</p>
         <input type="date" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
         </div>
          
        </div>

        <div className='entitycategirysection w-10/12 mx-auto py-10 space-y-6'>
            <div className='heading space-y-3'>
                <p>CATEGORY OF ENTITY</p>
                <div className='flex gap-2 items-center'>
                <p className=' rounded-full  px-3 border-slate-300 border-2 text-slate-400'>i</p>
                <p className='text-slate-400'>From club list document</p>
                </div>
            </div>

            <div className='flex gap-4'>
              {
                entitycategoryData.map((category,index)=>(
                    <div onClick={()=>{setCategory(category)}} key={index} className={entityCategory==category ? 'bg-[#BDD3FF] hover:cursor-pointer px-4 py-3 rounded-lg':'border-2 border-[#99BBFF] hover:cursor-pointer px-4 py-3 rounded-lg'}>
                        <p>{category}</p>
                        </div>
                ))
              }
            </div>

        </div>

        <div className='secondlastsection w-10/12 mx-auto flex justify-between'>

            <div className='space-y-3 w-'>
                <p className='heading'>PROPOSED BY</p>
                <div className='flex gap-4'>
              {
                proposedByData.map((proposedby,index)=>(
                    <div onClick={()=>{setProposedby(proposedby)}} key={index} className={proposedBy==proposedby ? 'bg-[#BDD3FF] hover:cursor-pointer px-4 py-3 rounded-lg':'border-2 border-[#99BBFF] hover:cursor-pointer px-4 py-3 rounded-lg'}>
                        <p>{proposedby}</p>
                        </div>
                ))
              }
            </div>
            </div>

            <div className='flex gap-6 w-6/12 items-center'>
            <div className=' space-y-3'>
            <p>NAME</p>
            <input type="text" className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'/>
            </div>

         <div className=' space-y-3'>
         <p>DEPARTMENT</p>
         <input type="text" className='outline-none w-full border-black border-2 rounded-lg py-2 px-3' />
         </div>
            </div>

        </div>

        <div className='lastsection py-10 flex w-10/12 mx-auto justify-between '>
            <div className='w-5/12 space-y-3'>
            <p>CLUSTER</p>
            <input type="text" className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'/>
            </div>

         <div className='w-5/12 space-y-3'>
         <p>INSTITUTE</p>
         <input type="text" className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3' />
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

export default FirstForm