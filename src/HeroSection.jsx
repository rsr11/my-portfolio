import React from 'react'
import locationIcon from "./assets/location.png"
import {motion} from "framer-motion";




const Heading = ()=>{
  return (
<motion.main  className='flex flex-col justify-center items-center h-[80vh] font-El-Messiri z-0 '>
      <h1 className='text-6xl font-bold mb-4 text-center'>Hi, I'm Rajeshwar!</h1>
      <p className='text-3xl text-center'>a full-stack web developer</p>
      <p className='text-3xl font-semibold mt-2 flex gap-4'>
      <img src={locationIcon} alt="" className='w-6 h-6 flex items-center' />
        Jaipur,India
        </p>
    </motion.main>

)}


const Scroller = ()=>{
  return <>
  
        <motion.div id='Home' className='flex flex-col justify-center font-El-Messiri items-center'>
           <h1 className='mb-4 font-semibold text-xl'>Scroll down</h1>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 arrow">
           <path fillRule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
           </svg>
           </motion.div>
  </>
}


const Twinkle = ()=>{
   return <>
<motion.div  className="backBox absolute top-[22vh] sm:top-[26vh] right-[45vw] rotate-45 rounded-lg h-10 w-11 -z-10 bg-[#BAD7E9] twinkle"></motion.div>
<motion.div className="backBox absolute top-[33vh] sm:top-[34vh] right-[14vw] sm:right-[25vw] rotate-45 rounded-lg h-12 w-9 -z-10 lg:bg-[#002B5B] bg-[#BDF2D5] twinkle "></motion.div>
<motion.div  className="backBox absolute top-[50vh] right-[36vw] rotate-45 rounded-lg h-8 w-8 -z-10 bg-[#FF6E31] twinkle "></motion.div>
<motion.div className="backBox absolute top-[55vh] sm:right-[58vw] right-[60vw] rotate-45 rounded-lg h-8 w-8 -z-10 bg-[#31E1F7] twinkle "></motion.div>
<motion.div  className="backBox absolute top-[36vh] sm:top-[42vh] right-[77vw] sm:right-[68vw] rotate-45 rounded-lg h-8 w-8 -z-10 lg:bg-[#434242] bg-[#3CCF4E] twinkle "></motion.div>
   </>

} 



const HeroSection = () => {
  return (
    <section >
      <Heading/>
      <Scroller/>
      <Twinkle/>
    </section>
  )
}

export default HeroSection
