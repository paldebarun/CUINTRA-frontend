import React, { useState } from 'react';
import Image from 'next/image';
import arrow from '../../images/Group 3430.png';

const SecondForm = ({ pagination, setPagination, formData, updateFormData }: any) => {
  const [localFormData, setLocalFormData] = useState(formData);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');

    setLocalFormData((prevData: any) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    updateFormData(localFormData); // Sync the local form data with the parent form data before moving to the next step
    setPagination(pagination + 1);
  };

  return (
    <div className='w-full px-3'>
      <p className='text-lg'>STUDENT SECRETARY/ JOINT SECRETARY DETAILS</p>

      {/* Secretary 1 */}
      <div className='firstsection flex gap-6 w-full mx-auto justify-between py-16'>
        <div className='w-4/12 space-y-3'>
          <p>STUDENT SECRETARY 1 NAME</p>
          <input
            type="text"
            name="proposedStudentRepresentative1.proposedStudentRepresentativeName"
            value={localFormData.proposedStudentRepresentative1?.proposedStudentRepresentativeName || ''}
            onChange={handleInputChange}
            className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
        <div className='w-4/12 space-y-3'>
          <p>UID</p>
          <input
            type="text"
            name="proposedStudentRepresentative1.proposedStudentRepresentativeUid"
            value={localFormData.proposedStudentRepresentative1?.proposedStudentRepresentativeUid || ''}
            onChange={handleInputChange}
            className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
        <div className='w-4/12 space-y-3'>
          <p>PHONE NO</p>
          <input
            type="tel"
            name="proposedStudentRepresentative1.MobileNumber"
            value={localFormData.proposedStudentRepresentative1?.MobileNumber || ''}
            onChange={handleInputChange}
            className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
      </div>

      {/* Secretary 2 */}
      <div className='secondsection flex gap-6 w-full mx-auto justify-between py-16'>
        <div className='w-4/12 space-y-3'>
          <p>STUDENT SECRETARY 2 NAME</p>
          <input
            type="text"
            name="proposedStudentRepresentative2.proposedStudentRepresentativeName"
            value={localFormData.proposedStudentRepresentative2?.proposedStudentRepresentativeName || ''}
            onChange={handleInputChange}
            className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
        <div className='w-4/12 space-y-3'>
          <p>UID</p>
          <input
            type="text"
            name="proposedStudentRepresentative2.proposedStudentRepresentativeUid"
            value={localFormData.proposedStudentRepresentative2?.proposedStudentRepresentativeUid || ''}
            onChange={handleInputChange}
            className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
        <div className='w-4/12 space-y-3'>
          <p>PHONE NO</p>
          <input
            type="tel"
            name="proposedStudentRepresentative2.MobileNumber"
            value={localFormData.proposedStudentRepresentative2?.MobileNumber || ''}
            onChange={handleInputChange}
            className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
      </div>

      {/* Joint Secretary 1 */}
      <div className='thirdsection flex gap-6 w-full mx-auto justify-between py-16'>
        <div className='w-4/12 space-y-3'>
          <p>STUDENT JOINT SECRETARY 1 NAME</p>
          <input
            type="text"
            name="proposedStudentJointRepresentative1.proposedStudentRepresentativeName"
            value={localFormData.proposedStudentJointRepresentative1?.proposedStudentRepresentativeName || ''}
            onChange={handleInputChange}
            className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
        <div className='w-4/12 space-y-3'>
          <p>UID</p>
          <input
            type="text"
            name="proposedStudentJointRepresentative1.proposedStudentRepresentativeUid"
            value={localFormData.proposedStudentJointRepresentative1?.proposedStudentRepresentativeUid || ''}
            onChange={handleInputChange}
            className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
        <div className='w-4/12 space-y-3'>
          <p>PHONE NO</p>
          <input
            type="tel"
            name="proposedStudentJointRepresentative1.MobileNumber"
            value={localFormData.proposedStudentJointRepresentative1?.MobileNumber || ''}
            onChange={handleInputChange}
            className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
      </div>

      {/* Joint Secretary 2 */}
      <div className='fourthsection flex gap-6 w-full mx-auto justify-between py-16'>
        <div className='w-4/12 space-y-3'>
          <p>STUDENT JOINT SECRETARY 2 NAME</p>
          <input
            type="text"
            name="proposedStudentJointRepresentative2.proposedStudentRepresentativeName"
            value={localFormData.proposedStudentJointRepresentative2?.proposedStudentRepresentativeName || ''}
            onChange={handleInputChange}
            className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
        <div className='w-4/12 space-y-3'>
          <p>UID</p>
          <input
            type="text"
            name="proposedStudentJointRepresentative2.proposedStudentRepresentativeUid"
            value={localFormData.proposedStudentJointRepresentative2?.proposedStudentRepresentativeUid || ''}
            onChange={handleInputChange}
            className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
        <div className='w-4/12 space-y-3'>
          <p>PHONE NO</p>
          <input
            type="tel"
            name="proposedStudentJointRepresentative2.MobileNumber"
            value={localFormData.proposedStudentJointRepresentative2?.MobileNumber || ''}
            onChange={handleInputChange}
            className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='w-full flex justify-end gap-6 px-5 py-16'>
        <div onClick={() => { setPagination(pagination - 1) }} className='bg-[#767676] text-white px-4 py-3 rounded-lg hover:cursor-pointer'>BACK</div>
        <div onClick={handleNext} className='bg-[#6296FE] text-white px-4 py-3 rounded-lg gap-2 flex items-center justify-center hover:cursor-pointer'>
          <p>NEXT</p>
          <Image src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default SecondForm;
