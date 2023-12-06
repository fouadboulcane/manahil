import { Button } from '@/components/ui/button'
import { prefix } from '@/prefix'
import Image from 'next/image'
import React from 'react'

type Props = {}

const CallActions = (props: Props) => {
  return (
    <section className='py-20 flex flex-col space-y-32'>
        <div className='max-w-contentContainer px-6 lg:px-0 m-auto flex flex-col lg:flex-row w-full'>
          <div className='lg:w-1/2 flex flex-col space-y-8 my-auto'>
            <h2 className='font-titles text-5xl font-semibold'>For Learning & Training Providers</h2>
            <p className='text-lg'>Become a part of a searchable network alongside some of the most powerful training, assessment, learning, and certification providers in the world. The network impact allows you to increase discoverability, gain brand champions, amplify your brand, strengthen trust and credibility, and create value for earners.</p>
            <div>
              <Button size="lg" variant="lime">Learn More</Button>
            </div>
          </div>
          <div className='lg:w-1/2 flex justify-end'>
            <Image 
              src={`${prefix}/tech.webp`}
              alt="tech"
              width={500}
              height={392}
            />
          </div>
        </div>
        <div className='max-w-contentContainer px-6 lg:px-0 m-auto flex flex-col lg:flex-row w-full'>
          <div className='lg:w-1/2'>
            <Image 
              src={`${prefix}/tech2.webp`}
              alt="tech2"
              width={1041}
              height={963}
            />
          </div>
          <div className='lg:w-1/2 flex flex-col space-y-8 my-auto'>
            <h2 className='font-titles text-5xl font-semibold'>Workforce Planning</h2>
            <p className='text-lg'>The most connected digital credentialing platform ensures you’ll have the most comprehensive insights into the skills your employees have, regardless of where they earned them. With a clear picture of the capabilities your employees have, you can upskill and reskill to prepare for the future.</p>
            <div>
              <Button size="lg" variant="lime">Learn More</Button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CallActions