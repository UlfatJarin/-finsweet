import React from 'react'
import Container from './Layer/Container'
import card1 from '../../public/card1.jpg'
import card2 from '../../public/card2.jpg'
import card3 from '../../public/card3.jpg'

const Home = () => {
    return (
        <div className='pt-14 pb-16'>
            <Container >
                <div className='flex justify-between items-center mb-16'>
                <h1 className='text-[48px] font-semibold text-[#282938]'>View our projects</h1>
                <p className='font-medium text-[#282938]'>View More</p>
                </div>
                <div className='w-full grid grid-cols-3 grid-rows-2 gap-8  '>
                    <div className=' object-cover row-span-2 col-span-2 relative hover:after:w-1/2 hover:after:h-full  hover:after:absolute  hover:after:top-0 hover:after:left-0 hover:after:bg-[rgba(28,30,83,0.42)]'>
                    <div className='w-[313px] absolute  bottom-20 opacity-0 left-12 z-30 hover:opacity-100'>
                        <h2 className='text-white leading-6 text-2xl font-semibold'>Workhub office Webflow Webflow Design</h2>
                        <p className='text-white leading-6 mt-4 mb-10 '>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <p className='text-[#FCD980] leading-6 '>View project</p>
                    </div>
                        <img className='w-full ' src={card1} alt="card1" />
                    </div>
                    <div className=' object-cover  relative hover:after:w-full hover:after:h-full  hover:after:absolute  hover:after:top-0 hover:after:left-0 hover:after:bg-[rgba(28,30,83,0.42)] '>
                        <img className='' src={card2} alt="card2" />
                    </div>
                    <div className='bg-slate-400'>
                        <img className='' src={card3} alt="card3" />
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Home