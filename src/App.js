import React from 'react';
import '../src/styles/App.css';
// import IMG1 from '../src/Images/img2.jpg';
// import { CiFacebook } from 'react-icons/ci';
// import { AiFillTwitterCircle } from 'react-icons/ai';
// import { BiLogoGooglePlusCircle } from 'react-icons/bi';
// import { FaLinkedinIn } from 'react-icons/fa';
import info from '../src/components/info';

const App = () => {
  return (
    <section className='container'>
      
      
      {info.map((chunk) => {
        return (
        <div className='card' id={chunk.id} >
        <img src={chunk.img} alt={chunk.img} />
        <h1>{chunk.haeding}</h1>
        <p>{chunk.paragraph}</p>
         </div>
        )
        
      })}
    

    </section>
    
  )
}

export default App