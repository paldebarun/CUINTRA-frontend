"use client";

import React from "react";
import home from "../images/Home.png";
import ManageEntities from "../images/Chart.png";
import Image from "next/image";
// import EventApproval from '../../images/Document.png'
// import Notification from '../../images/Message.png'
// import profile from '../../images/Profile.png'
// import setting from '../../images/Info-Square.png'
import signup from "../images/Logout.png";
import { Calendar } from "@/components/ui/calendar"
import plus from '../images/Group 1000002786.png'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import bellicon from "../images/Group 1000002785.png";
import rectanglehollow from "../images/Rectangle 907.png";
import rectanglefilled from "../images/Rectangle 1393.png";
import arrowhead from "../images/Group 21861.png";
// import { Calendar } from "@/components/ui/calendar"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
// import { LineChart, Line, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from "react";
// import plus from '../../images/Group 1000002786.png'
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartLegend,
//   ChartLegendContent,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
// import { ObjectId } from "mongoose";

interface User {
  entity: string; // Example: "66f9948916bc12d78e5c3c64" (MongoDB ObjectId as a string)
  name: string; // Example: "Debarun"
  role: string; // Example: "Student Rep"
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import ApproveMembers from "./ApproveMembers";
import MemberList from "./MemberList";
import ApproveEvents from "./ApprovedEvents";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import OngoingEvents from "./OngoingEvents";

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



const sidebarData = [
  {
    icon: home,
    text: "Approved Events",
  },
  {
    icon: home,
    text: "Approve Members",
  },
  {
    icon: ManageEntities,
    text: "Propose Event",
  },
  {
    icon: ManageEntities,
    text: "Members List",
  },
  { icon: signup, text: "Signout" },
];

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
    title: "Total Members ",
    value: "0",
    data: [
      { label: "Male", value: "0" },
      { label: "Female", value: "0" },
      { label: "Other", value: "0" },
    ],
  },
  {
    title: "Total Events",
    value: "0",
    data: [
      { label: "Flagship Events", value: "0" },
      { label: "Monthly Events", value: "0" },
      { label: "Weekly Events", value: "0" },
    ],
  },
  {
    title: "Budget Used",
    value: 0,
    data: [{ label: "You have used :", value: "0" }],
  },

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

interface ScheduleEvent {
  start: string;
  end: string;
  subject: string;
  location?: string;
  organizer?: string;
}

const NotificationData = ["notification 1", "notification 2", "notification 2"];

const Page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const schedule:ScheduleEvent[] = [];
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [currentMenu, setCurrentMenu] = useState<string>("Approved Events");

  // Function to handle screen size
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024); // 1024px is the threshold for desktop view
  };

  useEffect(() => {
    // Check screen size on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const [date, setDate] = useState(new Date());
  // const [schedule, setSchedule] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  // const handleModalToggle = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("entity");
    router.push("/login");
  };

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }
    };

    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const toastId = toast.loading("Please wait ...");

      try {
        const userResponse = await axios.get("https://intracu-backend-mdl9.onrender.com/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log(userResponse);
        if (userResponse.data.user.role != "Student Rep") {
          router.push("/login");
        }
        const entityRef = userResponse.data.user.entity;
        const budget = await axios.get(
          "https://intracu-backend-mdl9.onrender.com/api/event/getTotalBudgetByEntity",
          {
            params: { entityRef: entityRef },
          }
        );
        // Now pass the entityRef as a query parameter to the next API
        const allEvents = await axios.get(
          "https://intracu-backend-mdl9.onrender.com/api/event/events-count-entity",
          {
            params: { entityRef: entityRef },
          }
        );
        
        


        const MembersCountResponse = await axios.get(
          "https://intracu-backend-mdl9.onrender.com/api/member/member-count",
          {
            params: { entity: entityRef },
          }
        );
        console.log("this is member-count-response : ",MembersCountResponse);
        const membersObj = MembersCountResponse.data;

        EntityData[0].value =
          membersObj.female + membersObj.male + membersObj.other;
        EntityData[0].data[0].value = membersObj.male;
        EntityData[0].data[1].value = membersObj.female;
        EntityData[0].data[2].value = membersObj.other;

        if (userResponse.data.success) {
          console.log("this is user : ",userResponse.data.user);
          setUser(userResponse.data.user);

          // Update EntityData with fetched values
          EntityData[1].value =
            allEvents.data.data.weekly +
            allEvents.data.data.monthly +
            allEvents.data.data.flagship;
          EntityData[1].data[0].value = allEvents.data.data.flagship;
          EntityData[1].data[1].value = allEvents.data.data.monthly;
          EntityData[1].data[2].value = allEvents.data.data.weekly;

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

  if (loading || !user) return <div></div>;

  if (!isDesktop) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-xl font-bold">
          Please open this page on a desktop for the best experience.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-screen  min-h-screen">
      {/* Sidebar */}
      <div className="sidebar flex flex-col gap-6 w-1/5 min-h-screen">
        <div className="flex flex-col items-start px-10 py-4">
          <p className="text-2xl">Hello!</p>
          <p className="text-3xl font-semibold">{user.name}</p>
        </div>
        <div className="p-3 flex flex-col gap-5">
          {sidebarData.map((data, index) =>
            data.text === "Signout" ? (
              <button
                key={index}
                onClick={signOut}
                className="flex items-center gap-3 hover:cursor-pointer py-4 px-6 rounded-2xl hover:bg-[#C3DBFF]"
              >
                <Image src={data.icon} alt={data.text} />
                <p className="text-sm xl:text-md">{data.text}</p>
              </button>
            ) : (
              data.text!=="Propose Event" ?  
              <div
                onClick={() => {
                  setCurrentMenu(data.text);
                }}
                key={index}
                className={data.text===currentMenu ? "flex items-center gap-3 hover:cursor-pointer py-4 px-6 rounded-2xl bg-[#C3DBFF]":"flex items-center gap-3 hover:cursor-pointer py-4 px-6 rounded-2xl hover:bg-[#C3DBFF]"}
              >
                <Image src={data.icon} alt={data.text} />
                <p className="text-sm xl:text-md">{data.text}</p>
              </div>

              :
              <Link href="/EventForm" className="flex items-center gap-3 hover:cursor-pointer py-4 px-6 rounded-2xl hover:bg-[#C3DBFF]">
                 
                 <Image src={data.icon} alt={data.text} />
                <p className="text-sm xl:text-md">{data.text}</p>

              </Link>
            )
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex  flex-col pb-20">
        {/* Navbar */}
        <div className="Navbar flex w-full py-3 items-center justify-between px-3">
          {/* Search bar */}
          <div className="flex gap-2 px-5 py-5 bg-white w-[300px] rounded-2xl">
            
            <div
              className="outline-none bg-white w-[300px]"
            >

            </div>
          </div>

          {/* User profile */}
          <div className="flex gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="w-[43.22px] h-[40px] relative">
                    <Image
                      src={rectanglehollow}
                      alt="belliconbg"
                      className="w-full h-full"
                    />

                    <Image
                      src={bellicon}
                      alt="bellicon"
                      className="absolute w-6/12 h-6/12 top-1/4 left-1/4"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>(notifications under development)</p>
                  <div>
                    {NotificationData.map((notification, index) => (
                      <p key={index}>{notification}</p>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Image
              src={rectanglefilled}
              alt="filledrectangle"
              className="w-[63.22px] h-[60px]"
            />
            <div>
              <p className="font-semibold">
                {user.name.length > 7
                  ? `${user.name.slice(0, 7)}...`
                  : user.name}
              </p>
              <p className="text-slate-400">Central Office</p>
            </div>

            {user.name.length > 7 && (
              <Popover>
                <PopoverTrigger>
                  <Image
                    src={arrowhead}
                    alt="profile"
                    className="w-[16.86px] h-[16px] mt-3 hover:cursor-pointer"
                  />
                </PopoverTrigger>
                <PopoverContent>{user.name}</PopoverContent>
              </Popover>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="w-full flex gap-3 px-10 py-7">
          <div className="w-11/12 border-r-2">
            {/* Entity Data */}
            <div className="w-full h-auto flex flex-wrap gap-6 py-7 px-10">
              {EntityData.map((entity, index) => (
                <div
                  key={index}
                  className="w-[220px] h-auto p-4 rounded-2xl shadow-lg border border-blue-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="icon bg-blue-500 text-white p-2 rounded-full"></span>
                    <p className="font-semibold">{entity.title}</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-500 mb-2">
                    {entity.value}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    {entity.data.map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span>{item.label}</span>
                        <span className="text-blue-500">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {currentMenu === "Approve Members" && <ApproveMembers user={user} />}

            {currentMenu === "Members List" && <MemberList user={user} />}

            {currentMenu === "Approved Events" && <ApproveEvents user={user} />}

           
           <div className="w-full py-10 space-y-8 ">
            <p className="text-2xl font-semibold text-center">Ongoing events</p>
           <OngoingEvents/>

           </div>

  
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
  );
};

export default Page;
