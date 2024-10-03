"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Input } from "@/components/ui/input"

const ApproveMembers = (user: any) => {
  const [eventsApproval, setEventsApproval] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchFunction = async () => {
      const toastId = toast.loading("Please wait ...");
      try {
        const entityRef = user.user.entity;
        const membersOfEntity = await axios.get(`http://localhost:4000/api/member/listMembersOfEntityApproved`, {
          params: { entityRef: entityRef }
        });

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
    <div className='eventApproval-section shadow-md rounded-2xl w-full px-7 py-5'>
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
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member, index) => (
            <tr key={index} className="border-b px-2">
              <td className="py-3 text-sm px-6 font-light">{member.name}</td>
              <td className="py-3 text-sm px-6 font-light">{member.email}</td>
              <td className="py-3 text-sm px-6 font-light">{member.uid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApproveMembers;
