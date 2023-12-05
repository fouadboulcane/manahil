import React from 'react'

type Props = {}

const Network = (props: Props) => {
  return (
    <section className='py-20 bg-[#f8f8f8]'>
        <div className='max-w-containerxs px-6 lg:px-0 m-auto flex flex-col justify-center items-center text-center space-y-8'>
            <h2 className='font-titles text-5xl font-semibold'>The Power of the Network</h2>
            <p className='text-lg'>Credly is the network of choice where 3,500+<br />
certification, assessment, and training providers and employers issue their credentials. Empower earners to connect and grow through a catalog of 90,000+ learnings, including 95% of the top IT certifications.</p>
        </div>
    </section>
  )
}

export default Network