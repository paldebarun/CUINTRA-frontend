import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-4">
        <nav>
          <ul className="space-y-2">
            <li className="bg-blue-700 p-2 rounded">Explore</li>
            <li>Events list</li>
            <li>Testimonials</li>
            <li>FAQs</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg" alt="University Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold">Chandigarh University</h1>
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">NAAC Grade A+</span>
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">Curricular Activities</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-2 rounded border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-2 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Log in</button>
          </div>
        </header>

        {/* Blue blocks */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          {[
            { title: 'Active University Bodies', value: '500+', action: 'View more' },
            { title: 'Students enrolled', value: '1000+', action: 'Enroll now' },
            { title: 'Event approvals', icon: 'check' },
            { title: 'Credits and GP', icon: 'circle' },
            { title: 'Forms & Documents', icon: 'document' },
          ].map((block, index) => (
            <div key={index} className="bg-blue-500 text-white p-4 rounded-lg flex flex-col items-center justify-center">
              {block.icon ? (
                <span className="text-4xl mb-2">
                  {block.icon === 'check' && '✓'}
                  {block.icon === 'circle' && '◯'}
                  {block.icon === 'document' && '📄'}
                </span>
              ) : (
                <span className="text-4xl font-bold mb-2">{block.value}</span>
              )}
              <h3 className="text-center">{block.title}</h3>
              {block.action && (
                <button className="mt-2 bg-blue-600 px-2 py-1 rounded text-sm">{block.action}</button>
              )}
            </div>
          ))}
        </div>

        {/* Event poster */}
        <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
          <Image src="/placeholder.svg" alt="CU FEST 2024" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold mb-2">CU FEST 2024 Is Live</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">Know more</button>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          {/* Discussion forum */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Discussion forum</h2>
            {[
              { name: 'John Doe', action: 'Created a poll' },
              { name: 'John Doe', action: 'Sent a message' },
              { name: 'John Doe', action: 'Made an announcement' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.action}</p>
                  </div>
                </div>
                <span className="text-blue-500">→</span>
              </div>
            ))}
          </div>

          {/* Ranking poster */}
          <div className="w-1/3 bg-blue-900 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">World's Top 500 Universities</h2>
            <p className="mb-4">in QS World University Rankings by Subject 2023</p>
            <div className="space-y-2">
              <div className="bg-yellow-500 text-blue-900 p-2 rounded">
                <span className="font-bold">India's No. 1</span>
                <p className="text-sm">Hospitality & Leisure Management</p>
              </div>
              <div className="bg-blue-800 p-2 rounded">
                <span className="font-bold">#10</span>
                <p className="text-sm">Petroleum Engineering</p>
              </div>
              <div className="bg-blue-800 p-2 rounded">
                <span className="font-bold">#11</span>
                <p className="text-sm">Hospitality & Leisure Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Memories and adventures */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Memories & Adventures</h2>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
                <Image src="/placeholder.svg" alt={`Memory ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}