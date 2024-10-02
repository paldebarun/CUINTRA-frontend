"use client"

import React from 'react'
import home from '../images/Home.png'
import ManageEntities from '../images/Chart.png'
import Image from 'next/image'
// import EventApproval from '../../images/Document.png'
// import Notification from '../../images/Message.png'
// import profile from '../../images/Profile.png'
// import setting from '../../images/Info-Square.png'
import signup from '../images/Logout.png'
import search from '../images/XMLID 223.png'
import bellicon from '../images/Group 1000002785.png'
import rectanglehollow from '../images/Rectangle 907.png'
import rectanglefilled from '../images/Rectangle 1393.png'
import arrowhead from '../images/Group 21861.png'
// import { Calendar } from "@/components/ui/calendar"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
// import { LineChart, Line, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState,useEffect } from 'react'
// import plus from '../../images/Group 1000002786.png'
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartLegend,
//   ChartLegendContent,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation"
import axios from 'axios'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



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


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const sidebarData=[
    {
        icon:home,
        text:"Home",
        link:"/home"
    },
    {
        icon:ManageEntities,
        text:"Manage Entities",
        link:`/Entities/Club`

    },
    {   icon:signup,
        text:"Signout",
        link:"/login"
    }
    // {
    //     icon:EventApproval,
    //     text:"Event Approval"
    // },
    // {
    //     icon:Notification,
    //     text:"Notifications"
    // },
    // {
    //     icon:profile,
    //     text:"Profile"
    // },
    // {
    //     icon:setting,
    //     text:"Setting"
    // },
    // {
    //     icon:signup,
    //     text:"Signup",
        
    // },
    
]

const NotificationData=[
  "notification 1",
  "notification 2",
  "notification 2",
]


// interface Event {
//     name: string;
//     imageUrl: string;
//     entity: {
//       type: 'club' | 'community' | 'department-society' | 'professional-society';
//       id: ObjectId;
//     };
//     date: Date;
//     organizer: {
//       type: 'Cluster' | 'Department' | 'Institute';
//       id: ObjectId;
//     };
//     venue: string;
//     Eventtype: string;
//     category: string;
//     approval?: boolean;
//     featured?: boolean;  
//   }

const EntityData = [
  {
    title: "Total Student Bodies",
    value: 0,
    data: [
      { label: "Dept. Societies", value: "0" },
      { label: "Prof. Societies", value: "0" },
      { label: "Clubs", value: "0" },
      { label: "Communities", value: "0" }
    ]
  },
  {
    title: "Total Events",
    value: "0",
    data: [
      { label: "Flagship Events", value: "0" },
      { label: "Monthly Events", value: "0" },
      { label: "Weekly Events", value: "0" }
    ]
  },
  {
    title:"Budget Used",
    value:0,
    data:[{label:"You have used :",value:"0"}]
  }
//   {
//     title: "Pending Finance Approvals",
//     value: "20",
//     data: [
//       { label: "Flagship Events", value: "05" },
//       { label: "Monthly Events", value: "06" },
//       { label: "Weekly Events", value: "09" }
//     ]
//   }
];


// interface ScheduleEvent {
//   start: string;
//   end: string;
//   subject: string;
//   location?: string;
//   organizer?: string;
// }

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


// const eventApprovalData=[

//     {
//       name:"lorem ipsum",
//       datepurchased:"21.8.2024",
//       purchasedby:"Ms. Ankita",
      
//     },
//     {
//       name:"lorem ipsum",
//       datepurchased:"21.8.24",
//       purchasedby:"Mr. SRK",
        
//       },
//       {
//         name:"lorem ipsum",
//       datepurchased:"21.8.24",
//       purchasedby:"Ms. Amya",
        
//       },
//       {
//         name:"lorem ipsum",
//         datepurchased:"21.8.24",
//         purchasedby:"Mr. Toshit",
        
//       },
//       {
//         name:"lorem ipsum",
//         datepurchased:"21.8.24",
//         purchasedby:"Ms. Ankita",
        
