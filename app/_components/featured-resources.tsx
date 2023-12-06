import { prefix } from '@/prefix';
import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {}

const FeaturedResources = (props: Props) => {
  return (
    <section className='py-20'>
        <div className='max-w-contentContainer px-6 lg:px-0 m-auto flex flex-col items-center space-y-10'>
            <h2 className='font-titles font-semibold text-4xl'>Featured Resources</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[0,1,2].map((post, i) => (
                    <div key={i} className='group shadow-lg flex flex-col rounded-xl overflow-hidden'>
                        <Image
                            src={`${prefix}/post_pvh.webp`}
                            alt="sdfs"
                            width={200}
                            height={120}
                            className='bg-neutral-500 w-full'
                        />
                        <div className='flex flex-col justify-between space-y-3 p-7 h-[320px]'>
                            <div className='flex flex-col space-y-3'>
                                <h4 className='text-sm font-semibold capitalize'>CASE STUDY</h4>
                                <h3 className='text-lg font-semibold line-clamp-4'>PVH: Before startin the creation process, things to discover, more akinu admiral</h3>
                                <p className='text-md line-clamp-3'>Digital credentials translate training into career success for earners, driving demand and</p>
                            </div>
                            <div>
                                <a href="" className='flex font-semibold space-x-8 items-center'>Learn More <IoIosArrowRoundForward className="h-5 w-5 ml-2 transition duration-300 group-hover:translate-x-1" /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default FeaturedResources