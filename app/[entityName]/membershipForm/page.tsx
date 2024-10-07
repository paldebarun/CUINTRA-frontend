"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

 


const dropDownData=[
  "Club",
  "Communities",
  "ProfessionalSocieties",
  "DepartmentalSocieties"
]

const departmentData=[
  "physiotherapy",
  "DAA",
 
]

const Page = ({ params }: { params: { entityName: string } }) => {



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

  


  // const router=useRouter();
  const [entityName, setEntityName] = useState(params.entityName);
  const [name, setName] = useState('');
  const [uid, setUid] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [entityType, setEntityType] = useState<string>('');
  const [gender,setgender]=useState<string>("");
  const [department,setDepartment]=useState<string>("");

  useEffect(() => {
    setEntityName(decodeURIComponent(params.entityName));
  }, [params.entityName]);

  const handleSendOtp = async () => {
    const toastId=toast.loading("sending otp");
    if (!email) {
   
      return;
    }


 

    try {
      const response = await fetch('https://intracu-backend-mdl9.onrender.com/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      

      // const data = await response.json();

      if (response.ok ) {
        toast.dismiss(toastId);
        toast.success("otp sent successfully");
       
      } else {

        toast.dismiss(toastId);
        toast.error("failed to send otp");
      
      }

      
      
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("internal server error");
    
    } 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId=toast.loading('submitting the membership form');
    console.log(email)

    // Validate form fields
    if (!name || !uid || !email || !otp || !entityType || !gender || !department) {
      toast.dismiss(toastId);
      toast.error('required all fields');
   
      return;
    }
    const object={
      name,
      email,
      uid,
      otp,
      entityType,
      entityId: entityName,
      gender,
      department
    }


   console.log("this is object  of membership : ",object);
 

    try {
      const response = await axios.post('https://intracu-backend-mdl9.onrender.com/api/submit-form', object);

      console.log("response : ",response);

      // const data = await response.json();

      // if (response.ok) {
      //   setMessage("Member successfully registered! Pending approval.");
      // } else {
      //   setMessage(data.message || "Failed to register member.");
      // }

     toast.dismiss(toastId);
     toast.success("form successfully submitted");
     window.location.href = 'https://pvc-website1.vercel.app/club';

    } catch (error) {
      toast.dismiss(toastId);
     toast.error("form not submitted successfully");
   
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
   
      <div className="flex justify-center items-center py-16">
        <div className="p-10 bg-[#e3edff] rounded-lg shadow-lg w-full max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-center text-xl font-bold mb-4">Membership Form</h2>
            <h3 className="text-center text-lg font-semibold mb-4">{entityName}</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="uid">
                  UID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="uid"
                  type="text"
                  placeholder="Enter your UID"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                />
              </div>
              <div className='space-y-5 py-6'>
  <p className='block text-gray-700 text-sm font-bold mb-2'>Gender</p>

  <RadioGroup value={gender} onValueChange={setgender}>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="male" id="male" />
      <Label htmlFor="male">Male</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="female" id="female" />
      <Label htmlFor="female">Female</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="other" id="other" />
      <Label htmlFor="other">Other</Label>
    </div>
  </RadioGroup>
</div>
              {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="entityType">
                  Entity Type
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="entityType"
                  type="text"
                  placeholder="Type of entity"
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value)}
                />
              </div> */}

     <div className='w-full py-4 px-2'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"> Entity Type</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Entity Type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={entityType} onValueChange={setEntityType}>
          {
           dropDownData.map((entity,index)=>(
            <DropdownMenuRadioItem key={index} value={entity}>{entity}</DropdownMenuRadioItem>
           ))
          }
          
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>

    <div className='w-full py-4 px-2'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"> Department</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>Select</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={department} onValueChange={setDepartment}>
          {
           departmentData.map((entity,index)=>(
            <DropdownMenuRadioItem key={index} value={entity}>{entity}</DropdownMenuRadioItem>
           ))
          }
          
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
              

              <div className="mb-4 py-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  University Email
                </label>

                <div className="w-full flex border rounded-xl justify-between">
                  <input
                    className=" bg-transparent   w-9/12 py-2 px-3 text-gray-700   outline-none"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="  text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                    style={{ backgroundColor: "#bdd3ff" }}
                
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              <div className="mb-10">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                  OTP
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div className="flex justify-center  mb-40">
                <button
                  type="submit"
                  className="text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                  style={{ backgroundColor: "#6296FE" }}
                 
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
  );
};

export default Page;
