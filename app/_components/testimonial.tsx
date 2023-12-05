import Image from 'next/image'
import React from 'react'
import { ImQuotesLeft } from "react-icons/im";

type Props = {}

const Testimonial = (props: Props) => {
  return (
    <section className='py-20 relative'>
        <div className='absolute top-0'>
            <Image 
                src='/dots.webp'
                alt='dots'
                width={250}
                height={250}
                className=''
            />
        </div>
        <div className="max-w-contentContainer px-6 lg:py-0 m-auto">
            <div className='bg-[#d2db0e] p-10 rounded-[40px] flex flex-col space-y-6 justify-center items-center'>
                <ImQuotesLeft className="h-10 w-10" />
                <h3 className='text-xl text-center'>“How have we suddenly generated so much dramatic increase in the visibility of our program? It’s all been driven by badging through Credly’s Acclaim platform.”</h3>
                <div className="flex flex-col lg:flex-row items-center justify-center space-x-8 divide-x divide-neutral-700">
                    <div>
                        <Image 
                            src="/forgerock.webp"
                            alt="forgerock"
                            width={160}
                            height={80}
                        />
                    </div>
                    <div className='flex flex-col justify-around space-y-3 pl-8'>
                        <h5 className='text-md'>Kevin Streater, Vice President</h5>
                        <h5 className='text-md'>ForgeRok University</h5>
                    </div>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default Testimonial