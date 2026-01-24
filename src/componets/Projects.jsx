// import React from 'react'
import SkillTyroImg from "../assets/SkillTyro_thumnail.png";
import ProjectCard from "./ProjectCard"

// import name from "../" 

const Projects = () => {
  return (
    <section className='text-white' >
       <h1 className='text-center mt-10 text-2xl' >Here Are Some Of My Projects</h1>
       <ProjectCard 
        title="Skill Tyro"
        imgLink={SkillTyroImg}
        techStack={[`HTML`,`CSS`,`PHP`,`JS`]}
        description={"Developed a responsive website for a Hyderabad-based medical education company. Implemented user-friendly UI for course listings and enrollment."}
        gitLink={"fsdd"}
        projectLink={"fsdfs"} />

        

       

    </section>
  )
}

export default Projects
