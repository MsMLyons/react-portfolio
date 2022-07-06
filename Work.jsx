import React from 'react';
import Adventure from '../assets/Adventure2.png';
import Inara from '../assets/Inara.jpg';
import Cafe from '../assets/Cafe.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-gradient-to-b from-[#00d4ff] to-[#010f33] text-[#e6e8ed]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>Web Development</p>
                <p className='py-8'>Take a look at some of my recent work:</p>
            </div>
            
            {/* Grid Container - change grid size here, first line of container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
                
                {/* Card */}
                <div style={{backgroundImage: `url(${Inara})`}}
                className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
                            Web Development 
                        </span>
                        <div className='pt-8 text-center'>                             
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Card */}
                <div style={{backgroundImage: `url(${Cafe})`}}
                className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
                            Web Development 
                        </span>
                        <div className='pt-8 text-center'>                             
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div style={{backgroundImage: `url(${Adventure})`}}
                className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
                            Brazilian Adventure 
                        </span>
                        <div className='pt-8 text-center'>                             
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work;