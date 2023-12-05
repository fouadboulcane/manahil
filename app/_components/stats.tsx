import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <section className='py-20 bg-teal-500'>
        <div className="max-w-contentContainer px-6 lg:py-0 m-auto flex flex-col space-y-8 items-center">
            <h4 className='uppercase text-md font-bold'>The Stats</h4>
            <h2 className='text-4xl font-titles font-semibold text-center'>The Numbers Don't Lie</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                <div className='col-span-1 p-8 items-center rounded-[25px] h-44 bg-white flex flex-col space-y-2 text-center'>
                    <h2 className='text-4xl font-titles font-semibold'>70M<span className=''>+</span></h2>
                    <p className='text-lg'>Credentials earned and managers</p>
                </div>
                <div className='col-span-1 p-8 items-center rounded-[25px] h-44 bg-white flex flex-col space-y-2 text-center'>
                    <h2 className='text-4xl font-titles font-semibold'>650k<span className=''>+</span></h2>
                    <p className='text-lg'>Digital credentials shared every month</p>
                </div>
                <div className='col-span-1 p-8 items-center rounded-[25px] h-44 bg-white flex flex-col space-y-2 text-center'>
                    <h2 className='text-4xl font-titles font-semibold'>75</h2>
                    <p className='text-lg'>NPS (Net Promoter Score) surpasses industry averages</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats