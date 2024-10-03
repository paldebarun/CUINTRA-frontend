"use client"

import React, { useEffect, useState } from 'react'
import search from '../../images/search.png'
import Image from 'next/image'
import arrowdown from '../../images/keyboard_arrow_down.png'
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

interface Entity {
    ProposedEntityName: string;
    EntityDepartment: {
        name: string;
    };
    EntityInstitute: {
        name: string;
    };
    EntityCluster: {
        name: string;
    };
}

interface Department {
    _id: string;
    name: string;
}

interface Cluster {
    _id: string;
    name: string;
}

const EntityDisplay = () => {
    const [data, setData] = useState<Entity[]>([]);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    const [selectedClusters, setSelectedClusters] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [departments, setDepartments] = useState<Department[]>([]);
    const [clusters, setClusters] = useState<Cluster[]>([]); 

    // Fetch entities
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/clubRoutes/clubs');
                const result = await response.json();
                if (result.success) {
                    setData(result.Entity);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Fetch departments
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/departmentroutes/departments');
                const result = await response.json();
                if (result.success) {
                    setDepartments(result.departments); // <-- Make sure this is an array of Department objects
                }
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };
        fetchDepartments();
    }, []);

    // Fetch clusters
    useEffect(() => {
        const fetchClusters = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/cluster/clusters'); // <-- Update with your actual API endpoint for clusters
                const result = await response.json();
                if (result.success) {
                    setClusters(result.clusters); // <-- Assuming the clusters come in the result.clusters array
                }
            } catch (error) {
                console.error('Error fetching clusters:', error);
            }
        };
        fetchClusters();
    }, []);

    const handleDepartmentSelect = (department: string) => {
        setSelectedDepartments(prev =>
            prev.includes(department)
                ? prev.filter(d => d !== department)
                : [...prev, department]
        );
    };

    const handleClusterSelect = (cluster: string) => {
        setSelectedClusters(prev =>
            prev.includes(cluster)
                ? prev.filter(c => c !== cluster)
                : [...prev, cluster]
        );
    };

    const filteredData = data.filter(item =>
        (selectedDepartments.length === 0 || selectedDepartments.includes(item.EntityDepartment.name)) &&
        (selectedClusters.length === 0 || selectedClusters.includes(item.EntityCluster.name)) &&
        (item.ProposedEntityName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className='w-11/12 shadow-xl border rounded-2xl px-2 h-[700px] bg-[#F0F1F6]'>
            <div className='header py-4 flex justify-between px-3'>
                <div className='flex w-6/12 bg-[#F0F1F6] py-3 px-4 border shadow-inner rounded-full'>
                    <Image src={search} alt="search" />
                    <input type="text"
                        placeholder='Search by Name'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='outline-none px-4 w-full bg-[#F0F1F6]' />
                </div>

                {/* Department Filter */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='flex items-center border gap-2 shadow-lg py-2 px-4 rounded-full hover:cursor-pointer'>
                            <p className='font-normal'>Department</p>
                            <Image src={arrowdown} alt="keyboard-arrow-down" className='w-3 h-2' />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Select Departments</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {departments.map((department) => (
                            <DropdownMenuCheckboxItem
                                key={department._id} // Use the _id from API response
                                checked={selectedDepartments.includes(department.name)}
                                onCheckedChange={() => handleDepartmentSelect(department.name)}
                            >
                                {department.name}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Cluster Filter */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='flex items-center border gap-2 shadow-lg py-2 px-4 rounded-full hover:cursor-pointer'>
                            <p className='font-normal'>Clusters</p>
                            <Image src={arrowdown} alt="keyboard-arrow-down" className='w-3 h-2' />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Select Clusters</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {clusters.map((cluster) => (
                            <DropdownMenuCheckboxItem
                                key={cluster._id} // Use the _id from API response
                                checked={selectedClusters.includes(cluster.name)}
                                onCheckedChange={() => handleClusterSelect(cluster.name)}
                            >
                                {cluster.name}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Filtered Data Table */}
            <div className="w-full h-[700px] bg-[#F0F1F6] border rounded-3xl overflow-hidden">
                <div className="overflow-y-auto w-full max-h-[700px] border ">
                    <table className="w-full text-center">
                        <thead className="bg-gradient-to-r from-[#6FA8E7] to-[#194D95] rounded-t-2xl ">
                            <tr>
                                <th className="border-b-2 text-white font-normal py-6">Name</th>
                                <th className="border-b-2 text-white font-normal py-6">Department</th>
                                <th className="border-b-2 text-white font-normal py-6">Institute</th>
                                <th className="border-b-2 text-white font-normal py-6">Cluster</th>
                                <th className="border-b-2 text-white font-normal py-6">Join</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className={`border-b border-black ${index === data.length - 1 ? 'rounded-b-2xl' : ''}`}>
                                    <Link href={`../${item.ProposedEntityName}/membershipForm`}>
                                        <td className="py-2 px-4 font-bold">{item.ProposedEntityName}</td>
                                    </Link>
                                    <td className="py-2 px-4 font-normal text-sm">{item.EntityDepartment.name}</td>
                                    <td className="py-2 px-4 font-normal text-sm">{item.EntityInstitute.name}</td>
                                    <td className="py-2 px-4 font-normal text-sm">{item.EntityCluster.name}</td>

                                    <Link href={`../${item.ProposedEntityName}/membershipForm`} >
                                       <Button variant="outline">
                                        Join
                                       </Button>

                                    </Link>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EntityDisplay;
