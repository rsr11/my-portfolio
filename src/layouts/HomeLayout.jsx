// import React from 'react'
import HeroSection from '../componets/HeroSection'
// import { MdDarkMode } from 'react-icons/md'
// import { FaSun } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/Footer'
import Contact from '../Contact'
// import KickStartLoader from '../componets/KickStartLoader'
// import { AiFillHome } from 'react-icons/ai'

const HomeLayout = () => {
  return (
    <main className='pageBg2 p-3 overflow-hidden sm:px-40 select-none sm:pr-10 pt-1'>
        {/* <h1 className='text-white'>On Update..</h1> */}
        <nav className='flex justify-center sm:mt-3 mb-2'>
          <div className='border-2 rounded-xl text-white flex gap-1 border-[#212121]' >
            {/* <MdDarkMode  className='bg-[#212121] size-6 sm:size-8 rounded-l-lg p-1' /> <FaSun  className='p-1 size-6 sm:size-8' /> */}
          </div> 
        </nav>
        {/* <KickStartLoader/> */}
       <HeroSection/>
{/* <AiFillHome /> */}
       {/* <nav className='text-white' >
         <ul className='flex gap-3 mt-3 p-2 px-5 text-xs rounded-2xl bg-[#121212] w-fit mx-auto' >
           <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
         </ul>
       </nav> */}

       <Outlet/>
       <Contact/>
       <Footer/>
    </main>
  )
}

export default HomeLayout
