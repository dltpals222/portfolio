'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-dark-bg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">포트폴리오</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/skills" className="hover:text-primary">Skills</Link>
            <Link href="/portfolio" className="hover:text-primary">Portfolio</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">메뉴 열기</span>
              {/* 햄버거 메뉴 아이콘 */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/about" className="block px-3 py-2 hover:bg-gray-100">About</Link>
          <Link href="/skills" className="block px-3 py-2 hover:bg-gray-100">Skills</Link>
          <Link href="/portfolio" className="block px-3 py-2 hover:bg-gray-100">Portfolio</Link>
          <Link href="/contact" className="block px-3 py-2 hover:bg-gray-100">Contact</Link>
        </div>
      </div>
    </nav>
  )
} 