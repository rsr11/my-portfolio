// import React from 'react'
import SkillTyroImg from "../assets/SkillTyro_thumnail.png";
import ProjectCard from "./ProjectCard"
import productrImg from "../assets/productrImg.png";

// import name from "../" 

const Projects = () => {
  return (
    <section className='text-white' >
       <h1 className='text-center mt-10 text-2xl sm:text-4xl sm:mt-20 sm:font-semibold' >Here Are Some Of My Projects</h1>

       <section className="sm:grid sm:grid-cols-2 sm:mt-20" >
       <ProjectCard 
        title="Skill Tyro"
        imgLink={SkillTyroImg}
        techStack={[`HTML`,`CSS`,`PHP`,`JS`]}
        description={"Developed a responsive website for a Hyderabad-based medical education company. Implemented user-friendly UI for course listings and enrollment."}
        gitLink={"fsdd"}
        projectLink={"fsdfs"} />

        <ProjectCard
          title={"Productr"}
          imgLink={productrImg}
          techStack={[`React.js`,`React-query`,`Cloudnary`,`Node.js`,`Express.js`,`MongoDb`,`Redux`,`JWT`]}
          description={"Productr is product uploading platfrom for e-commerce site, here you can perform CRUD on your product, switch to upload or not , we authorize the user with OTP verification with the help of Nodemailer and Twilio, And store the images in cloundnary."} />

        </section>

       

    </section>
  )
}

export default Projects
