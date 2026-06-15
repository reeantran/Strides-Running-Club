'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Cards',    href: '/cards' },
  { label: 'Officers', href: '/officers' },
  { label: 'Schedule', href: '/schedule' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999] bg-white h-20 flex justify-center items-center text-[1.2rem]">
      <div className="max-w-content w-full flex justify-between items-center h-20 mx-auto px-0">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center no-underline text-black text-[2rem] font-sailors cursor-pointer"
        >
          <Image
            src="/images/logos/strides-logo.png"
            alt="Strides Logo"
            width={70}
            height={70}
            className="m-[5px] max-h-[70px] w-auto"
          />
          at UCSD
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center list-none text-center h-20">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="h-20">
              <Link
                href={href}
                className="text-black no-underline flex items-center justify-center px-4 h-full
                           hover:scale-110 transition-transform duration-500 font-sailors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          id="mobile-menu"
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden absolute top-[20%] right-[5%] translate-x-[5%] translate-y-[20%]
                     bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-[25px] h-[3px] my-[5px] bg-black transition-all duration-500"
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <ul
        className={`
          md:hidden absolute w-full bg-white list-none text-center z-[99]
          transition-all duration-500 text-[1.6rem]
          ${menuOpen
            ? 'top-full opacity-100 h-[50vh]'
            : 'top-[-1000px] opacity-0 h-[50vh]'}
        `}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href} className="w-full">
            <Link
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-black no-underline w-full flex items-center justify-center p-8 font-sailors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
