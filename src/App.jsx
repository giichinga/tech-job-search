import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing.jsx';
import About from './Pages/about.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/services.jsx';
import Hero from './Pages/index.jsx';
import './CSS/App.css';


function App() {
  return(
   <>
   <BrowserRouter>
    <Routes>
      <Route index element={< Hero/>} />
      <Route path='/' element={< Hero/>} />
      <Route path='/home' element={< Hero/>} />
      <Route path='/search' element={<LandingPage />} />
      <Route path= '/about' element={<About/>} />
      <Route path= '/services' element={<Services/>} />
      <Route path= '/contact' element={<Contact/>} />
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App