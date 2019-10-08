import CardViewProduct from '../CardViewProduct'
import React from 'react';
import PizzaImage from '../assets/Image 96.png'
import SoftyImage from '../assets/Image 97.png'
import SaladImage from '../assets/Image 100.png'
import obj from '../config';
import './Screen.css'
function Screen(props){


return(
<div>
    <div className="block right-block"></div>
    <div className="block left-block"></div>
    <div className="screen-container">
        <CardViewProduct  imageSrc={SoftyImage} imageClass="fit-image"
        headerText="Vestibulum" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib"
        linkText="Link" largeText="8.99"
        />
        <CardViewProduct  imageSrc={PizzaImage} imageClass="fit-image"
        headerText="Aenean sed nibh a magna posuere ..." paragraphText="Duis rhoncus dui venenatis consequat porttitor."
        linkText="Link" largeText="4.99"
        />
        <CardViewProduct  imageSrc={SaladImage} imageClass="fit-image"
        headerText="Vestibulum comm" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib ..."
        linkText="Link" largeText="6.99"
        />
        <CardViewProduct  imageSrc={PizzaImage} imageClass="fit-image"
        headerText="Vestibulum" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib"
        linkText="Link" largeText="$8.99"
        />
        
        <CardViewProduct  imageSrc={SoftyImage} imageClass="fit-image"
        headerText="Vestibulum" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib"
        linkText="Link" largeText="$8.99"
        />
        
        <CardViewProduct  imageSrc={SoftyImage} imageClass="fit-image"
        headerText="Vestibulum" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib"
        linkText="Link" largeText="$8.99"
        />
    </div>
</div>
);
}
export default Screen;