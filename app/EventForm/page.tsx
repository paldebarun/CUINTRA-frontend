"use client"

import Image from 'next/image'
import React from 'react'
import { Input } from '@/components/ui/input'
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 import { useState } from 'react'
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



const page = () => {

    const [startdate, setStartDate] = useState<Date | any>(new Date());
    const [endDate,setEndDate]= useState<Date | any>()
    const [isSameDate, setIsSameDate] = useState<boolean>(false);
    const [position, setPosition] = useState<string>("bottom")

    const handleCheckboxChange = () => {
        setIsSameDate(!isSameDate);
        if (!isSameDate) {
            setEndDate(startdate); 
        } else {
            setEndDate(undefined); 
        }
    };
    
    const submitHandler=async ()=>{

    }

    const organizationalLevelData : string[]=[
        "Open for all",
        "Members only"
    ]

    const categoryData: string[] = [
        "A",
        "B",
        "C",
        "D"
    ];

    const TypesData : string[]=[
        "academic",
        "cultural",
        "traditional",
        "Departmental"
    ]

    const organizationalCategoryData:string[]=[
        "x",
        "y",
        "z"
    ]

  return (
    <div className='bg-[#E3EDFF] px-2 mt-8 py-10 w-8/12 mx-auto rounded-md '>

       <div className='form bg-white w-8/12 mx-auto px-5 py-10 rounded-md'>
         <p className='text-2xl pb-10'>Event Organization Form</p>
        
        <div className='w-4/12 px-2 py-2 space-y-3' >
        <p className='text-lg'>Name of Event</p>

        <Input type="text" placeholder="" className='w-full' />
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
            !startdate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {startdate ? format(startdate, "PPP") : <span></span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={startdate}
          onSelect={setStartDate}
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
            !endDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {endDate ? format(endDate, "PPP") : <span></span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={endDate}
          onSelect={setEndDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
           
    <div className="flex items-center space-x-2">
      <Checkbox id="terms"
      checked={isSameDate} 
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
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {
                categoryData.map((category,index)=>(
                    <DropdownMenuRadioItem key={index} value={category}>{category}</DropdownMenuRadioItem>
                ))
            }
       
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>


     <div className='w-4/12 px-2 py-2 space-y-3' >
        <p className='text-sm'>Name of the host</p>

        <Input type="text" placeholder="" className='w-full' />
        </div>



         </div>

         <div>

         </div>

        </div>

        <div className='w-full space-y-2 px-2 py-2'>
          <p className='text-lg'>Venue</p>

          <Input type="text" placeholder="" className='w-4/12' />

        </div>

        <div className='w-full space-y-10 px-2 py-2 mt-6'>
           <p className='text-lg'>Organization Level</p>

      <RadioGroup defaultValue="comfortable" className='flex  gap-10'>
        {
            organizationalLevelData.map((data,index)=>(
                <div className="flex items-center space-x-2">
                     <RadioGroupItem value={data} id={data} />
        <Label htmlFor={data} className='text-slate-500'>{data}</Label>
                </div>
            ))
        }
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
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {
                TypesData.map((type,index)=>(
                    <DropdownMenuRadioItem key={index} value={type}>{type}</DropdownMenuRadioItem>
                ))
            }

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
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        {
                organizationalCategoryData.map((category,index)=>(
                    <DropdownMenuRadioItem key={index} value={category}>{category}</DropdownMenuRadioItem>
                ))
            }
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>

    <div className="grid w-4/12 max-w-sm items-center gap-1.5 space-y-4">
      <Label htmlFor="picture"><div className='flex gap-2 items-center'>
        <p className='text-slate-400'>Upload poster</p>
        <Image src={uploadfile} alt="uploadfile" />
        </div></Label>
      <Input id="picture" type="file" />
    </div>


        </div>

        <div className='w-full space-y-4 py-10 '>
         <p className='text-lg'>Budget</p>

         <div className='flex w-full gap-2 items-center px-2 py-1'>
         <Image src={rupee} alt="rupee" className='w-[1rem] h-[1.5rem]' />
         <Input type="number" placeholder="" className='w-4/12' />
         </div>

       

        </div>

        <div onClick={submitHandler} className='bg-[#6296FE] my-4 text-lg text-white py-3 px-4 w-2/12 text-center rounded-2xl mx-auto'>
            Submit 
        </div>
         
       </div>
    </div>
  )
}

export default page