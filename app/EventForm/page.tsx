"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import arrowhead from '../images/Group 21861.png'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import uploadfile from '../images/upload_file.png'
import rupee from '../images/₹.png'
import { useRouter } from "next/navigation"
import { toast } from 'react-hot-toast';
import axios from 'axios'

interface FormData {
  eventName: string;
  startDate: Date;
  endDate: Date;
  isSameDate: boolean;
  organizerCategory: string;
  organizerName: string;
  venue: string;
  organizationLevel: string;
  eventType: string;
  eventCategory: string;
  imageFile: File | null;
  budget: string;
  entity: string | null;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [entity, setEntity] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Safely access localStorage
      const savedEntity = localStorage.getItem('entity');
      if (!savedEntity) {
        router.push('/login');
      } else {
        setEntity(savedEntity);
      }
    }
  }, [router]);
  


  
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    eventName: '',
    startDate: new Date(),
    endDate: new Date(),
    isSameDate: false,
    organizerCategory: '',
    organizerName: '',
    venue: '',
    organizationLevel: '',
    eventType: '',
    eventCategory: '',
    imageFile: null,
    budget: '',
    entity
  });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string | boolean | Date | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      isSameDate: !prev.isSameDate,
      endDate: !prev.isSameDate ? prev.startDate : prev.endDate
    }));
  };

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files; 
  
   
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, imageFile: files[0] }));
    }
  };

  
  const submitHandler = async () => {
    try {
      const toastId = toast.loading("Submitting form");
      const formDataToSend = new FormData();
      
      formData.entity=entity;

      console.log(formData)
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          const typedKey = key as keyof FormData;
      
          if (typedKey === 'imageFile') {
            if (formData.imageFile) {
              formDataToSend.append('imageFile', formData.imageFile);
            }
          } else if (typedKey === 'startDate' || typedKey === 'endDate') {
            formDataToSend.append(typedKey, formData[typedKey].toISOString());
          } else {
            formDataToSend.append(typedKey, String(formData[typedKey]));  
          }
        }
      }

      // const response = await fetch('https://intracu-backend-mdl9.onrender.com/api/event/events', {
      //   method: 'POST',
      //   body: formDataToSend
      // });

      console.log("this is formdata : ",formDataToSend);

      const response=await axios.post('https://intracu-backend-mdl9.onrender.com/api/event/events',formDataToSend);

      // const result = await response.json();

      console.log(response);

      if (response.data.success) {
        toast.dismiss(toastId);
          toast.success("Event created successfully");
        router.push('/StudentRepresentative');
      } else {
        toast.dismiss(toastId);
        toast.error("Cannot create event");
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event');
    }
  };

  const organizationalLevelData = ["Open for all", "Members only"];
 
  const categoryData: string[] = [
    "Cluster",
    "Department",
    "Institute"
    
];
  const TypesData: string[] = ["flagship", "weekly", "monthly"  ];
  const organizationalCategoryData: string[] = ["Hackathon", "Workshop", "Seminar"];

  if (!isDesktop) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <p className='text-xl font-bold'>Please open this page on a desktop for the best experience.</p>
      </div>
    );
  }

  return (
    <div className='bg-[#E3EDFF] px-2 mt-8 py-10 w-8/12 mx-auto rounded-md'>
      <div className='form bg-white w-8/12 mx-auto px-5 py-10 rounded-md'>
        <p className='text-2xl pb-10'>Event Organization Form</p>
        
        <div className='w-4/12 px-2 py-2 space-y-3'>
          <p className='text-lg'>Name of Event</p>
          <Input 
            type="text" 
            value={formData.eventName}
            onChange={(e) => handleInputChange('eventName', e.target.value)}
            className='w-full' 
          />
        </div>

        <div className='space-y-4 py-6 px-2'>
          <p className='text-lg'>Date Of Event</p>

          <div className='w-full flex justify-between'>
            <div className='space-y-2 '>
              <p className='text-sm text-slate-400'>Start date</p>
              <Popover>
  <PopoverTrigger asChild>
    <Button
      variant={"outline"}
      className={cn(
        "w-[240px] justify-start text-left font-normal",
        !formData.startDate && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      mode="single"
      selected={formData.startDate}
      onSelect={(date) => handleInputChange('startDate', date ?? null)} 
      initialFocus
    />
  </PopoverContent>
</Popover>

            </div>

            <div className='space-y-2 '>
              <p className='text-sm text-slate-400'>End date</p>
              <Popover>
  <PopoverTrigger asChild>
    <Button
      variant={"outline"}
      className={cn(
        "w-[240px] justify-start text-left font-normal",
        !formData.endDate && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick an end date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      mode="single"
      selected={formData.endDate}
      onSelect={(date) => handleInputChange('endDate', date ?? null)}
      initialFocus
    />
  </PopoverContent>
</Popover>

            
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms"
                  checked={formData.isSameDate} 
                  onCheckedChange={handleCheckboxChange}
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-slate-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Same as start date
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-4 py-6 px-2 w-full'>
          <p className='text-lg'>Organized By</p>

          <div className='w-full flex items-center justify-between px-2 py-2'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" >
                  <div className='flex gap-4 items-center px-2 py-2'>
                    <p className='text-slate-400'>Select a category</p>
                    <Image src={arrowhead} alt="select a category" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup 
                  value={formData.organizerCategory} 
                  onValueChange={(value) => handleInputChange('organizerCategory', value)}
                >
                  {categoryData.map((category, index) => (
                    <DropdownMenuRadioItem key={index} value={category}>{category}</DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className='w-4/12 px-2 py-2 space-y-3' >
              <p className='text-sm'>Name of the host</p>
              <Input 
                type="text" 
                value={formData.organizerName}
                onChange={(e) => handleInputChange('organizerName', e.target.value)}
                className='w-full' 
              />
            </div>
          </div>
        </div>

        <div className='w-full space-y-2 px-2 py-2'>
          <p className='text-lg'>Venue</p>
          <Input 
            type="text" 
            value={formData.venue}
            onChange={(e) => handleInputChange('venue', e.target.value)}
            className='w-4/12' 
          />
        </div>

        <div className='w-full space-y-10 px-2 py-2 mt-6'>
          <p className='text-lg'>Organization Level</p>

          <RadioGroup 
            value={formData.organizationLevel}
            onValueChange={(value) => handleInputChange('organizationLevel', value)}
            className='flex gap-10'
          >
            {organizationalLevelData.map((data, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={data} id={data} />
                <Label htmlFor={data} className='text-slate-500'>{data}</Label>
              </div>
            ))}
          </RadioGroup>

          <div className='flex justify-between px-2 py-2'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" >
                  <div className='flex gap-4 items-center px-2 py-2'>
                    <p className='text-slate-400'>Select types</p>
                    <Image src={arrowhead} alt="select a category" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Types</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup 
                  value={formData.eventType}
                  onValueChange={(value) => handleInputChange('eventType', value)}
                >
                  {TypesData.map((type, index) => (
                    <DropdownMenuRadioItem key={index} value={type}>{type}</DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" >
                  <div className='flex gap-4 items-center px-2 py-2'>
                    <p className='text-slate-400'>Select category</p>
                    <Image src={arrowhead} alt="select a category" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup 
                  value={formData.eventCategory}
                  onValueChange={(value) => handleInputChange('eventCategory', value)}
                >
                  {organizationalCategoryData.map((category, index) => (
                    <DropdownMenuRadioItem key={index} value={category}>{category}</DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid w-4/12 max-w-sm items-center gap-1.5 space-y-4">
            <Label htmlFor="picture">
              <div className='flex gap-2 items-center'>
                <p className='text-slate-400'>Upload poster</p>
                <Image src={uploadfile} alt="uploadfile" />
              </div>
            </Label>
            <Input 
              id="imageFile" 
              type="file" 
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className='w-full space-y-4 py-10 '>
          <p className='text-lg'>Budget</p>
          <div className='flex w-full gap-2 items-center px-2 py-1'>
            <Image src={rupee} alt="rupee" className='w-[1rem] h-[1.5rem]' />
            <Input 
              type="number" 
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              className='w-4/12' 
            />
          </div>
        </div>

        <div onClick={submitHandler} className='bg-[#6296FE] my-4 text-lg text-white py-3 px-4 w-2/12 text-center rounded-2xl mx-auto cursor-pointer'>
          Submit 
        </div>
      </div>
    </div>
  )
}

export default Page