import React from 'react';
import { BrowserRouter, NavLink, Routes} from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <h1>MOTEK</h1>
     <div className='nav-links'>
     <BrowserRouter >
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/login' >Login</NavLink>
     </BrowserRouter>
     </div>

    </nav>
  )
}

export default Navbar