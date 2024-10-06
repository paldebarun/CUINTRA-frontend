"use client"
import Link from 'next/link';

import React from 'react'
import home from '../images/Home.png'
import ManageEntities from '../images/Chart.png'
import Image from 'next/image'
import EventApproval from '../images/Document.png'
import Notification from '../images/Message.png'
import profile from '../images/Profile.png'
import setting from '../images/Info-Square.png'
import signup from '../images/Logout.png'
import search from '../images/XMLID 223.png'
import bellicon from '../images/Group 1000002785.png'
import rectanglehollow from '../images/Rectangle 907.png'
import rectanglefilled from '../images/Rectangle 1393.png'
import arrowhead from '../images/Group 21861.png'
import { Calendar } from "@/components/ui/calendar"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
// import { LineChart, Line, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import plus from '../images/Group 1000002786.png'
import {
  // ChartConfig,
  // ChartContainer,
  // ChartLegend,
  // ChartLegendContent,
  // ChartTooltip,
  // ChartTooltipContent,
} from "@/components/ui/chart"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


interface User{
  name:string;
  role:string;
}

interface eventCounts{
  flagship:number;
  monthly:number;
  weekly:number;
}

// const chartConfig = {
//   Dept_Societies: {
//     label: "Dept.Societies",
//     color: "#54B8FF",
//   },
//   Clubs: {
//     label: "Clubs",
//     color: "#3CD856",
//   },
//   Prof_Societies: {
//     label: "Prof.Societies",
//     color: "#FF947A",
//   },
//   Communities: {
//     label: "Communities",
//     color: "#BF83FF",
//   },
// } satisfies ChartConfig;


const sidebarData=[
    {
        icon:home,
        text:"Home",
        link:"/home"
    },
    {
        icon:ManageEntities,
        text:"Manage Entities",
        link:"/Entities/Club"
    },
    {
        icon:EventApproval,
        text:"Event Approval",
        
        link:"/home"
    },
    {
        icon:Notification,
        text:"Notifications",
        link:"/home"
    },
    {
        icon:profile,
        text:"Profile",
        link:"/home"
    },
    {
        icon:setting,
        text:"Setting",
        link:"/home"
    },
    {
        icon:signup,
        text:"Signup",
        link:"/login"
    },
    
]




interface ScheduleEvent {
  start: string;
  end: string;
  subject: string;
  location?: string;
  organizer?: string;
}

// const numberOfEvents = [
//   { month: 'Jan', flagship: 2, monthly: 4, weekly: 8 },
//   { month: 'Feb', flagship: 1, monthly: 3, weekly: 10 },
//   { month: 'Mar', flagship: 3, monthly: 5, weekly: 12 },
//   { month: 'Apr', flagship: 2, monthly: 4, weekly: 9 },
//   { month: 'May', flagship: 4, monthly: 6, weekly: 15 },
//   { month: 'Jun', flagship: 3, monthly: 5, weekly: 11 },
//   { month: 'Jul', flagship: 2, monthly: 4, weekly: 13 },
//   { month: 'Aug', flagship: 5, monthly: 7, weekly: 16 },
//   { month: 'Sep', flagship: 4, monthly: 6, weekly: 14 },
//   { month: 'Oct', flagship: 3, monthly: 5, weekly: 12 },
//   { month: 'Nov', flagship: 2, monthly: 4, weekly: 10 },
//   { month: 'Dec', flagship: 6, monthly: 8, weekly: 18 },
// ];


