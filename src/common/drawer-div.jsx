import React, { Component } from 'react';
import '../css/drawer-divs.css';

class DrawerDiv extends Component {
   render() {
        const { mainText, innerText } = this.props; 
        return (
            <div class="slide-div-item">
                {mainText}
                <div class="slide-div-content">
                    <p>{innerText}</p>
                </div>
            </div>
        );
   }
}

export default DrawerDiv;