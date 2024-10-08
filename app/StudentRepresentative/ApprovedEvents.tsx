"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Link from 'next/link'
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// type Checked = DropdownMenuCheckboxItemProps["checked"];

const categoryData = [
  "Hackathon",
  "Seminar",
  "Workshop"
]

const eventTypeData = [
  "flagship",
  "weekly",
  "monthly"
]

interface Event {
  Eventtype: string; // Example: "flagship"
  approval: boolean; // Example: false
  budget: number; // Example: 20000
  category: string; // Example: "Hackathon"
  date: {
    startDate: string; // ISO 8601 format for the start date
    endDate: string; // ISO 8601 format for the end date
  };
  entity: {
    type: string; // Example: "club"
    id: string; // MongoDB ObjectId as a string
  };
  featured: boolean; // Example: false
  imageUrl: string; // URL to the event image
  name: string; // Example: "hackfest"
  organizationLevel: string; // Example: "Open for all"
  organizer: {
    type: string; // Example: "Department"
    id: string; // MongoDB ObjectId as a string
  };
  venue: string; // Example: "c2"
  __v: number; // Version key from MongoDB
  _id: string; // MongoDB ObjectId as a string
}

interface User {
  entity: string; // ID for the entity
  name: string;   // Name of the student representative
  role: string;   // Role of the individual
}

interface Data {
  user: User;    
}

const ApproveEvents = (user: Data) => {

  console.log("user in aprovedEvents : ",user);
  const router = useRouter();
  const [eventsApproval, setEventsApproval] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]); // To store filtered events
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);

  useEffect(() => {
    const fetchFunction = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      const toastId = toast.loading("Please wait ...");

      try {
        const entityRef = user.user.entity;
        const events = await axios.get(`https://intracu-backend-mdl9.onrender.com/api/event/getapprovedByID`, {
          params: { entityRef: entityRef }
        });

        console.log("events : ",events.data.events);

        if (events) {
          setEventsApproval(events.data.events);
          setFilteredEvents(events.data.events); // Initially, set all events as filtered
        }

        toast.dismiss(toastId);
      } catch (error) {
        toast.error("An error occurred");
        console.log("Error is: ", error);
      }
    }

    fetchFunction();
  }, [user.user.entity, router]);

  const sendInvite = async (entityRef: string, eventRef: string) => {
    const toastId = toast.loading('Sending...')
    try {
      const response = await axios.post(`https://intracu-backend-mdl9.onrender.com/api/member/inviteMembersByEntity`, {
        entityRef: entityRef,
        eventRef: eventRef
      });
      console.log(response);
      toast.dismiss(toastId);
      toast.success('Invitation sent to all members');
    } catch (error) {
      toast.dismiss(toastId);
      toast.error('Could not send invite');
      console.log("This is invite error", error)
    }
  }

  // Filter events when category or event type changes
  useEffect(() => {
    let filtered = eventsApproval;

    if (selectedCategory) {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    if (selectedEventType) {
      filtered = filtered.filter(event => event.Eventtype === selectedEventType);
    }

    setFilteredEvents(filtered); // Update the filtered events state
  }, [selectedCategory, selectedEventType, eventsApproval]);

  return (
    <div className='ApprovedEvents-section shadow-md rounded-2xl w-full overflow-x-auto h-[400px] m-2 px-7 py-5'>
      <div className='w-full flex justify-between'>
        <h2 className="text-2xl font-semibold mb-4">Events</h2>

        <div className='flex gap-3'>
          {/* Category Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Category</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categoryData.map((category, index) => (
                <DropdownMenuCheckboxItem
                  key={index}
                  checked={selectedCategory === category}
                  onCheckedChange={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Event Type Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Event Type</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Event Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {eventTypeData.map((type, index) => (
                <DropdownMenuCheckboxItem
                  key={index}
                  checked={selectedEventType === type}
                  onCheckedChange={() => setSelectedEventType(type)}
                >
                  {type}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

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
          {filteredEvents.map((member, index) => (
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

              <button onClick={() => { sendInvite(user.user.entity, member._id) }} className='bg-[#F0F9FF] text-[#89868D] text-sm px-3 py-2 rounded-xl border border-[#0095FF]'>
                Invite
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApproveEvents;
