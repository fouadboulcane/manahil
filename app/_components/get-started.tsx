import { Button } from '@/components/ui/button'
import { prefix } from '@/prefix'
import Image from 'next/image'
import React from 'react'

type Props = {}

const GetStarted = (props: Props) => {
  return (
    <div className=''>
        <svg className='-mt-28 -mb-32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffbb1c" fill-opacity="1" d="M0,64L120,96C240,128,480,192,720,197.3C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <section className='overflow-hidden relative bg-[#ffbb1c] pb-20 pt-28'>
            <div className='text-center flex flex-col space-y-12'>
                <h2 className='text-4xl font-grad font-semibold'>Ready to get started?</h2>
                <div>
                    <Button variant="teal" size="xl">Contact Sales</Button>
                </div>
            </div>

            <Image 
                src={`${prefix}/lattice.svg`}
                alt="lattice"
                width={460}
                height={460}
                className='absolute left-0 -bottom-20'
            />
            <Image 
                src={`${prefix}/lattice_right.svg`}
                alt="lattice"
                width={520}
                height={460}
                className='absolute right-0 -bottom-20'
            />
        </section>
        
    </div>
  )
}

export default GetStarted