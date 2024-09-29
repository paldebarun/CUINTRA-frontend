
import Link from 'next/link';
import Image from 'next/image';

export default function MemberShipLayout({
    children,
  }: {
    children: React.ReactNode
  }){
  return (
    <div >
    <nav style={{ backgroundColor: '#b0acac' }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
        <Image src="/culogo.png" alt="Logo 1" width={120} height={50} />
        <Image src="/qsranking.png" alt="Logo 2" width={120} height={50} />
        <Image src="/cuactivitieslogo.png" alt="Logo 3" width={120} height={50} />
        </div>

          <div className="hidden md:flex items-center space-x-10 ml-auto">
            <Link href="/">
              <p className="text-white hover:text-white px-3 py-2 text-sm font-medium">Home</p>
            </Link>
            <Link href="/events">
              <p className="text-white hover:text-white px-3 py-2 text-sm font-medium">Events</p>
            </Link>
            <Link href="/activities">
              <p className="text-white hover:text-white px-3 py-2 text-sm font-medium">Activities</p>
            </Link>
            <Link href="/Entities/Club">
              <p className="text-white hover:text-white px-3 py-2 text-sm font-medium">Entities</p>
            </Link>
            <Link href="/login">
              <p className=" text-white font-bold py-2 px-4  border border-white rounded-3xl">
                Login
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        {/* Add mobile menu toggle here if needed */}
      </div>

    </nav>
  {children}
    </div>
  );
};