//       }
// ]




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

  


  // const [date, setDate] = useState(new Date());
  // const [schedule, setSchedule] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [eventsApproval, setEventsApproval] = useState<any[]>([]);
  // const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  // const handleModalToggle = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const signOut = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
    };

    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      const toastId = toast.loading("Please wait ...");
      try {
        const [userResponse, clubs, deptSocieties, profsocieties, communities] = await Promise.all([
          axios.get('http://localhost:4000/api/me', { headers: { Authorization: `Bearer ${token}` } }),
          
          axios.get('http://localhost:4000/api/clubRoutes/clubs'),
          axios.get('http://localhost:4000/api/deptSocieties/departmental-societies'),
          axios.get('http://localhost:4000/api/proffSocieties/professional-societies'),
          axios.get('http://localhost:4000/api/communitiesRoutes/communities')
          
        ]);
        const entityRef = userResponse.data.user.entity;
        const budget = await axios.get('http://localhost:4000/api/event/getTotalBudgetByEntity',{
          params:{entityRef:entityRef}
      });
        const unApprovedEvents = await axios.get('http://localhost:4000/api/event/getUnapprovedByID',{
          params:{entityRef:entityRef}
        })

        const allEvents = await axios.get('http://localhost:4000/api/event/events-count-entity',{
          params:{entityRef:entityRef}
        });
       
        if (userResponse.data.success) {
          if(userResponse.data.user.role!="Faculty"){
            router.push('/login');
          }
          setUser(userResponse.data.user);
          console.log(unApprovedEvents.data.events);
          setEventsApproval(unApprovedEvents.data.events);
          
      
          EntityData[1].value = allEvents.data.data.weekly+ allEvents.data.data.monthly + allEvents.data.data.flagship;
          EntityData[1].data[0].value = allEvents.data.data.flagship;
          EntityData[1].data[1].value = allEvents.data.data.monthly;
          EntityData[1].data[2].value = allEvents.data.data.weekly;
          EntityData[0].value = clubs.data.Entity.length + deptSocieties.data.Entities.length + communities.data.Entity.length + profsocieties.data.Entity.length;
          EntityData[0].data[0].value = deptSocieties.data.Entities.length;
          EntityData[0].data[1].value = profsocieties.data.Entity.length;
          EntityData[0].data[2].value = clubs.data.Entity.length;
          EntityData[0].data[3].value = communities.data.Entity.length;
          EntityData[2].value = budget.data.totalBudget;
          EntityData[2].data[0].value = `Rs. ${budget.data.totalBudget}`;
          toast.dismiss(toastId);
         
        } else {
          toast.dismiss(toastId);
          toast.error("User not found");
        }
      } catch (error) {
        toast.dismiss(toastId);
        console.error("Error: ", error);
        toast.error("Error! Please reload.");
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
    fetchData();
  }, [router]);

  if (loading || !user) return <p></p>;


  const handleEventApproval = async (eventId:any) => {
    const loading=toast.loading('loading...');

    try {
      await axios.post(`http://localhost:4000/api/event/approve`, null, {
        params: { eventId: eventId },
      });
      const entityRef = user.entity;
      const unApprovedEvents = await axios.get('http://localhost:4000/api/event/getUnapprovedByID', {
        params: { entityRef: entityRef }
      });
      setEventsApproval(unApprovedEvents.data.events);
      toast.dismiss(loading);
      toast.success('Event approved successfully!');
    } catch (error) {
      toast.dismiss(loading);
      toast.error('Failed to approve the event. Please try again.');
    }
  };

  

  if (!isDesktop) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <p className='text-xl font-bold'>Please open this page on a desktop for the best experience.</p>
      </div>
    );
  }


  return (
    <div className='flex w-screen min-h-screen'>
      {/* Sidebar */}
      <div className='sidebar flex flex-col gap-6 w-1/5 min-h-screen'>
        <div className='flex flex-col items-start px-10 py-4'>
          <p className='text-2xl'>Hello!</p>
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

      {/* Main Content */}
      <div className='w-full flex flex-col pb-20'>
        {/* Navbar */}
        <div className='Navbar flex w-full h-[100px] items-center justify-between px-3'>
          {/* Search bar */}
          <div className='flex gap-2 px-5 py-5 bg-[#F9FAFB] w-8/12 rounded-2xl'>
            <Image src={search} alt="search" className='w-[24px] h-[24px]' />
            <input placeholder='Search' className='outline-none bg-[#F9FAFB] w-[300px]' />
          </div>

          {/* User profile */}
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
                <p className='text-slate-400'>Faculty Advisor</p>
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

        {/* Dashboard Content */}
        <div className='w-full flex  px-10 py-7'>
          <div className='w-11/12 border-r-2'>
            {/* Entity Data */}
            <div className="w-full h-auto flex flex-wrap gap-6 py-7 px-10">
              {EntityData.map((entity, index) => (
                <div key={index} className="w-[220px] h-auto p-4 rounded-2xl shadow-lg border border-blue-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="icon bg-blue-500 text-white p-2 rounded-full"></span>
                    <p className="font-semibold">{entity.title}</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-500 mb-2">{entity.value}</p>
                  <div className="text-sm text-gray-600 space-y-1">
                  {Array.isArray(entity.data) ? (
        entity.data.map((item, i) => (
          <div key={i} className="flex justify-between">
            <span>{item.label}</span>
            <span className="text-blue-500">{item.value}</span>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
                  </div>
                </div>
              ))}
                 <div className="bg-blue-100 p-10 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold mb-2">Urgent Tasks</p>
                  <div className="space-y-2">
                    {/* Add urgent tasks here */}
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
             
                <div className="w-5/12 shadow-lg rounded-2xl flex flex-col space-y-8 p-4">
                {/* Urgent Tasks */}
             
                {/* Quick Tasks */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold mb-2">Quick Tasks</p>
                  <div className="space-y-2">
                    {/* Add quick tasks here */}
                    <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Event Approval</p>
          <p className="text-sm text-gray-500">15 Notifications</p>
        </div>
        
      </div>
      <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Entity Approval</p>
          <p className="text-sm text-gray-500">15 Notifications</p>
        </div>
        
      </div>
      <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Finance Approval</p>
          <p className="text-sm text-gray-500">15 Notifications</p>
        </div>
        
      </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Event Approval and Quick Tasks */}
            <div className='w-full flex flex-wrap gap-6 px-10 py-7'>
              {/* Event Approval */}
              <div className='eventApproval-section shadow-md rounded-2xl w-full px-7 py-5'>
                <h2 className="text-2xl font-semibold mb-4">Event Approval</h2>
                <table className="w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Name</th>
                      <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Date Punched</th>
                      <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Punched By</th>
                      <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left"></th> 
                    </tr>
                  </thead>
                  <tbody>
                    {eventsApproval.map((event, index) => (
                      <tr key={index} className="border-b px-2">
                        <td className="py-3 text-sm px-6 font-light">{event.name}</td>
                        <td className="py-3 text-sm px-6 font-light">
                        {new Date(event.date).toLocaleDateString('en-GB')}
                        </td>
                        <td className="py-3 text-sm px-6 font-light">{event.organizer.type}</td>
                        <td className="py-3 px-6">
                          <button className="bg-[#F0F9FF] text-[#89868D] text-sm px-3 py-2 rounded-xl border border-[#0095FF]" onClick={() =>handleEventApproval(event._id)}>
                            Approve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Quick Tasks */}
              {/* <div className="w-5/12 shadow-lg rounded-2xl flex flex-col space-y-8 p-4">
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold mb-2">Quick Tasks</p>
                  <div className="space-y-2">
                 
                    <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Event Approval</p>
          <p className="text-sm text-gray-500">15 Notifications</p>
        </div>
        
      </div>
      <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Entity Approval</p>
          <p className="text-sm text-gray-500">15 Notifications</p>
        </div>
        
      </div>
      <div className="flex items-center space-x-2">
        <span className="icon-class bg-blue-500 text-white p-2 rounded-full"></span>
        <div>
          <p>Finance Approval</p>
          <p className="text-sm text-gray-500">15 Notifications</p>
        </div>
        
      </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Charts */}
            
            {/* Add schedule display logic here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;