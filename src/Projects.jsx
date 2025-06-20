import React from 'react'
import SkillTyroImg from "./assets/SkillTyro_thumnail.png"
import WeatherAppImg from "./assets/weatherApp_thumnail.png"
import GymWebImg from "./assets/GymBro_thumbnail.png"
import Nikky from "./assets/nikky.jpg";
import AccuEntryImg from "./assets/accuEntry_thumbnail.png";


const Heading = ()=>{
    return <>
     <h1 className='text-5xl text-center font-bold mb-16' >
      <span className=' after:content-[""] relative after:w-16 after:h-2 after:-bottom-5 after:left-12 after:rounded-md after:absolute after:bg-violet-700 ' >Projects</span>
      </h1>
      <p className='text-center text-xl lg:mx-24 text-slate-600'>Here you will find some of the personal and clients projects that I created. </p>
      
    </>
}


const ProjectCollection = ()=>{
    return <>
    
    <div className='gap-5 mt-10 flex overflow-hidden lg:flex-row flex-col'>
      <section className='border-2 border-black p-3 overflow-hidden cursor-pointer' >
        <img src={SkillTyroImg}  onClick={()=>{window.open("https://skilltyro.com/")}} alt="" className='shadow-xl lg:w-[25vw] h-[35vh] rounded-2xl transition-all hover:scale-110' />
        </section>
        <section className='border-2 border-black p-3 overflow-hidden cursor-pointer'>
        <img src={GymWebImg} alt="" onClick={()=>{window.open("https://gym-temp-lt92cvq6d-rsr11.vercel.app/")}} className='shadow-xl rounded-2xl lg:w-[25vw] h-[35vh] transition-all hover:scale-110 ' />
        </section>
        <section className='border-2 border-black p-3 overflow-hidden cursor-pointer'>
        <img src={Nikky} alt="" onClick={()=>{window.open("https://nikky-e-commerce-nqq1.vercel.app/")}} className='shadow-xl lg:w-[25vw] h-[35vh]  rounded-2xl transition-all hover:scale-110'  />
        </section>
    </div>

    <div className='gap-5 mt-10 flex overflow-hidden lg:flex-row flex-col'>
      <section className='border-2 border-black p-3 overflow-hidden cursor-pointer'>
        <img src={WeatherAppImg}  onClick={()=>{window.open("https://rsr11.github.io/weatherinfo/")}} alt="" className='shadow-xl lg:w-[25vw] h-[35vh] rounded-2xl transition-all hover:scale-110' />
        </section>
        <section className='border-2 border-black p-3 overflow-hidden cursor-pointer'>
        <img src={AccuEntryImg} alt="" onClick={()=>{window.open("https://6599808f9ed589eed2611bc6--silver-bombolone-10a0e6.netlify.app/")}} className='shadow-xl rounded-2xl lg:w-[25vw] h-[35vh] transition-all hover:scale-110' />
        </section>
    </div>
    </>
}







const Projects = () => {
  return (
<>
<section id='project' className='flex flex-col items-center mt-20 border-b-2 border-black pb-10'>
    <Heading/>
    <ProjectCollection/>
      
</section>
</>
  )
}

export default Projects
