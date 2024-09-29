import React, { useState } from 'react';
import Image from 'next/image';
import arrow from '../../images/Group 3430.png';

const entityTypes = ["CLUB", "DEPT. SOCIETY", "COMMUNITY", "PROFF. SOCIETY"];
const entitycategoryData = ["A", "B", "C", "D"];
const proposedByData = ["Student", "Faculty"];

const FirstForm = ({ pagination, setPagination, formData, updateFormData }: any) => {
  const [localFormData, setLocalFormData] = useState(formData);

  // Handle input change for text fields
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setLocalFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  // Handle select change for clickable divs
  const handleSelectChange = (name: any, value: any) => {
    setLocalFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  // Update formData on next button click and go to the next step
  const handleNext = () => {
    updateFormData(localFormData); // Sync with parent component
    setPagination(pagination + 1); // Move to the next step
  };

  return (
    <div className="w-full">
      <div className="border-[#99BBFF] border-2 rounded-xl w-10/12 mx-auto px-3 py-2 space-y-3">
        <p className="font-semibold">GENERAL POINTS:</p>
        <p>1. Recommendation from the Member of Advisory Board is mandatory</p>
        <p>2. Required Documents: Please refer to the attached Appendix - 1</p>
        <p className="font-semibold">
          <sup>*</sup>Note: Read the [Co- Curricular Document] and [List of Clubs @CU Document] before filing the form.
        </p>
      </div>

      {/* Entity Types Section */}
      <div className="entitytypesection w-10/12 mx-auto space-y-6 py-10">
        <p className="text-xl text-slate-600">Types of Entity</p>
        <div className="flex gap-4">
          {entityTypes.map((entity, index) => (
            <div
              key={index}
              onClick={() => handleSelectChange('entityType', entity)}
              className={
                localFormData.entityType === entity
                  ? 'bg-[#BDD3FF] hover:cursor-pointer px-4 py-3 rounded-lg'
                  : 'border-2 border-[#99BBFF] hover:cursor-pointer px-4 py-3 rounded-lg'
              }
            >
              <p>{entity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Name and Date Section */}
      <div className="nameanddatesection flex w-10/12 mx-auto justify-between">
        <div className="w-5/12 space-y-3">
          <p>PROPOSED NAME</p>
          <input
            type="text"
            name="ProposedEntityName"
            value={localFormData.ProposedEntityName || ''}
            onChange={handleInputChange}
            className="outline-none w-full border-black border-2 rounded-lg py-2 px-3"
          />
        </div>
        <div className="w-5/12 space-y-3">
          <p>PROPOSED DATE</p>
          <input
            type="date"
            name="ProposedDate"
            value={localFormData.ProposedDate || ''}
            onChange={handleInputChange}
            className="outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3"
          />
        </div>
      </div>

      {/* Entity Category Section */}
      <div className="entitycategirysection w-10/12 mx-auto py-10 space-y-6">
        <div className="heading space-y-3">
          <p>CATEGORY OF ENTITY</p>
          <div className="flex gap-2 items-center">
            <p className="rounded-full px-3 border-slate-300 border-2 text-slate-400">i</p>
            <p className="text-slate-400">From club list document</p>
          </div>
        </div>
        <div className="flex gap-4">
          {entitycategoryData.map((category, index) => (
            <div
              key={index}
              onClick={() => handleSelectChange('entityCategory', category)}
              className={
                localFormData.entityCategory === category
                  ? 'bg-[#BDD3FF] hover:cursor-pointer px-4 py-3 rounded-lg'
                  : 'border-2 border-[#99BBFF] hover:cursor-pointer px-4 py-3 rounded-lg'
              }
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proposed By Section */}
      <div className="secondlastsection w-10/12 mx-auto flex justify-between">
        <div className="space-y-3">
          <p className="heading">PROPOSED BY</p>
          <div className="flex gap-4">
            {proposedByData.map((proposedby, index) => (
              <div
                key={index}
                onClick={() => handleSelectChange('ProposedBy', proposedby)}
                className={
                  localFormData.ProposedBy === proposedby
                    ? 'bg-[#BDD3FF] hover:cursor-pointer px-4 py-3 rounded-lg'
                    : 'border-2 border-[#99BBFF] hover:cursor-pointer px-4 py-3 rounded-lg'
                }
              >
                <p>{proposedby}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-6 w-6/12 items-center">
          <div className="space-y-3">
            <p>NAME</p>
            <input
              type="text"
              name="proponentName"
              value={localFormData.proponentName || ''}
              onChange={handleInputChange}
              className="outline-none w-full border-black border-2 rounded-lg py-2 px-3"
            />
          </div>
          <div className="space-y-3">
            <p>DEPARTMENT</p>
            <input
              type="text"
              name="proponentDepartment"
              value={localFormData.proponentDepartment || ''}
              onChange={handleInputChange}
              className="outline-none w-full border-black border-2 rounded-lg py-2 px-3"
            />
          </div>
        </div>
      </div>

      {/* Cluster and Institute Section */}
      <div className="lastsection py-10 flex w-10/12 mx-auto justify-between">
        <div className="w-5/12 space-y-3">
          <p>CLUSTER</p>
          <input
            type="text"
            name="EntityCluster"
            value={localFormData.EntityCluster || ''}
            onChange={handleInputChange}
            className="outline-none w-full border-black border-2 rounded-lg py-2 px-3"
          />
        </div>
        <div className="w-5/12 space-y-3">
          <p>INSTITUTE</p>
          <input
            type="text"
            name="EntityInstitute"
            value={localFormData.EntityInstitute || ''}
            onChange={handleInputChange}
            className="outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-end gap-6 px-5 py-16">
        <div onClick={() => setPagination(pagination - 1)} className="bg-[#767676] text-white px-4 py-3 rounded-lg hover:cursor-pointer">
          CANCEL
        </div>
        <div onClick={handleNext} className="bg-[#6296FE] text-white px-4 py-3 rounded-lg gap-2 flex items-center justify-center hover:cursor-pointer">
          <p>NEXT</p>
          <Image src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
