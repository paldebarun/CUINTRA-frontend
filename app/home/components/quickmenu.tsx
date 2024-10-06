"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';

interface QuickMenuItem {
    title: string;
    subtitle?: string | number;
    icon?: JSX.Element;
    action?: {
        text: string;
        href: string;
    };
}

const QuickMenuItem: React.FC<QuickMenuItem> = ({ title, subtitle, icon, action }) => (
    <div className="bg-gradient-to-r from-[#6fa8e7] to-[#194d95] text-white p-4 py-8 flex flex-col items-center justify-center text-center rounded-3xl shadow-lg">
        {icon && <div className="text-4xl mb-2">{icon}</div>}
        {subtitle && <div className="text-3xl font-bold mb-1">{subtitle}</div>}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {action && (
            <Link
                href={action.href}
                className="mt-2 text-sm underline hover:text-blue-200 transition-colors duration-200"
            >
                {action.text}
            </Link>
        )}
    </div>
);

export default function QuickMenu() {
    const [menuItems, setMenuItems] = useState<QuickMenuItem[]>([
        {
            title: 'Active University Bodies',
            subtitle: '0',
            action: { text: 'View more', href: '/Entities/Club' },
        },
        {
            title: 'Students enrolled',
            subtitle: '0',
            action: { text: 'Enroll now', href: '#' },
        },
        {
            title: 'Event approvals',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Credits and GP',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Forms & Documents',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
    ]);

    useEffect(() => {
        const fetchBodies = async () => {
            const loadingId=toast.loading("loading...");
            try {
                const res = await axios.get('https://intracu-backend-mdl9.onrender.com/api/allbodies/getallbodies');
                console.log("this is response of bodies ", res);

                const members=await axios.get('https://intracu-backend-mdl9.onrender.com/api/member/getAllmembers');

                console.log("this is response of members : ",members);


                if (res.data.success && members.data.success) {
                   
                    setMenuItems(prevItems =>
                        prevItems.map((item, index) =>
                            index === 0 ? { ...item, subtitle: res.data.totalBodiesNumber.toString() } : item
                        )
                    );
                    setMenuItems(prevItems =>
                        prevItems.map((item, index) =>
                            index === 1 ? { ...item, subtitle: members.data.response.length.toString() } : item
                        )
                    );

                    toast.dismiss(loadingId);
                    
                }

                
            } catch (error) {
                toast.dismiss(loadingId);
                toast.error('an error occured while fetching data');
                console.error("Error fetching bodies:", error);
            }
        };

        

        fetchBodies();
    }, []);

    return (
        <div className="h-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {menuItems.map((item, index) => (
                    <QuickMenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
