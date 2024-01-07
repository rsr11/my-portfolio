
import Header from './Header';
import HeroSection from './HeroSection';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { useState } from 'react';
import './App.css';



function App() {
   

  const [isMenuOpen, setMenuOpen] = useState(false);


  return (
       <div className='overflow-hidden' >
       <div className={`md:max-w-[80vw] ${isMenuOpen ? "h-[50vh] overflow-hidden": "overflow-auto"} max-w-[90vw] mx-auto mb-[30vh]`}>
       <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
       <HeroSection/>
       <About/>
       <Projects/>
       <Contact/>
       </div>
       {
        !isMenuOpen && <Footer/>
       }
       </div>
  );
}

export default App;
