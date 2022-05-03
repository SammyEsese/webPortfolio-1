import React from 'react'
import './Works.css'
import Airtel from '../../img/airtel.png';
import Equity from '../../img/equity.png';
import Kengen from '../../img/kengen.png';
import Safaricom from '../../img/safaricom.png';
import Sammtech from '../../img/sammtech.png';

function Works() {
  return (
    <div className="works">
<div className="awesome">
<span>Works For All These</span>
<span>Brands & Clients</span>
<spane>
Being a front-end web development company with over 15 years,<br/>
we have experience in building complex, innovative, responsive,<br/> and user-centric solutions.
Our interfaces are designed with close<br/>
attention to detail and look great on both desktop screens and mobile devices.
</spane>


<button className=" button s-button">Hire Me</button>

</div>

{/*right side */}
<div className="w-right">
<div className="w-mainCircle">
<div className="w-secCircle">
<img src={Airtel} alt="" />
</div>

<div className="w-secCircle">
<img src={Equity} alt="" />
</div>

<div className="w-secCircle">
<img src={Kengen} alt="" />
</div>

<div className="w-secCircle">
<img src={Sammtech} alt="" />
</div>

<div className="w-secCircle">
<img src={Safaricom} alt="" />
</div>







</div>


</div>

    </div>
  )
}

export default Works