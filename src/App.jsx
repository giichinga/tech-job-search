import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Landing.jsx';
import About from './Pages/about.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/services.jsx';
import './App.css'

function App() {
  return(
   <>
   <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path='/home' element={<LandingPage />} />
      <Route path= '/about' element={<About/>} />
      <Route path= '/services' element={<Services/>} />
      <Route path= '/contact' element={<Contact/>} />
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App