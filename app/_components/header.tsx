'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Navigation } from './navigation'
import { cn } from '@/lib/utils';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { prefix } from '@/prefix';


type Props = {}

const Header = (props: Props) => {
  const [smallHeader, setSmallHeader] = useState(true)
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
          setSmallHeader(window.pageYOffset > 10)
        );
    }
  }, [])

  return (
    <header className='w-full bg-white fixed z-[999]'>
        <div className={cn(
            'h-24 border-b-2 border-neutral-200 transition-height duration-500 ease-in-out',
            smallHeader ? 'h-16' : ''
        )}>
            <div className='max-w-contentContainer px-6 lg:px-0 m-auto h-full flex justify-between items-center'>
                <div className='flex space-x-2 items-center'>
                    <Image
                        src={`${prefix}/logo.svg`}
                        alt="Logo"
                        height={24}
                        width={24}
                    />
                    <h2 className='font-bold font-titles text-lg'>Manahil</h2>
                </div>
                <div className='hidden lg:flex space-x-4'>
                    <Button variant="tealOutline">Schedule a Demo</Button>
                    <Button variant="teal">Sign in</Button>
                </div>
                <div className='lg:hidden'>
                    {!showResponsiveMenu ? (
                        <RxHamburgerMenu onClick={() => setShowResponsiveMenu(true)} className="w-6 h-6" />
                    ) : (
                        <RxCross2 onClick={() => setShowResponsiveMenu(false)} className="w-6 h-6" />
                    )}
                </div>
            </div>
        </div>
        <div className='max-w-contentContainer hidden lg:flex m-auto h-16 items-center'>
            <Navigation />
        </div>
        <div className={cn(
            'lg:hidden absolute bg-white p-6 w-full h-0 transition duration-200',
            showResponsiveMenu ? 'block h-screen' : 'hidden'
        )}>
            <div className="w-full flex flex-col space-y-6">
                <div className='font-semibold'>Getting Started</div>
                <div className='font-semibold'>Solutions</div>
                <div className='font-semibold'>Documentation</div>
                <div className='font-semibold'>Resources</div>
                <div className='font-semibold'>Badge Earners</div>
                <Button variant="tealOutline">Schedule a Demo</Button>
                <Button variant="teal">Sign in</Button>
            </div>
        </div>
    </header>
  )
}

export default Header