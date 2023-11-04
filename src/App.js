import React from 'react';
import '../src/styles/App.css';
import IMG1 from '../src/Images/img2.jpg';
import { CiFacebook } from 'react-icons/ci';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoGooglePlusCircle } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';

const App = () => {
  return (
    <section className='container'>
      {/* Card One */}
      <div className='card'>
      <img src={IMG1} />
      <h1>Williamson</h1>
      <p>Web Developer</p>
      <div className='social-icons'>
        <div>
        <CiFacebook />
        </div>
        <div>
          <AiFillTwitterCircle />
        </div>
        <div>
          <BiLogoGooglePlusCircle />
        </div>
        <div>
          <FaLinkedinIn />
        </div>
      </div>
    </div>
{/* Card One */}
{/* Card One */}
<div className='card'>
      <img src={IMG1} />
      <h1>Williamson</h1>
      <p>Web Developer</p>
      <div className='social-icons'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
{/* Card One */}
{/* Card One */}
<div className='card'>
      <img src={IMG1} />
      <h1>Williamson</h1>
      <p>Web Developer</p>
      <div className='social-icons'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
{/* Card One */}
{/* Card One */}
<div className='card'>
      <img src={IMG1} />
      <h1>Williamson</h1>
      <p>Web Developer</p>
      <div className='social-icons'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
{/* Card One */}
    </section>
    
  )
}

export default App