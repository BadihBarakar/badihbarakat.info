import React, { Component } from 'react';

import '../css/reactlogo.css';
import logo from  '../logo.svg';

class ReactLogo extends Component {
   render() {
      return (
        <div id="logo-container">
            <img src={logo} className="react-logo"/>
            <img src={logo} className="react-logo-sh"/>
        </div>
      );
   }
}

export default ReactLogo;