// const scheduledData: { [key: string]: ScheduleEvent[]} = {
//   "2024-09-21": [
//     {
//       "start": "9:00",
//       "end": "9:30",
//       "subject": "Interview Call for Freshers"
//     },
//     {
//       "start": "10:00",
//       "end": "10:30",
//       "subject": "Interview Call for Freshers"
//     },
//     {
//       "start": "11:00",
//       "end": "11:30",
//       "subject": "Interview Call for Freshers"
//     },
//     {
//       "start": "12:00",
//       "end": "12:30",
//       "subject": "Interview Call for Freshers"
//     },
//     {
//       "start": "13:00",
//       "end": "13:30",
//       "subject": "Interview Call for Freshers"
//     },
//     {
//       "start": "14:00",
//       "end": "14:30",
//       "subject": "Interview Call for Freshers"
//     },
//     {
//       "start": "15:00",
//       "end": "15:30",
//       "subject": "Interview Call for Freshers"
//     },
//     {
//       "start": "16:00",
//       "end": "16:30",
//       "subject": "Interview Call for Freshers"
//     },
//     {
//       "start": "17:00",
//       "end": "17:30",
//       "subject": "Interview Call for Freshers"
//     }
//   ],
//   "2024-09-22": [
//     {
//       "start": "9:00",
//       "end": "9:30",
//       "subject": "Art Exhibition Setup"
//     },
//     {
//       "start": "10:00",
//       "end": "10:30",
//       "subject": "Art Exhibition Opening"
//     },
//     {
//       "start": "11:00",
//       "end": "11:30",
//       "subject": "Guided Tour"
//     },
//     {
//       "start": "12:00",
//       "end": "12:30",
//       "subject": "Guest Speaker Session"
//     },
//     {
//       "start": "13:00",
//       "end": "13:30",
//       "subject": "Artist Meet & Greet"
//     },
//     {
//       "start": "14:00",
//       "end": "14:30",
//       "subject": "Art Exhibition Main Event",
//       "location": "Art Gallery",
//       "organizer": "Cultural Society"
//     },
//     {
//       "start": "15:00",
//       "end": "15:30",
//       "subject": "Live Painting Demo"
//     },
//     {
//       "start": "16:00",
//       "end": "16:30",
//       "subject": "Closing Ceremony"
//     },
//     {
//       "start": "17:00",
//       "end": "17:30",
//       "subject": "Exhibition Wrap-Up"
//     }
//   ],
//   "2024-09-23": [
//     {
//       "start": "9:00",
//       "end": "9:30",
//       "subject": "AI Workshop Setup"
//     },
//     {
//       "start": "10:00",
//       "end": "10:30",
//       "subject": "Introduction to AI"
//     },
//     {
//       "start": "11:00",
//       "end": "11:30",
//       "subject": "AI Workshop Session 1",
//       "location": "Room 204",
//       "organizer": "Tech Club"
//     },
//     {
//       "start": "12:00",
//       "end": "12:30",
//       "subject": "AI Tools Overview"
//     },
//     {
//       "start": "13:00",
//       "end": "13:30",
//       "subject": "Lunch Break"
//     },
//     {
//       "start": "14:00",
//       "end": "14:30",
//       "subject": "AI Workshop Session 2"
//     },
//     {
//       "start": "15:00",
//       "end": "15:30",
//       "subject": "Hands-on AI Project"
//     },
//     {
//       "start": "16:00",
//       "end": "16:30",
//       "subject": "AI in Industry Discussion"
//     },
//     {
//       "start": "17:00",
//       "end": "17:30",
//       "subject": "Workshop Closing Remarks"
//     }
//   ],
//   "2024-09-24": [
//     {
//       "start": "9:00",
//       "end": "9:30",
//       "subject": "Music Fest Setup"
//     },
//     {
//       "start": "10:00",
//       "end": "10:30",
//       "subject": "Sound Check"
//     },
//     {
//       "start": "11:00",
//       "end": "11:30",
//       "subject": "Band Rehearsal"
//     },
//     {
//       "start": "12:00",
//       "end": "12:30",
//       "subject": "Stage Setup"
//     },
//     {
//       "start": "13:00",
//       "end": "13:30",
//       "subject": "Lunch Break"
//     },
//     {
//       "start": "14:00",
//       "end": "14:30",
//       "subject": "Guest Artist Performance"
//     },
//     {
//       "start": "15:00",
//       "end": "15:30",
//       "subject": "Main Music Fest",
//       "location": "Auditorium",
//       "organizer": "Music Society"
//     },
//     {
//       "start": "16:00",
//       "end": "16:30",
//       "subject": "Band Performance"
//     },
//     {
//       "start": "17:00",
//       "end": "17:30",
//       "subject": "Closing Act"
//     }
//   ],
//   "2024-09-25": [
//     {
//       "start": "9:00",
//       "end": "9:30",
//       "subject": "Hackathon Kickoff",
//       "location": "Lab 101",
//       "organizer": "Coding Club"
//     },
//     {
//       "start": "10:00",
//       "end": "10:30",
//       "subject": "Team Formation"
//     },
//     {
//       "start": "11:00",
//       "end": "11:30",
//       "subject": "Problem Statement Release"
//     },
//     {
//       "start": "12:00",
//       "end": "12:30",
//       "subject": "Coding Begins"
//     },
//     {
//       "start": "13:00",
//       "end": "13:30",
//       "subject": "Lunch Break"
//     },
//     {
//       "start": "14:00",
//       "end": "14:30",
//       "subject": "Coding Continues"
//     },
//     {
//       "start": "15:00",
//       "end": "15:30",
//       "subject": "Progress Check"
//     },
//     {
//       "start": "16:00",
//       "end": "16:30",
//       "subject": "Mentorship Session"
//     },
//     {
//       "start": "17:00",
//       "end": "17:30",
//       "subject": "Day 1 Wrap-Up"
//     }
//   ],
//   "2024-09-26": [
//     {
//       "start": "9:00",
//       "end": "9:30",
//       "subject": "Drama Rehearsal Setup"
//     },
//     {
//       "start": "10:00",
//       "end": "10:30",
//       "subject": "Scene 1 Rehearsal"
//     },
//     {
//       "start": "11:00",
//       "end": "11:30",
//       "subject": "Scene 2 Rehearsal"
//     },
//     {
//       "start": "12:00",
//       "end": "12:30",
//       "subject": "Scene 3 Rehearsal"
//     },
//     {
//       "start": "13:00",
//       "end": "13:30",
//       "subject": "Lunch Break"
//     },
//     {
//       "start": "14:00",
//       "end": "14:30",
//       "subject": "Scene 4 Rehearsal"
//     },
//     {
//       "start": "15:00",
//       "end": "15:30",
//       "subject": "Scene 5 Rehearsal"
//     },
//     {
//       "start": "16:00",
//       "end": "16:30",
//       "subject": "Full Dress Rehearsal",
//       "location": "Main Stage",
//       "organizer": "Drama Club"
//     },
//     {
//       "start": "17:00",
//       "end": "17:30",
//       "subject": "Rehearsal Wrap-Up"
//     }
//   ],
//   "2024-09-27": [
//     {
//       "start": "9:00",
//       "end": "9:30",
//       "subject": "Networking Event Setup"
//     },
//     {
//       "start": "10:00",
//       "end": "10:30",
//       "subject": "Keynote Speech"
//     },
//     {
//       "start": "11:00",
//       "end": "11:30",
//       "subject": "Panel Discussion"
//     },
//     {
//       "start": "12:00",
//       "end": "12:30",
//       "subject": "Networking Session 1"
//     },
//     {
//       "start": "13:00",
//       "end": "13:30",
//       "subject": "Lunch Break"
//     },
//     {
//       "start": "14:00",
//       "end": "14:30",
//       "subject": "Networking Session 2"
//     },
//     {
//       "start": "15:00",
//       "end": "15:30",
//       "subject": "Main Networking Event",
//       "location": "Conference Room",
//       "organizer": "Professional Society"
//     },
//     {
//       "start": "16:00",
//       "end": "16:30",
//       "subject": "Industry Expert Meetup"
//     },
//     {
//       "start": "17:00",
//       "end": "17:30",
//       "subject": "Event Wrap-Up"
//     }
//   ]
// };

