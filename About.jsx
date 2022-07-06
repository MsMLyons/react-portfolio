import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#010f33] text-[#bec2cd]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'> 
                    <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>About</p>
                </div>
                <div></div>                
                <div className='max-w-[1000px] w-full gap-8 px-8'>                    
                    <div className='sm:text-right'> 
                        <p>Hi. I'm Super Dev. Nice to meet you. Call to action to look at portfolio.
                            Lorem ipsum, dolor sit amet.
                        </p>
                    </div>                     
                </div> 
                <div className='max-w-[1000px] w-full grid gap-8 px-8'>            
                    <div className='sm:text-right'> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Autem, vero possimus architecto labore ipsa ipsam nemo 
                            </p>
                    </div>
                </div> 
            </div>  
        </div>     
    </div>
  )
}

export default About;