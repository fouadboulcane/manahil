import Image from 'next/image'
import React from 'react'

type Props = {}

const Partners = (props: Props) => {
  return (
    <section className='lg:h-40 py-8 lg:py-0 w-full bg-[#d2db0e]'>
        <div className='px-6 lg:px-0 lg:h-full max-w-contentContainer m-auto grid grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-6 items-center'>
            <Image 
                src='/bar_adobe.webp'
                alt='Adobe Logo'
                width={140}
                height={140}
            />
            <Image 
                src='/bar_dell.webp'
                alt='Dell Logo'
                width={50}
                height={140}
            />
            <Image 
                src='/bar_johnson.webp'
                alt='Johnson Controls Logo'
                width={90}
                height={140}
            />
            <Image 
                src='/bar_pennstate.webp'
                alt='Pennstate Logo'
                width={120}
                height={140}
            />
            <Image 
                src='/bar_ibm.webp'
                alt='IBM Logo'
                width={100}
                height={140}
            />
            <Image 
                src='/bar_aws.webp'
                alt='AWS Logo'
                width={80}
                height={140}
            />
        </div>
    </section>
  )
}

export default Partners