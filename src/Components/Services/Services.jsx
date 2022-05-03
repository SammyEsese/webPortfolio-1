import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import Resume from './Resume.pdf'



function Services() {

  
  
  return (
    <div className="Services" id='Services'>
{/*left side */}
<div className="awesome">
<span>My Awesome</span>
<span>Services</span>
<spane>
Being a front-end web development company with over 15 years,<br/>
we have experience in building complex, innovative, responsive,<br/> and user-centric solutions.
Our interfaces are designed with close<br/>
attention to detail and look great on both desktop screens and mobile devices.
</spane>

<a href={Resume} download>
<button className=" button s-button">Download CV</button>
</a>
</div>

{/*right side */}

<div className="cards">


      

<Card
heading = {'Designs and Developes'}
detail = {"Javascript, React, Css, Html, Figma, Sketch, Photoshop, Adobe, Adobe xd"}
/>


</div>

    </div>
    
  )
}

export default Services