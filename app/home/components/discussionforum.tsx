"use client"
import React from 'react'
import Image from 'next/image'
import '../styles/home.css'

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
            <Image src="/poll.png" alt="Poll" width={32} height={32} />
        ),
    },
    {
        id: 2,
        name: 'John Doe',
        action: 'Sent a message',
        icon: (
            <Image src="/msg.png" alt="Poll" width={32} height={32} />
        ),
    },
    {
        id: 3,
        name: 'John Doe',
        action: 'Made an announcement',
        icon: (
            <Image src="/announcement.png" alt="Poll" width={32} height={32} />
        ),
    },
]

const ForumItem: React.FC<ForumItem> = ({ name, action, icon }) => (
    <div className="flex items-center justify-between p-4 bg-white border-4 border-[#6fa8e7] mb-2 rounded-[25px]">
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                <Image
                    src="/pfp.png"
                    alt={name}
                    width={900}
                    height={900}
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
        .blur-overlay {
          background: linear-gradient(to bottom, transparent, white);
        }
      `}</style>
            <div className="w-full mx-auto">
                <div className="grad rounded-t-[50px] text-white text-xl font-bold py-3 px-4 inter-medium text-center">
                    Discussion forum
                </div>
                <div className="bg-gray-100 p-4 rounded-b-[50px] relative">
                    <div className="h-[280px] overflow-y-auto space-y-3 pr-2">
                        {forumItems.map((item) => (
                            <ForumItem key={item.id} {...item} />
                        ))}
                    </div>
                    <div className="blur-overlay absolute bottom-0 left-0 right-0 h-20 pointer-events-none rounded-b-[50px]"></div>
                </div>
            </div>
        </>
    )
}