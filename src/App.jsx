import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing.jsx';
import About from './Pages/about.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/services.jsx';
import Hero from './Pages/index.jsx';
import Error from './Pages/404.jsx';
import './CSS/App.css';


function App() {
  return(
   <>
   <BrowserRouter>
    <Routes>
      <Route index element={< Hero/>} />
      <Route path='/tech-job-search/' element={< Hero/>} />
      <Route path='/tech-job-search/home' element={< Hero/>} />
      <Route path='/tech-job-search/search' element={<LandingPage />} />
      <Route path= '/tech-job-search/about' element={<About/>} />
      <Route path= '/tech-job-search/services' element={<Services/>} />
      <Route path= '/tech-job-search/contact' element={<Contact/>} />
      <Route path= '*' element={<Error/>} />
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App