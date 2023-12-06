import { Button } from '@/components/ui/button'
import { prefix } from '@/prefix'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='w-full pt-20 lg:pt-32'>
        <div className='max-w-contentContainer px-6 lg:px-0 m-auto py-12 flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 flex flex-col space-y-4'>
                <h2 className='text-5xl lg:text-6xl font-titles font-semibold'>Empower Your Workforce and Unlock Your Organization's True Potential</h2>
                <p className='text-lg'>Issue digital badges, gain talent marketplace insights, and use verified skills to make better human capital management decisions on the world’s largest digital credential network.</p>
                <div>
                    <Button size="xl" variant="teal" className=''>Schedule a Demo</Button>
                </div>
            </div>
            <div className='w-1/2'>
              <Image 
                src={`${prefix}/shape.webp`}
                alt="shape"
                width={1700}
                height={1500}
              />
            </div>
        </div>
    </section>
  )
}

export default Hero