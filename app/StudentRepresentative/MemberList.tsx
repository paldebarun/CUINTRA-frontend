"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Input } from "@/components/ui/input"

interface Member {
  approval: boolean; // Example: true
  email: string; // Example: "21BCS1155@cuchd.in"
  entityRef: string; // Example: "66f9948916bc12d78e5c3c64" (MongoDB ObjectId as a string)
  entityType: string; // Example: "Club"
  name: string; // Example: "Debarun"
  otp: string; // Example: "198343"
  otpExpiry: string; // ISO 8601 format for OTP expiry date
  uid: string; // Example: "21bcs1155"
  __v: number; // Version key from MongoDB
  _id: string; // MongoDB ObjectId as a string
  gender:string;
}


interface User {
  entity: string; // ID for the entity
  name: string;   // Name of the student representative
  role: string;   // Role of the individual
}

interface Data {
  user: User;    
}

const ApproveMembers = (user: Data) => {
  const [eventsApproval, setEventsApproval] = useState<Member[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchFunction = async () => {
      const toastId = toast.loading("Please wait ...");
      try {
        const entityRef = user.user.entity;
        const membersOfEntity = await axios.get(`https://intracu-backend-mdl9.onrender.com/api/member/listMembersOfEntityApproved`, {
          params: { entityRef: entityRef }
        });
        
        console.log("this is member : ",membersOfEntity.data.response);

        if (membersOfEntity) {
          setEventsApproval(membersOfEntity.data.response);
        }

        toast.dismiss(toastId);
      } catch (error) {
        toast.error("An error occurred");
        console.log("Error is:", error);
      }
    };

    fetchFunction();
  }, [user.user.entity]);

  // Filter members based on the search query
  const filteredMembers = eventsApproval.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='eventApproval-section shadow-md m-2 rounded-2xl w-full h-[400px]  px-7 py-5'>
      <div className='w-full flex justify-between py-2 px-1'>
        <h2 className="text-2xl font-semibold mb-4">Members List</h2>
        <Input
          placeholder='Search by name'
          className='w-4/12'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table className="w-full bg-white">
        <thead>
          <tr>
            <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Name</th>
            <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Email</th>
            <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Member UID</th>
            <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member, index) => (
            <tr key={index} className="border-b px-2">
              <td className="py-3 text-sm px-6 font-light">{member.name}</td>
              <td className="py-3 text-sm px-6 font-light">{member.email}</td>
              <td className="py-3 text-sm px-6 font-light">{member.uid}</td>
              <td className="py-3 text-sm px-6 font-light">{member.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApproveMembers;
