import React from 'react';
import './CardViewProduct.css';
import calenderImage from './assets/calendar.svg'
import CtaLink from "./CtaLink";
import Stepper from "./Stepper";
import config from './config';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
function CardViewProduct(props){
const count = 0;
    const getWords = (str, len) => {
        let strLength = str.length;
        let retValue =  str.split(/\s+/).slice(0,len).join(" ");
        if (retValue.length  < strLength){
            retValue = retValue + " ...";
            return retValue;
        }
        else{
            return retValue;
        }
    }
    return(
        <div className="card-view">
            <div className="image-view">
                <img src={props.imageSrc} className="fit-image" />
            </div>
            <div className="card-content">
            <div className="inline-container">
                <h2 className="heading no-margin">{getWords(props.headerText, 6)} <span><img src={calenderImage} /></span> </h2>
            </div> 
            <div className="inline-container"> 
                <p className="no-margin para-text">{getWords(props.paragraphText, 8)}</p>
            </div>
            <div className="inline-container">
            <CtaLink link="#" text={props.linkText} className="no-padding" />
            </div>
            <div className="inline-container">
                <p className="large-text"><span className="currency"> {ReactHtmlParser(props.currency)} </span>{props.largeText}</p>
                <Stepper className="right-align" />
            </div>
            </div>
        </div>
    )
}

export default CardViewProduct;