import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/elite_logo.png'

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link href='/'>
        <Image 
          src={Logo}
          alt="Elite Logo" 
          width={50} 
          height={50} 
        />
        </Link>

      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/pages/posts"
              className="text-white">Posts
            </Link>
          </li>
          <li>
            <Link href="/pages/contact"
              className="text-white">Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
