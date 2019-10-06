
import './Stepper.css'
import unionIcon from './assets/Union 22.svg'
import React, { useState } from 'react';
import deleteIcon from './assets/delete-button.svg'
function Stepper(props){
 //var count = 0;
 const [count, setCount] = useState(0);

    return(
   <span className={props.className}>
       <span className="stepper-btn" onClick={() => count > 0 ? setCount(count - 1 ): setCount(0)}>
       <img src={deleteIcon} className="stepper-btn-img" alt="+" />
       </span>

<span className="stepper-txt">{count}</span>
<span className="stepper-btn" onClick={() => setCount(count + 1)}>
<img src={unionIcon} className="stepper-btn-img" alt="+" />
</span>


   </span>
 ) 
}
export default Stepper;
