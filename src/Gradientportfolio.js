import React from 'react';





const GradientPortfolio =()=> {
  return (
    <div className='container flex flex-col gap-6 px-6 mx-auto mt-10 md:mt-20'>
        <div className='flex gap-2'>

            
             <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute top-3 md:top-4 inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span class="relative inline-flex  top-3 md:top-4 rounded-full h-3 w-3 bg-white"></span>
                    
            </span>

            <span className='font-serif text-3xl text-white md:text-4xl'>Available for work!</span>
        </div>

        

         <div className='flex flex-col gap-2'>
         <div className='flex '>
            <h1 className='font-serif text-3xl text-transparent md:text-7xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-600 bg-clip-text'>Harsha Vardhan</h1>
         </div>
            <div className='flex '>
            <p className='font-mono text-xl font-semibold text-transparent md:text-2xl bg-gradient-to-l from-pink-500 via-blue-600 to-orange-600 bg-clip-text'>Web Designer</p>
            </div>
            <br/>
          <div className='flex '>
                <img src="myimage.jpg" className='w-[130px] rounded-full'></img>
          </div><br/>
          <p className='font-serif font-medium text-gray-300 md:text-xl'>I started as a visual designer making websites and doing UI design for businesses and companies, but now I do a mix of everything from media production to running e-commerce stores. I also make YouTube videos on tech, business and finance. I'm from the UK but am currently living in Dubai.</p>
          <br/>
          <div className='flex '>
          <a href="mailto:harshavardhan6304@gmail.com " target='_blank' className="px-4 py-1 font-mono text-xl font-semibold bg-white rounded-l-full text-blue-950">Contact</a> 
          <a href="https://drive.google.com/file/d/117_dh6fHTXicA2rNmC4u4IOSglFdmtBU/view?usp=sharing" target="_blank" className="px-4 py-1 font-mono text-xl font-medium text-white rounded-r-full bg-blue-950">Resume</a> 
          </div>
        </div>

           
        
         </div>
  );
}

export default GradientPortfolio;
