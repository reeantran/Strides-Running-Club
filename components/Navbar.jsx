'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Cards', href: '/cards' },
  { label: 'Officers', href: '/officers' },
  { label: 'Schedule', href: '/schedule' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999] bg-white flex justify-center">
      <div className="max-w-content w-full flex justify-between items-center mx-auto px-[30px] py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline text-black text-[2rem] font-sailors"
        >
          <Image
            src="/images/logos/strides-logo.png"
            alt="Strides Logo"
            width={70}
            height={70}
            className="max-h-[70px] w-auto"
          />
          at UCSD
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="
                  text-black
                  no-underline
                  flex
                  items-center
                  justify-center
                  px-4
                  py-4
                  font-sailors
                  hover:scale-110
                  transition-transform
                  duration-500
                  text-[1.25rem]
                "
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden bg-transparent border-none cursor-pointer p-2"
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

      {/* Mobile Dropdown */}
      <ul
        className={`
          md:hidden
          absolute
          top-full
          left-0
          w-full
          bg-white
          list-none
          text-center
          z-[99]
          text-[1.6rem]
          transition-all
          duration-500
          ${
            menuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <li
            key={href}
            className="w-full border-b border-gray-100 last:border-0"
          >
            <Link
              href={href}
              onClick={() => setMenuOpen(false)}
              className="
                text-black
                no-underline
                w-full
                flex
                items-center
                justify-center
                py-6
                font-sailors
              "
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}