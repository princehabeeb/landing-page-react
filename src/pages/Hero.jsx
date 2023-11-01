import React from 'react';
import '../styles/Hero.css';
import HeroImg from '../Images/img1.jpg';
import data from '../components/data'

const Hero = ({name, style}) => {
  return (
    <section className='hero'>
        <div className='home-text'>
            <h1  style={style}>Welcome To Motek Data {name} </h1>
            <p>Home of data and payment of your utility bills</p>
            <ul>
              {data.map((chunk) => {
                return <li>{chunk}</li>
              })}
            </ul>
        </div>
        <div className='home-img'>
          <img src={HeroImg} alt="" />
        </div>
    </section>
  )
}

export default Hero