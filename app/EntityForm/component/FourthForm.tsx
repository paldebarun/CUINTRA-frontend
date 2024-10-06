import React, { useState } from 'react';
import Image from 'next/image';
import arrow from '../../images/Group 3430.png';

interface ProposedStudentRepresentative {
  proposedStudentRepresentativeName: string;
  proposedStudentRepresentativeUid: string;
  MobileNumber: string;
}

interface FormData {
  proposedStudentRepresentative1: ProposedStudentRepresentative;
  proposedStudentRepresentative2: ProposedStudentRepresentative;
  proposedStudentJointRepresentative1: ProposedStudentRepresentative;
  proposedStudentJointRepresentative2: ProposedStudentRepresentative;
}

interface FourthFormProps {
  pagination: number;
  setPagination: (page: number) => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void; 
  handleSubmit: () => Promise<void>;
}

const FourthForm: React.FC<FourthFormProps> = ({ pagination, setPagination, formData, updateFormData, handleSubmit }) => {
  
  const [localFormData, setLocalFormData] = useState<FormData>(formData);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateFormData(localFormData); // Sync the form data with the parent component
    await handleSubmit();
  };

  return (
    <div className='w-full px-3'>
      <p className='text-lg'>REFERRAL DETAILS</p>

      <form onSubmit={onSubmit}>
        
        
        <div className='w-full flex justify-end gap-6 px-5 py-16'>
          <div onClick={() => { setPagination(pagination - 1) }} className='bg-[#767676] text-white px-4 py-3 rounded-lg hover:cursor-pointer'>BACK</div>
          <button type="submit" className='bg-[#6296FE] text-white px-4 py-3 rounded-lg gap-2 flex items-center justify-center hover:cursor-pointer'>
            <p>SUBMIT</p>
            <Image src={arrow} alt="arrow" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default FourthForm;
