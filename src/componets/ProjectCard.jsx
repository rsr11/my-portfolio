import { IoArrowUp } from "react-icons/io5";

import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({title,techStack, description,imgLink, gitLink, projectLink}) => {
  return (
    <section className="mt-5 mx-5" >
         <section>
         </section>
         <section>
           <h1 className="text-xl sm:text-4xl font-bold" >{title}</h1>
           <p className="text-xs mt-2 flex flex-wrap gap-2" >
            {techStack?.map((value)=>{
              return <span key={value} className="py-1 border rounded-lg px-2" >{value}</span>

            })}
            {/* <span className="py-1 border rounded-lg px-2" >CSS</span>
            <span className="py-1 border rounded-lg px-2" >PHP</span> */}
           </p>
           <div className="overflow-hidden" >
            <img src={imgLink} className=" mt-2 w-full" alt="" />
            <p className="mt-2" >{description}</p>
            </div>
           <div className="flex gap-5 mt-3 ml-2 text-" >
            <a href={gitLink} className="flex items-center py-[3px] px-2 gap-1" >
             <FiGithub/>Github</a>
            <a href={projectLink} className="flex items-center bg-[#08CB00] gap-1 text-black py-[3px] px-2 rounded-lg" >Link <IoArrowUp size={15} className="rotate-45" /> </a>
           </div> 
         </section>
       </section>
  )
}

export default ProjectCard
