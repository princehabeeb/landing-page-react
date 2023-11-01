import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Hero from './pages/Hero';

const App = () => {
  return (
    <>
     <Navbar />
     <BrowserRouter>
     <Routes>
      <Route path='/'  />
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}  />
     </Routes>
     </BrowserRouter>
     <Hero name='Our try'  style={{color:'red'}} >
      udcdycyc
     </Hero>
    </>
  )
}

export default App