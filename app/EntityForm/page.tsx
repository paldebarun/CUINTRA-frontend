"use client"

import React from 'react'
import Image from 'next/image'
import tick from '../images/tick.png'
import FirstForm from './component/FirstForm'
import { useState,useEffect } from 'react'
import SecondForm from './component/SecondForm'
import ThirdForm from './component/ThirdForm'
import FourthForm from './component/FourthForm'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from 'axios'

const page = () => {

  const [pagination, setPagination] = useState(1)
  const [formData, setFormData] = useState({
    entityType:"",
  
  })
  const router = useRouter();


  const updateFormData = (data:any) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }))
  }

  const handleSubmit = async () => {
    try {
      const toastId = toast.loading("Submitting");
      console.log(formData);
      let endpoint = '';

    
      
      switch(formData.entityType) {
        case "COMMUNITY":
          endpoint = 'http://localhost:4000/api/communitiesRoutes/communities';
          break;
        case "DEPT. SOCIETY":
          endpoint = 'http://localhost:4000/api/deptSocieties/departmental-societies';
          break;
        case "PROFF. SOCIETY":
          endpoint = 'http://localhost:4000/api/proffSocieties/professional-societies';
          break;
        default:
          endpoint = 'http://localhost:4000/api/clubRoutes/clubs';
      }

    
      const response=await axios.post(endpoint,formData);

      console.log("response : ",response);

      if (response.data.success) {
        toast.dismiss(toastId); 
        toast.success("Successfully applied");
        router.push('/login');
      } else {
        toast.dismiss(toastId); // dismiss loading toast
        toast.error("Something went wrong. Please try again.");
        router.push('/login');

      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred while submitting the form. Please try again.')
    }
  }

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

  if (!isDesktop) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <p className='text-xl font-bold'>Please open this page on a desktop for the best experience.</p>
      </div>
    );
  }


  return (
    <div className='px-7 py-10 flex justify-center items-center'>
    <div className='bg-[#E3EDFF] px-8 py-10 w-8/12'>

      <div className='bg-white py-3  space-y-6'>
      <p className='text-2xl px-3'>Entity Proposal Form</p>

      <div className='flex  w-full  py-5'>
         <div className='flex items-center gap-4 w-full justify-center border-b-slate-400 border-2  py-3 px-3'>
         {pagination>=1 ? <Image src={tick} alt="tick" className='border-[#99BBFF] border-2 rounded-full w-5 h-5 '  />:<div className='border-[#99BBFF] text-white text-[5px] px-1.5 border-2 py-1 rounded-full'>h</div>}
           <p className='text-lg'>Entity Details</p>
        </div> 
        <div className='flex items-center gap-4 w-full justify-center border-b-slate-400 border-2 py-3 px-3'>
        {pagination>=2 ? <Image src={tick} alt="tick" className='border-[#99BBFF] border-2 rounded-full w-5 h-5 '  />:<div className='border-[#99BBFF] text-white text-[5px] px-1.5 border-2 py-1 rounded-full'>h</div>}
          <p className='text-lg'>Student Details</p>
        </div>
        <div className='flex items-center gap-4 w-full justify-center border-b-slate-400 border-2 py-3 px-3'>
        {pagination>=3 ? <Image src={tick} alt="tick" className='border-[#99BBFF] border-2 rounded-full w-5 h-5 '  />:<div className='border-[#99BBFF] text-white text-[5px] px-1.5 border-2 py-1 rounded-full'>h</div>}
          <p className='text-lg'>Faculty Details</p>
        </div>
        <div className='flex items-center gap-4 w-full justify-center border-b-slate-400 border-2 py-3 px-3'>
        {pagination==4 ? <Image src={tick} alt="tick" className='border-[#99BBFF] border-2 rounded-full w-5 h-5 '  />:<div className='border-[#99BBFF] text-white text-[5px] px-1.5 border-2 py-1 rounded-full'>h</div>}
          <p className='text-lg'>Referal Details</p>
        </div>
      </div>
      
    {pagination === 1 && <FirstForm pagination={pagination} setPagination={setPagination} formData={formData} updateFormData={updateFormData} />}
          {pagination === 2 && <SecondForm pagination={pagination} setPagination={setPagination} formData={formData} updateFormData={updateFormData} />}
          {pagination === 3 && <ThirdForm pagination={pagination} setPagination={setPagination} formData={formData} updateFormData={updateFormData} />}
          {pagination === 4 && <FourthForm pagination={pagination} setPagination={setPagination} formData={formData} updateFormData={updateFormData} handleSubmit={handleSubmit} />}
      </div>

      
    </div>

    </div>
  )
}

export default page