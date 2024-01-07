import {AnimatePresence, motion} from "framer-motion";


const Header = (props) => {

  
  const {isMenuOpen , setMenuOpen} = props;


  return  (
        <section className='overflow-hidden' >
          
             <motion.header  className="flex absolute w-[80vw] lg:w-[70vw] justify-between items-center mt-10 font-El-Messiri text-4xl font-bold">
            <h1>RSR_</h1>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" onClick={()=>setMenuOpen(true)} className="w-12 h-12 cursor-pointer bg-black rounded-full p-2 ">
        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
        </motion.header>

        { isMenuOpen &&
        <AnimatePresence>
        <motion.section initial={{width:"0px"}} animate={{width:'100%', overflow:"hidden"}} exit={{width:"0px",left:"0px",backgroundColor:"white", opacity:0}} transition={{duration:2}}  className=' absolute right-0 font-El-Messiri text-4xl font-bold overflow-hidden bg-black h-[100vh]'>
        <section className='flex items-center w-full justify-between px-24 pt-10' >
        <h1 className='text-white' >RSR_</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={()=>{setMenuOpen(false)}} fill="white" className="w-12 h-12 cursor-pointer">
      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>  
        </section>
        <motion.ul initial={{blur:0}} animate={{blur:1}} className='text-white float-right pr-24 pt-20 flex flex-col gap-10 cursor-pointer' >
          <motion.li whileHover={{color:"purple",textDecoration:"underline"}}> <a onClick={()=>{setMenuOpen(false)}} >HOME</a></motion.li>
          <motion.li whileHover={{color:"purple",textDecoration:"underline"}} > <a href='#about' onClick={()=>{setMenuOpen(false)}} > ABOUT </a> </motion.li>
          <motion.li whileHover={{color:"purple",textDecoration:"underline"}} ><a href='#project' onClick={()=>{setMenuOpen(false)}} >PROJECT </a></motion.li>
          <motion.li whileHover={{color:"purple",textDecoration:"underline"}} ><a href='#contact' onClick={()=>{setMenuOpen(false)}} > CONTACT </a></motion.li>
        </motion.ul >
             
      </motion.section>
      </AnimatePresence>
          }

        </section>
  )

}
export default Header