// const chartData = [

//   { month: "Jun", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
//   { month: "Jul", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
//   { month: "Aug", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
//   { month: "Sept", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
//   { month: "Oct", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
//   { month: "Nov", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
//   { month: "Dec", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
// ]

const NotificationData=[
  "notification 1",
  "notification 2",
  "notification 2",
]

interface Event {
  Eventtype: string; // Example: "flagship"
  approval: boolean; // Example: false
  budget: number; // Example: 20000
  category: string; // Example: "Hackathon"
  date: string;
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


interface Society {
  count: number; // Number of societies of this type
  label: string; // Label for the type of society (e.g., "Club", "Community", etc.)
}

interface Societies {
  clubs: Society;               // Information about clubs
  communities: Society;         // Information about communities
  departmentalSocieties: Society; // Information about departmental societies
  professionalSocieties: Society;  // Information about professional societies
}


const Page = () => {

  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  // Function to handle screen size
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024); // 1024px is the threshold for desktop view
  };

  useEffect(() => {
    // Check screen size on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 


  const [date, setDate] = useState<Date | undefined>(new Date());

  // @ts-ignore
  const [schedule, setSchedule] = useState<ScheduleEvent[]>([]);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [counts, setCounts] = useState<Societies | null>(null); 
  // const [error, setError] = useState(''); 
  // const [loading, setLoading] = useState(true); 
  const [eventcounts,setEventcounts]= useState<eventCounts>({
    flagship:0,
    weekly:0,
    monthly:0
  });
  // const [eventloading,setEventloading]= useState(true);
  const [events,setEvents] = useState<Event[]>([]);
  const router = useRouter();

  // const handleModalToggle = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  
  useEffect(() => {
    const loading = toast.loading("loading...");
  
    const fetchCounts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/entity-counts');
        const data = await response.json();

        
        if (data.success) {
          setCounts(data.data); // Set the counts in state
        } else {
          toast.error("Some error occurred while fetching counts");
        }
      } catch (err) {
        console.error('Error fetching counts:', err);
        toast.error("Some error occurred while fetching counts");
      }
    };
  
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/event/getAllEvents');
        const data = await response.json();

       console.log("this is events : ",events);

        if (data.success) {
          setEvents(data.events); // Set the events in state
        } else {
          toast.error("Some error occurred while fetching events");
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        toast.error("Some error occurred while fetching events");
      }
    };
  
    const fetchEventCount = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/event-counts');
        const data = await response.json();

        console.log("this is event count : ",data.data);
        
        if (data.success) {
          setEventcounts(data.data); // Set the event counts in state
        } else {
          toast.error("Error fetching event counts");
        }
      } catch (err) {
        console.error('Error fetching event counts:', err);
        toast.error("Some error occurred while fetching event counts");
      }
    };
  
  
    const fetchData = async () => {
      await Promise.all([fetchCounts(), fetchEvents(), fetchEventCount()]);
      toast.dismiss(loading);
    };
  
    fetchData();
    
  }, []);
  
  const signOut = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      // Fetch user data using token
      fetch('http://localhost:4000/api/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setUser(data.user))
        .catch((err) => console.error(err));
    }
  }, [router]);

  console.log(user);

  if(user && user.role!="Central Office"){
    router.push('/login');
  }
  
  if (!isDesktop) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <p className='text-xl font-bold'>Please open this page on a desktop for the best experience.</p>
      </div>
    );
  }


  if (!user) return <div></div>;
  if (!counts) return <div></div>;
    return (
      
      <div className='flex w-screen '>
        <div className='sidebar  flex flex-col gap-6 w-1/5 '>
          <div className='flex flex-col items-start px-10 py-4'>
            <p className='text-2xl '>Hello!</p>
            <p className='text-3xl font-semibold'>{user.name}</p>
          </div>
          <div className='p-3 flex flex-col gap-5'>
          {sidebarData.map((data, index) => (
            data.text === "signout" ? (
              <button 
                key={index} 
                onClick={signOut} 
                className='flex items-center gap-3 hover:cursor-pointer py-4 px-6 rounded-2xl hover:bg-[#C3DBFF]'
              >
                <Image src={data.icon} alt={data.text} />
                <p>{data.text}</p>
              </button>
            ) : (
              <Link href={data.link} key={index} className='flex items-center gap-3 hover:cursor-pointer py-4 px-6 rounded-2xl hover:bg-[#C3DBFF]'>
                <Image src={data.icon} alt={data.text} />
                <p>{data.text}</p>
              </Link>
            )
          ))}
          </div>
        </div>
  
        <div className='w-full flex flex-col pb-20'>
          <div className='Navbar flex w-full h-[100px]  items-center justify-between px-3'>
            <div className='flex gap-2 px-5 py-3 h-[60px] bg-[#F9FAFB] w-8/12 rounded-2xl'>
              <Image src={search} alt="search" className='w-[24px] h-[24px]' />
              <input placeholder='Search' className='outline-none bg-[#F9FAFB] w-[300px]' />
            </div>
  
            <div className='flex gap-3'>
            <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <div className='w-[43.22px] h-[40px] relative'>
              <Image src={rectanglehollow} alt="belliconbg" className='w-full h-full' />
              
      
              <Image src={bellicon} alt="bellicon" className='absolute w-6/12 h-6/12 top-1/4 left-1/4' />
              
            </div>
            
            </TooltipTrigger>
    <TooltipContent>

      <p>(notifications under development)</p>
      <div>
        {NotificationData.map((notification,index)=>(
          <p key={index}>{notification}</p>
        ))}
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
  

              <Image src={rectanglefilled} alt="filledrectangle" className='w-[63.22px] h-[60px]' />
  
            
              <div>
                <p className='font-semibold'>{user.name.length > 7 ? `${user.name.slice(0, 7)}...` : user.name}</p>
                <p className='text-slate-400'>Central Office</p>
              </div>
  
              {user.name.length > 7 && (

<Popover>
<PopoverTrigger><Image 
      src={arrowhead} 
      alt="profile" 
      className='w-[16.86px] h-[16px] mt-3 hover:cursor-pointer' 
         /></PopoverTrigger>
<PopoverContent>{user.name}</PopoverContent>
</Popover>
           
  )}
          
            </div>
          </div>

          <div className='w-full flex px-10 py-7 '>
     <div className='w-11/12 border-r-2'>

            <div className="w-full h-auto flex gap-6 py-7 px-10">
            <div className="w-[220px] h-auto p-4 rounded-2xl shadow-lg border border-blue-300">
            <div className="flex items-center gap-2 mb-4">
  <span className="icon bg-blue-500 text-white p-2 rounded-full"></span>
  <p className="font-semibold">Total Student Bodies</p>
</div>

<p className="text-2xl font-bold text-blue-500 mb-2">
  {counts.clubs.count + counts.communities.count + counts.departmentalSocieties.count + counts.professionalSocieties.count}
</p>

<div className="text-sm text-gray-600 space-y-1">
  <div className="flex justify-between">
    <span>Club</span>
    
    <span className="text-blue-500">{counts.clubs.count}</span>
  </div>
  <div className="flex justify-between">
    <span>Community</span>
    <span className="text-blue-500">{counts.communities.count}</span>
  </div>
  <div className="flex justify-between">
    <span>Departmental Society</span>
    <span className="text-blue-500">{counts.departmentalSocieties.count}</span>
  </div>
  <div className="flex justify-between">
    <span>Professional Society</span>
    <span className="text-blue-500">{counts.professionalSocieties.count}</span>
  </div>
</div>
</div>
<div className="w-[220px] h-auto p-4 rounded-2xl shadow-lg border border-blue-300">
            <div className="flex items-center gap-2 mb-4">
  <span className="icon bg-blue-500 text-white p-2 rounded-full"></span>
  <p className="font-semibold">Total Events</p>
</div>

<p className="text-2xl font-bold text-blue-500 mb-2">
  {eventcounts.monthly + eventcounts.weekly + eventcounts.flagship}
</p>

<div className="text-sm text-gray-600 space-y-1">
  <div className="flex justify-between">
    <span>Weekly Events</span>
    
    <span className="text-blue-500">{eventcounts.weekly}</span>
  </div>
  <div className="flex justify-between">
    <span>Monthly Events</span>
    <span className="text-blue-500">{eventcounts.monthly}</span>
  </div>
  <div className="flex justify-between">
    <span>Flagship Events</span>
    <span className="text-blue-500">{eventcounts.flagship}</span>
  </div>
 
</div>
</div>
<div className="bg-blue-100 p-10 rounded-lg shadow-sm ">
    <p className="text-lg font-semibold mb-2">Urgent Tasks</p>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Finance Approval</p>
          <p className="text-sm text-gray-500">TechFest</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Finance Approval</p>
          <p className="text-sm text-gray-500">TechFest</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Finance Approval</p>
          <p className="text-sm text-gray-500">TechFest</p>
        </div>
      </div>
    </div>
  </div>
</div>


            <div className='w-full flex gap-6 px-10 py-7'>
    
            <div className='eventApproval-section shadow-md rounded-2xl w-full px-7 py-5'>
              <h2 className="text-2xl font-semibold mb-4">Event Approval</h2>
              <table className="w-full bg-white ">
                <thead className="">
                  <tr>
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Name</th>
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Date Punched</th>
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Event type</th>
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Venue</th>
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left"></th> 
                  </tr>
                </thead>
                <tbody>
                {
  events.map((event, index) => (
    <tr key={index} className="border-b px-2">
      <td className="py-3 text-sm px-6 font-light">{event.name}</td>
      <td className="py-3 text-sm px-6 font-light">
        {new Date(event.date).toLocaleDateString('en-GB')}
      </td>
      <td className="py-3 text-sm px-6 font-light">{event.Eventtype}</td>
      <td className="py-3 text-sm px-6 font-light">{event.venue}</td>
      <td className="py-3 px-6">
        <Link href="/">
          <button className="bg-[#F0F9FF]  text-[#89868D] text-sm px-3 py-2 rounded-xl  border border-[#0095FF]">
            View
          </button>
        </Link>
      </td>
    </tr>
  ))
}

                </tbody>
              </table>
            </div>



            </div>
{/* 
            <div className='w-9/12  rounded-2xl shadow-lg px-10 py-7'>
              <p className='py-7 text-2xl font-bold'>Active Entities</p>
  <ChartContainer config={chartConfig} className="min-h-[150px] w-full">
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={20}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 5)}
      />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
     
      <Bar dataKey="Dept_Societies" fill="var(--color-Dept_Societies)" radius={4} />
      <Bar dataKey="Clubs" fill="var(--color-Clubs)" radius={4} />
      <Bar dataKey="Prof_Societies" fill="var(--color-Prof_Societies)" radius={4} />
      <Bar dataKey="Communities" fill="var(--color-Communities)" radius={4} />
    </BarChart>
  </ChartContainer>
         </div>
         <div className="w-full h-[400px] mt-10  p-4">
      <h2 className="text-2xl font-bold mb-4">Event Frequency</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={numberOfEvents}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="flagship" stroke="#FFD700" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="monthly" stroke="#FF0000" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="weekly" stroke="#0000FF" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>


          

         
 */}
     </div>

 
     <div className='calender_section flex flex-col justify-start items-center px-3 bg-slate-100 rounded-lg'>
          <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md "
    />
    <div className='w-full py-3 rounded-lg bg-white '>
    <div className=' w-full flex justify-between px-3'>
    <p>{date?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>

    <Dialog>
      <DialogTrigger asChild>
      <div className='bg-[#0095FF] w-[35px] h-[36px] rounded-lg flex items-center justify-center hover:cursor-pointer'>
        <Image src={plus} alt="add-schedule"/>
      </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a task</DialogTitle>
          <DialogDescription>
            Add task in your schedule (under development)
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center gap-4 py-2 px-1">
            <Label htmlFor="name" className="text-right">
              Task 
            </Label>
            <Input id="name" value="" placeholder='meeting' className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 py-2 px-1">
            <Label htmlFor="username" className="text-right">
              Time
            </Label>
            <Input id="username" value="" placeholder='9:00 pm' className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
     

    </div>
<div className='schedule-section w-full mt-6 flex flex-col justify-start gap-6 px-2'>
  {schedule.length > 0 ? (
    schedule.map((data, index) => (
      <div key={index} className='flex gap-2 border-b-2 py-3'>
        <p className='text-slate-500 text-wrap'>
          {data.start}
        </p>

        <div className='bg-[#C3DBFF] w-9/12 p-3 space-y-4 rounded-2xl'>
          <p className='text-sm'>{data.subject}</p>
          <p className='text-sm text-slate-500'>{data.start} - {data.end}</p>
        </div>
      </div>
    ))
  ) : (
    <div className='w-full flex justify-center'>
       <p className="text-slate-500 py-3 ">No schedule available </p>
    </div>
   
  )}
</div>

        </div>  
          </div>
          </div>
  
          
        </div>
        </div>
    )
  }
  
  export default Page;
