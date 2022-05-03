import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import Person from '../../img/person.jpg';




function Intro() {




  return (
    <div className="intro">
<div className="i-left">

  <div className="i-name">
    <span>Hello! I Am</span>
    <span>Sammy Esese</span>
    <span>Frontend Developer with high
      level of experience in web designing 
      and development,<br/> 
      producing Quality work</span>

     <button className="button i-button">Hire me</button>
     <div className="i-icons">
      <a href='https://github.com/SammyEsese'> <img src={Github} alt="" /></a>
      <a href='https://www.linkedin.com/in/sammy-esese-8b82141a7/'><img src={LinkedIn} alt="" /></a>
      <a href='https://www.instagram.com/sammy_esese/'><img src={Instagram} alt="" /></a>
     </div>

  </div>
</div>

<div className="i-right">
  <img src={Person} alt="" />

  {/* blur divs */}
<div className="blur" style={{background: "rgb(238 210 255)"}}></div>
<div className="blur" style={{
  background: '#C1F5FF',
  top: '17rem',
  width: '21rem',
  height: '11rem',
  left: '-9rem'
  }}></div>






</div>

    </div>
  )
}

export default Intro