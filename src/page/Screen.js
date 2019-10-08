import CardViewProduct from '../CardViewProduct'
import React from 'react';
import './Screen.css'
import data from '../data/cartData.json'
import currencyData from '../data/currency.json'

function Screen(props){
const getCart = ()=> {
    return data.map(item => {
      return(<CardViewProduct key={item.id}  imageSrc={process.env.PUBLIC_URL + "/" +item.image}
        headerText={item.productName} paragraphText={item.description}
        linkText="Link" largeText={item.price} currency={currencyData[item.currency]}
        />)
    })
}
 
return(
<div>
    <div className="block right-block"></div>
    <div className="block left-block"></div>
    <div className="screen-container">
     {getCart()}   
        
    </div>
</div>
);
}
export default Screen;