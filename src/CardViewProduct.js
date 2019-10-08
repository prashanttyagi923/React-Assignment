import React from 'react';
import './CardViewProduct.css';
import calenderImage from './assets/calendar.svg'
import CtaLink from "./CtaLink";
import Stepper from "./Stepper";
import config from './config';

function CardViewProduct(props){
const count = 0;
    const getWords = (str) => {
        return str.split(/\s+/).slice(0,5).join(" ");
    }
    return(
        <div className="card-view">
            <div className="image-view">
                <img src={props.imageSrc} className={props.imageClass} />
            </div>
            <div className="card-content">
            <div className="inline-container">
                <h2 className="heading no-margin">{getWords(props.headerText)} <span><img src={calenderImage} /></span> </h2>
            </div> 
            <div className="inline-container"> 
                <p className="no-margin para-text">{props.paragraphText}</p>
            </div>
            <div className="inline-container">
            <CtaLink link="#" text={props.linkText} className="no-padding" />
            </div>
            <div className="inline-container">
                <p className="large-text"><span className="currency">&#36;</span>{props.largeText}</p>
                <Stepper className="right-align" />
            </div>
            </div>
        </div>
    )
}

export default CardViewProduct;