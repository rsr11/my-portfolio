// import React from 'react'
import ProfilePic from "../assets/profilePici.png";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { IoArrowUp } from 'react-icons/io5';
import { FaFileDownload } from 'react-icons/fa';
import BitmojiProfile from "../assets/bitmojiProfile.png"
// import GreenWavy from "../assets/wavy-design.svg";
import {motion} from "framer-motion";


// #535353 - 4 grey
// #121212 - 3 greydark
// #1DB954 - green

const HeroSection = () => {
  return (
    <section className='flex flex-col sm:flex-row gap-3 sm:gap-20 sm:mt-5' >
    <section className='bg-[#121212] sm:max-w-[400px] sm:min-h-[500px] rounded-2xl overflow-hidden flex sm:block justify-between relative border-[5px] border-[#212121] text-white' >
      <section className='flex flex-col sm:flex-col-reverse p-3 pb-1 justify-between'>
      {/* <section></section> */}
      <img src={ProfilePic} className='rounded-full sm:size-[70%] mx-auto border-4 border-[#08CB00]' alt="" />
      <section className='flex gap-3 m-2' >
        <div className='bg-[#535353] text-black p-1 rounded-full' ><FiLinkedin size={15} /></div>
        <div className='bg-[#535353] text-black p-1 rounded-full'> <FiGithub size={15} /> </div>
      </section>
      {/* <img className='absolute h-52 sm:w-[400px] sm:h-[450px] -bottom-14 sm:bottom-0 -left-16 sm:left-16' src={ProfilePic} alt="" /> */}
      </section>

    <section className='g-red-400 sm:px-4 sm:flex sm:flex-col items-start sm:absolute bottom-0 bg-r-400 sm:w-full' >
        <div className='text-4xl sm:px-0 sm:text-6xl sm:font-medium sm:text-start font-bold p-2' >
        <h1 className='' >Hey, I'm</h1>
        <h2>Rajeshwar</h2>
        </div>
        <p className='text-[11px] w-56 sm:w-full px-1 sm:pr-6 sm:text-sm sm:font-thin sm:mt-3 text-start border-b border-b-[#212121] pb-1 font-thin'>I like developing websites and web app for small startups and businesses</p>
        <section className='py-3 flex sm:mx-0 w-full gap-2'>
            <button className='bg-[#08CB00] sm:text-sm text-black p-1 sm:p-3 size rounded-full rotate-45' > <IoArrowUp size={15} /> </button>
            <button className='px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-sm text-black rounded-xl bg-[#08CB00]' > Let's Talk </button>
            <button className='px-3 sm:px-4 py-1 sm:py-2 flex items-center sm:text-sm gap-1 text-[10px] rounded-xl bg-[]' > <FaFileDownload /> Resume </button>
        </section>
    </section>     
    </section>
  
    <section className='pageBg4 p-3 relative rounded-xl w-full'>
     <section>
        <section className='flex items-center gap-2 text-[white]'>
            {/* <div> */}
                <img src={BitmojiProfile} className='size-10 sm:size-20 bg-[#121212] rounded-full p-2' alt="" />
            {/* </div> */}
            <div className='text-xs' >
                <h6 className='sm:font-semibold sm:text-lg' >Rajeshwar Singh</h6>
                <div className='flex text-[10px] gap-3' >
                <p className='py-[2px] mt-[2px] bg-[#535353] border-[#535353] text-black border px-1 rounded-lg' >Web developer</p> 
                <p className='py-[2px] mt-[2px] bg-[#535353] animated-bt border-[#535353] text-black border px-1 rounded-lg' >Learning DevOps</p>
                </div>
            </div>
        </section>
        <h1 className='mt-5 text-white text-2xl mb-32 sm:text-6xl font-semibold' >Let’s build a  <span className='text-[#08CB00] bg-[#121212] px-2 py-1 rounded-lg' >website</span> <br /> people will remember</h1>
        {/* <img src={GreenWavy} className='absolute bottom-0 right-0' alt="" /> */}
       <motion.svg
  id="visual"
  className="absolute bottom-0 right-0 w-full"
  viewBox="0 0 900 600"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Wave 1 */}
  <motion.path
    fill="#5af50a"
    d="M0 384L113 407L225 375L338 454L450 421L563 422L675 342L788 375L900 373L900 601L0 601Z"
    animate={{
      d: [
        "M0 384L113 407L225 375L338 454L450 421L563 422L675 342L788 375L900 373L900 601L0 601Z",
        "M0 400L113 380L225 420L338 430L450 400L563 450L675 360L788 400L900 390L900 601L0 601Z",
        "M0 384L113 407L225 375L338 454L450 421L563 422L675 342L788 375L900 373L900 601L0 601Z",
      ],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Wave 2 */}
  <motion.path
    fill="#1ed654"
    d="M0 489L113 399L225 496L338 463L450 402L563 424L675 404L788 485L900 499L900 601L0 601Z"
    animate={{
      d: [
        "M0 489L113 399L225 496L338 463L450 402L563 424L675 404L788 485L900 499L900 601L0 601Z",
        "M0 470L113 430L225 480L338 440L450 420L563 460L675 430L788 470L900 480L900 601L0 601Z",
        "M0 489L113 399L225 496L338 463L450 402L563 424L675 404L788 485L900 499L900 601L0 601Z",
      ],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Wave 3 */}
  <motion.path
    fill="#00b66d"
    d="M0 472L113 482L225 526L338 474L450 459L563 459L675 515L788 453L900 520L900 601L0 601Z"
    animate={{
      d: [
        "M0 472L113 482L225 526L338 474L450 459L563 459L675 515L788 453L900 520L900 601L0 601Z",
        "M0 500L113 460L225 510L338 460L450 480L563 480L675 490L788 470L900 500L900 601L0 601Z",
        "M0 472L113 482L225 526L338 474L450 459L563 459L675 515L788 453L900 520L900 601L0 601Z",
      ],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.svg>

        {/* <div className='h-[500px] bg-bottom bg-contain' style={{background:`url(${GreenWavy})`}} > */}

        {/* </div> */}
     </section>
     
    </section>
    </section>
  )
}

export default HeroSection
