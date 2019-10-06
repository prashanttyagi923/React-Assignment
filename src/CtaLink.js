import './CtaLink.css'
import React from 'react';
function CtaLink(props){

    return(
        <a href={props.link} className="cta-link">
        <span className="cta-link-text" >

        {props.text} 
        </span>
        <span className="cta-link-arrow">></span>
        </a>
    )
}
export default CtaLink;