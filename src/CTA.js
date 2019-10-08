import React from 'react';
import './CTA.css';

function CTA(props) {
  return (
    <input type="button" value={props.text + " + "} className="btn"></input>
  );
}

export default CTA;
