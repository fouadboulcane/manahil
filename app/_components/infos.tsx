import { prefix } from '@/prefix'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Infos = (props: Props) => {
  return (
    <section className='py-20 bg-[#f8f8f8]'>
        <div className='max-w-contentContainer px-6 lg:py-0 m-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8'>
            <div className='col-span-1 flex flex-col space-y-4'>
                <Image 
                    src={`${prefix}/fingerprint.svg`}
                    alt="infos"
                    width={80}
                    height={80}
                />
                <h3 className='text-xl font-semibold'>Industry-Leading Technology</h3>
                <p className='text-md'>From robust metadata, sophisticated workforce forecasting AI, and intelligent candidate sourcing algorithms, you’ll be prepared to build a workforce fit for the future.</p>
            </div>
            <div className='col-span-1 flex flex-col space-y-2'>
                <Image 
                    src={`${prefix}/headphone.svg`}
                    alt="infos"
                    width={80}
                    height={80}
                />
                <h3 className='text-xl font-semibold'>Unmatched Customer Support</h3>
                <p className='text-md'>Gain access to a dedicated support team with world-class digital credentialing expertise and certifications in customer success—bringing you guidance and best practices to every implementation.</p>
            </div>
            <div className='col-span-1 flex flex-col space-y-2'>
                <Image 
                    src={`${prefix}/shield.svg`}
                    alt="infos"
                    width={80}
                    height={80}
                />
                <h3 className='text-xl font-semibold'>Enterprise Class Security</h3>
                <p className='text-md'>Bring verified skills data and predictive AI to human capital decision points where it’s needed most. And, rely on our enterprise-class hosting, disaster recovery, and data security so you can focus on your business needs.</p>
            </div>
        </div>
    </section>
  )
}

export default Infos