import React from 'react';
import './Container.css';

// Simple container, just to modularize the code
const Container = (props) => (
  <div className="container-fluid">
    <br/><br/>
    { props.children }
  </div>
);

export default Container;
