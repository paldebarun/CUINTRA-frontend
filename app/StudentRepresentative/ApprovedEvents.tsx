"use client"

import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Link from 'next/link'

const ApproveEvents = (user:any) => {

  const router=useRouter();
  const [eventsApproval, setEventsApproval] = useState<any[]>([]);
  

   
  useEffect(() => {
   
   const fetchFunction=async ()=>{

    const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      const toastId = toast.loading("Please wait ...");
    
    try{
     
       
        
          const entityRef = user.user.entity;

          console.log("this is entity ref : ",entityRef);


          const events = await axios.get(`http://localhost:4000/api/event/getUnapprovedByID`, {
            params: { entityRef: entityRef }
            
          });

          console.log("required events : ",events.data.events);



          if(events){
            
            setEventsApproval(events.data.events);

          }

         toast.dismiss(toastId);

    }
    catch(error){
     
     toast.error("an error occured");
     console.log("error is : ",error);
    }

   }

   fetchFunction();
    
  }, []);


 const sendInvite=async (entityRef:any,eventRef:any)=>{
    console.log(entityRef,eventRef);
    const toastId=toast.loading('sending..')
    try{
     
        const events = await axios.post(`http://localhost:4000/api/member/inviteMembersByEntity`, {
            entityRef: entityRef,
            eventRef: eventRef
        });

          console.log("invitation response : ",events);

          toast.dismiss(toastId);
        toast.success('Invitation is sent to all members');

    }
    catch(error){
        toast.dismiss(toastId);
        toast.error('could not send invite');
        console.log("this is invite error",error)
    }
 }
 
  
  

  return (
    <div className='ApprovedEvents-section shadow-md rounded-2xl w-full overflow-x-auto h-[400px] m-2 px-7 py-5'>
    <h2 className="text-2xl font-semibold mb-4">Events</h2>
    <table className="w-screen bg-white">
      <thead>
        <tr>

          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Event Type</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Name</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Poster</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Budget</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Category</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Start date</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">End date</th>  
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Organisation level</th> 
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Venue</th> 
        </tr>
      </thead>
      <tbody>
        {eventsApproval.map((member, index) => (
          <tr key={index} className="border-b px-2">
            <td className="py-3 text-sm px-6 font-light">{member.Eventtype}</td>
            <td className="py-3 text-sm px-6 font-light">{member.name}</td>
            <Link href={`${member.imageUrl}`}>
            <td className="py-3 text-sm px-6 font-light text-sky-500 underline">See Poster</td>
            </Link>
            <td className="py-3 text-sm px-6 font-light">₹{member.budget}</td>
            <td className="py-3 text-sm px-6 font-light">{member.category}</td>
            <td className="py-3 text-sm px-6 font-light">{member.date.startDate}</td>
            <td className="py-3 text-sm px-6 font-light">{member.date.endDate}</td>
            
            <td className="py-3 text-sm px-6 font-light">{member.organizationLevel}</td>
            <td className="py-3 text-sm px-6 font-light">{member.venue}</td>

            <button onClick={()=>{sendInvite(user.user.entity,member._id)}} className='bg-[#F0F9FF] text-[#89868D] text-sm px-3 py-2 rounded-xl border border-[#0095FF]'>
                Invite
            </button>
           

            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ApproveEvents