import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    
    <div name='home' className='w-full h-screen bg-gradient-to-r from-[#020024]  to-[#00d4ff]'>
        {/* name property set to help with smooth scroll */}

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#00FFFF] py-1'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#e2e9fb] py-3'>Super Dev</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#e2e9fb] py-2'>I'm a full-stack developer.</h2>
            <p className='text-[#bec2cd] py-1 max-w-[700px]'>I specialize in building EdTech digital
                experiences and responsive full-stack 
                web applications.
            </p>
            <div>
                <button className='text-[#00FFFF] group border-2 border-[#00FFFF] rounded-xl px-6 py-3 my-4 flex items-center hover:bg-[#0a192f]'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home;