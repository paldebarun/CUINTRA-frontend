"use client"

import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const ApproveMembers = (user:any) => {

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
          const membersOfEntity = await axios.get(`http://localhost:4000/api/member/listMembersOfEntity`, {
            params: { entityRef: entityRef }
            
          });

          console.log("this is member : ",membersOfEntity);

          if(membersOfEntity){
            const sortedMembers = membersOfEntity.data.response.sort((a: any, b: any) => a.approval === b.approval ? 0 : a.approval ? 1 : -1);
            setEventsApproval(sortedMembers);

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



  const handleMemberApproval = async (memberId:any) => {
   const toastId= toast.loading('approving member ...')
    try {
      await axios.post(`http://localhost:4000/api/member/approve`, null, {
        params: { memberId: memberId },
      });
      
      setEventsApproval(prevState => {
        
        const updatedMembers = prevState.map(member => {
          if (member._id === memberId) {
            return { ...member, approval: true }; 
          }
          return member;
        });
  
       
        const sortedMembers = updatedMembers.sort((a: any, b: any) => a.approval === b.approval ? 0 : a.approval ? 1 : -1);
  
        return sortedMembers;
      });
      toast.success('Member approved successfully!');
    } catch (error) {
      toast.error('Failed to approve the event. Please try again.');
    }
    finally{
        toast.dismiss(toastId);
    }
  };

  const handleMemberRejection = async (memberId:any) => {

    const toastId= toast.loading('rejecting member ...')
    try {
      await axios.post(`http://localhost:4000/api/member/reject`, null, {
        params: { memberId: memberId },
      });

      setEventsApproval(prevState => prevState.filter(member => member._id !== memberId));

      
      toast.success('Member Rejected successfully!');
    } catch (error) {
      toast.error('Failed to reject the member. Please try again.');
    }
    finally{
        toast.dismiss(toastId);
    }
  };
  
  

  return (
    <div className='eventApproval-section shadow-md rounded-2xl w-full h-[400px] m-2 px-7 py-5'>
    <h2 className="text-2xl font-semibold mb-4">Member Approval</h2>
    <table className="w-full bg-white">
      <thead>
        <tr>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Name</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Email</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Member UID</th>
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Approve</th> 
          <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Reject</th> 
        </tr>
      </thead>
      <tbody>
        {eventsApproval.map((member, index) => (
          <tr key={index} className="border-b px-2">
            <td className="py-3 text-sm px-6 font-light">{member.name}</td>
            <td className="py-3 text-sm px-6 font-light">{member.email}</td>
            <td className="py-3 text-sm px-6 font-light">{member.uid}</td>
            <td className="py-3 px-6">
             {member.approval===false ? <button className="bg-[#F0F9FF] text-[#89868D] text-sm px-3 py-2 rounded-xl border border-[#0095FF]" onClick={() => handleMemberApproval(member._id)} >
                Approve
              </button>:
               <div className="bg-[#F0F9FF] text-center text-[#89868D] text-sm px-3 py-2 rounded-xl border border-[#0095FF]">
                  Approved
               </div>
              
            }
            </td>
            <td className="py-3 px-6">
             {member.approval===false && <button className="bg-[#F0F9FF] text-[#89868D] text-sm px-3 py-2 rounded-xl border border-[#0095FF]" onClick={() => handleMemberRejection(member._id)} >
                Reject
              </button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ApproveMembers