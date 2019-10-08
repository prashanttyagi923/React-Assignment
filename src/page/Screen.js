import CardViewProduct from '../CardViewProduct'
import React from 'react';
import obj from '../config';
import './Screen.css'
import data from '../data/cartData.json'
import currencyData from '../data/currency.json'

function Screen(props){

console.log(data);
const getCart = ()=> {
    return data.map(item => {
      return(<CardViewProduct key={item.id}  imageSrc={process.env.PUBLIC_URL + "/" +item.image}
        headerText={item.productName} paragraphText={item.description}
        linkText="Link" largeText={item.price} currency={currencyData[item.currency]}
        />)
    })
    
    //return(<span />)
     }
 
return(
<div>
    <div className="block right-block"></div>
    <div className="block left-block"></div>
    <div className="screen-container">
     {getCart()}   
        
        {/* <CardViewProduct  imageSrc={PizzaImage}
        headerText="Aenean sed nibh a magna posuere ..." paragraphText="Duis rhoncus dui venenatis consequat porttitor."
        linkText="Link" largeText="4.99"
        />
        <CardViewProduct  imageSrc={SaladImage} 
        headerText="Vestibulum comm" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib ..."
        linkText="Link" largeText="6.99"
        />
        <CardViewProduct  imageSrc={PizzaImage} 
        headerText="Vestibulum" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib"
        linkText="Link" largeText="$8.99"
        />
        
        <CardViewProduct  imageSrc={SoftyImage} 
        headerText="Vestibulum" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib"
        linkText="Link" largeText="$8.99"
        />
        
        <CardViewProduct  imageSrc={SoftyImage} 
        headerText="Vestibulum" paragraphText="Mauris imperdiet orci dapibus, commodo libero nec, interib"
        linkText="Link" largeText="$8.99"
        /> */}
    </div>
</div>
);
}
export default Screen;