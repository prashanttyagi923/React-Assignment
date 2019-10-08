import React from 'react';
import logo from './logo.svg';
import './App.css';
import CTA from './CTA';
import Stepper from './Stepper';
import CtaLink from './CtaLink';
import CardViewProduct from './CardViewProduct';
function App() {
  var text= "This item is a big item";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Prashant<code>src/App.js</code> and save to reload.
        </p>
        <CTA text="Click Me not " />
        <Stepper />
        <CtaLink link="#" text="Link Me" />
        {/* <CardViewProduct imageSrc={PizzaImage} headerText="My Header" paragraphText={text} */}
        linkText="Check it"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
