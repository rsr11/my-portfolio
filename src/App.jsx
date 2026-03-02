import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Projects from './componets/Projects';
// import { useState } from 'react';
// import KickStartLoader from './componets/KickStartLoader';



function App() {

  // const [loading, setLoading] = useState(true);
   
  // {loading && <KickStartLoader onFinish={() => setLoading(false)} />}
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
