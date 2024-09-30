"use client"
import React from 'react'
import Image from 'next/image'

interface ForumItem {
    id: number;
    name: string;
    action: string;
    icon: JSX.Element;
}

const forumItems: ForumItem[] = [
    {
        id: 1,
        name: 'John Doe',
        action: 'Created a poll',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        id: 2,
        name: 'John Doe',
        action: 'Sent a message',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 3,
        name: 'John Doe',
        action: 'Made an announcement',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
        ),
    },
]

const ForumItem: React.FC<ForumItem> = ({ name, action, icon }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 mb-2">
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                <Image
                    src="/placeholder.svg"
                    alt={name}
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </div>
            <div>
                <h3 className="font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600">{action}</p>
            </div>
        </div>
        <div className="text-blue-500">
            {icon}
        </div>
    </div>
)

export default function DiscussionForum() {
    return (
        <>
            <style jsx>{`
        .grad {
          background: linear-gradient(45deg, #6fa8e7 0%, #194d95 100%);
        }
      `}</style>
            <div className="w-full mx-auto p-4">
                <div className="grad rounded-t-[50px] text-white text-xl font-bold py-3 px-4 inter-medium text-center">
                    Discussion forum
                </div>
                <div className="bg-gray-100 p-4 rounded-b-lg">
                    {forumItems.map((item) => (
                        <ForumItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}