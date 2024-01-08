import React from 'react'

const About = () => {

    const SkillsSpan = `p-3 bg-slate-300 text-slate-800 font-semibold rounded-md`;

  return (
    <main className='mt-20 border-b-2 border-black pb-10' id='about'>
        <h1 className='text-5xl text-center font-bold mb-10 lg:mb-20' >
      <span className=' after:content-[""] relative after:w-14 after:h-2 after:-bottom-5 after:left-24 after:rounded-md after:absolute after:bg-violet-700 ' >ABOUT ME</span>
      </h1>
      <p className='text-center text-xl lg:mx-24 text-slate-600'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      
      
      <section className='flex flex-col md:flex-row mt-20' >
        <section className='lg:w-1/2 w-full'>
          <h1 className='text-3xl font-bold mb-5' >Want to know me!</h1>
          <p className='text-lg text-slate-600' id='aboutDetail' >I am <span>19-year-old</span> Computer Application student and <span>Full-stack Web developer</span>,I am actively seeking opportunities to broaden my skills and gain hands-on experience in web development.Here are some work in my <span>project</span> section. <br /> <br /> With a keen interest in front-end development and web designing, I am passionate about creating visually appealing and user-friendly websites. want to connect me free to <span>DM</span> in any social media platform. <br /> <br />
          I'm open to <span>Job opportunities</span> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact me</span>. <br /> <span onClick={()=>{window.open("./assets/resume.pdf")}} >Here my CV.</span>
          </p>
          <button className='py-4 px-10 text-lg font-semibold bg-violet-700 hover:bg-violet-600 rounded-lg mt-8 text-white'><a href="#contact">Contect</a></button>

        </section>
        <section className='lg:w-1/2 w-full mt-16 md:mt-0' >
            <h1 className='text-3xl font-bold text-center lg:text-start  mb-5 md:ml-20'>My Skills</h1>
            <section id='Skills' className='flex md:ml-20 flex-wrap gap-5 '>
                <span className={SkillsSpan}>HTML</span>
                <span className={SkillsSpan}>CSS</span>
                <span className={SkillsSpan}>JavaScript</span>
                <span className={SkillsSpan}>React</span>
                <span className={SkillsSpan}>TailwindCSS</span>
                <span className={SkillsSpan}>Responsive Design</span>
                <span className={SkillsSpan}>Git basic</span>
                <span className={SkillsSpan}>PHP basic</span>
                <span className={SkillsSpan}>SEO</span>
                <span className={SkillsSpan}>Node intermediate</span>
                <span className={SkillsSpan}>Express intermediate</span>
                <span className={SkillsSpan}>MongoDb</span>
                <span className={SkillsSpan}>Figma</span>
            </section>
        </section>
      </section>

    </main>
  )
}

export default About
