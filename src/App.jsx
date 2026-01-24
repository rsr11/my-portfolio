import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Projects from './componets/Projects';



function App() {
   

  // const [isMenuOpen, setMenuOpen] = useState(false);


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Projects/>} />
      {/* <Route path="skills" element={<} */}
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
//  <div className='overflow-hidden' >
//  <div className={`md:max-w-[80vw] ${isMenuOpen ? "h-[50vh] overflow-hidden": "overflow-auto"} max-w-[90vw] mx-auto mb-[30vh]`}>
//  <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
//  <HeroSection/>
//  <About/>
//  <Projects/>
//  <Contact/>
//  </div>
//  {
//   !isMenuOpen && <Footer/>
//  }
//  </div>
