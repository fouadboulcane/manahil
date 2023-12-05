import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='pt-16 bg-white'>
        <div className='max-w-contentContainer px-6 lg:px-0 m-auto flex flex-col divide-y divide-gray-300'>
            <div className='pb-16 grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0'>
                <div className='col-span-1 flex flex-col space-y-4'>
                    <div className='flex space-x-2 items-center'>
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            height={24}
                            width={24}
                        />
                        <h2 className='font-bold font-titles text-lg'>Manahil</h2>
                    </div>
                    <p className='text-md'>
                        Credly by Pearson hosts the largest and most-connected digital credential 
                        network. We help the world speak a common language of verified knowledge, 
                        skills, and abilities.
                    </p>
                    <div className='flex space-x-4'>
                        <Image
                            src="/appstore.svg"
                            alt="applestore"
                            width={100}
                            height={70}
                        />
                        <Image
                            src="/googleplay.svg"
                            alt="googleplay"
                            width={110}
                            height={80}
                        />
                    </div>
                    <div className='flex space-x-4'>
                        <FaFacebook className="h-5 w-5" />
                        <FaLinkedinIn className="h-5 w-5" />
                        <FaYoutube className="h-5 w-5" />
                    </div>
                </div>
                <div className='col-span-1'></div>
                <div className='col-span-1 flex space-x-4'>
                    <ul className='flex flex-col space-y-3'>
                        <li className='mb-2'><Link href="/" className='font-semibold text-sm'>Learn More</Link></li>
                        <li><Link href="/" className='text-sm hover:text-teal-400 transition duration-150'>About Us</Link></li>
                        <li><Link href="/" className='text-sm hover:text-teal-400 transition duration-150'>Support</Link></li>
                        <li><Link href="/" className='text-sm hover:text-teal-400 transition duration-150'>Careers</Link></li>
                        <li><Link href="/" className='text-sm hover:text-teal-400 transition duration-150'>Legal</Link></li>
                        <li><Link href="/" className='text-sm hover:text-teal-400 transition duration-150'>For Developers</Link></li>
                    </ul>
                    <ul className='flex flex-col space-y-3'>
                        <li className='mb-2'><Link href="/" className='font-semibold text-sm'>Other Solutions</Link></li>
                        <li><Link href="/" className='text-sm hover:text-teal-400 transition duration-150'>Pearson TalentLens</Link></li>
                        <li><Link href="/" className='text-sm hover:text-teal-400 transition duration-150'>Pearson Skill Accelerator</Link></li>
                    </ul>
                </div>
            </div>
            <nav className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between pt-8 pb-12'>
                <div>© Copyright 2023 - Croply</div>
                <ul className='flex space-x-6'>
                    <li><Link href="/" className='hover:text-teal-400 transition duration-150'>Terms of Use</Link></li>
                    <li><Link href="/" className='hover:text-teal-400 transition duration-150'>Privacy Policy</Link></li>
                    <li><Link href="/" className='hover:text-teal-400 transition duration-150'>Cookies</Link></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer 