import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { prefix } from '@/prefix'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className='py-20'>
        <div className='max-w-containerxs px-6 lg:px-0 m-auto flex flex-col justify-center items-center text-center space-y-8'>
            <h2 className='font-titles text-5xl font-semibold'>Digital Credentials & Verified Skills Transform the Talent Marketplace</h2>
            <p className='text-lg'>Experience an integrated suite of solutions to accelerate your business in the competitive skills-based economy—whether you’re a learning or training provider looking for a trusted digital credentialing platform, or an employer looking to prepare your workforce for the future.</p>
        </div>
        <div className='mt-12 max-w-contentContainer px-6 lg:px-0 m-auto flex flex-col justify-center items-center text-center space-y-8'>
            <Tabs defaultValue="digital_creds" className="flex flex-col lg:flex-row lg:space-x-8 w-full">  
                <div className="w-full lg:w-3/5 flex-shrink-0">
                  <TabsContent value="digital_creds">
                      <Image 
                        src={`${prefix}/digital_creds.webp`}
                        alt='Digital Credentials'
                        width={600}
                        height={600}
                      />
                  </TabsContent>
                  <TabsContent value="workforce_insights">
                    <Image 
                        src={`${prefix}/workforce_insights.webp`}
                        alt='Workforce Insights'
                        width={600}
                        height={600}
                      />
                  </TabsContent>
                  <TabsContent value="workforce_planning">
                    <Image 
                        src={`${prefix}/workforce_planning.webp`}
                        alt='Workforce Planning'
                        width={600}
                        height={600}
                      />
                  </TabsContent>
                  <TabsContent value="recruiting">
                    <Image 
                        src={`${prefix}/recruiting.webp`}
                        alt='Recruiting'
                        width={600}
                        height={600}
                      />
                  </TabsContent>
                </div>
                <div className='w-full lg:w-2/5 flex-shrink-0'>
                  <div>
                      <TabsList className='w-full flex flex-col space-y-4 h-fit p-0 bg-transparent'>
                        <TabsTrigger value="digital_creds" className='p-6 flex whitespace-normal rounded-none border-l-4 border-gray-100 bg-transparent text-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:border-orange-500 data-[state=active]:shadow-none'>
                            <div className="flex flex-col space-y-2 items-start">
                              <h2 className='text-lg font-semibold'>Digital Credentials</h2>
                              <p className='text-md text-left'>Skip the manual paperwork and automatically issue verified digital badges to recognize all kinds of achievements</p>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="workforce_insights" className='p-6 flex whitespace-normal rounded-none border-l-4 border-gray-100 bg-transparent text-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:border-orange-500 data-[state=active]:shadow-none'>
                            <div className="flex flex-col space-y-2 items-start">
                              <h2 className='text-lg font-semibold'>Workforce Insights</h2>
                              <p className='text-md text-left'>Understand the skills each of your employees brings through the world's most connected digital credentialing network</p>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="workforce_planning" className='p-6 flex whitespace-normal rounded-none border-l-4 border-gray-100 bg-transparent text-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:border-orange-500 data-[state=active]:shadow-none'>
                            <div className="flex flex-col space-y-2 items-start">
                              <h2 className='text-lg font-semibold'>Strategic Workforce Planning</h2>
                              <p className='text-md text-left'>Uncover skills needed for the future and identify personalized learning paths for every employee in order to bridge the gap</p>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="recruiting" className='p-6 flex whitespace-normal rounded-none border-l-4 border-gray-100 bg-transparent text-black data-[state=active]:text-black data-[state=active]:bg-transparent data-[state=active]:border-orange-500 data-[state=active]:shadow-none'>
                            <div className="flex flex-col space-y-2 items-start">
                              <h2 className='text-lg font-semibold'>Skills-Based Recruiting</h2>
                              <p className='text-md text-left'>Source the best candidates and reliably evaluate them using verified skills and pre-hire assessments</p>
                            </div>
                        </TabsTrigger>
                    </TabsList>
                  </div>
                  
                </div>
                
            </Tabs>
        </div>
    </section>
  )
}

export default Services