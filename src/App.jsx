import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Projects from './componets/Projects';



function App() {
   
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
