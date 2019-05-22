import React, { Component } from 'react';
import '../css/drawer-divs.css';

class DrawerDiv extends Component {
   render() {
        const { mainText, innerText } = this.props; 
        return (
            <div class="slide-div-item">
                {/* style={{width: this.props.width, height: this.props.itemHeight}}> */}
                {mainText}
                <div class="slide-div-content">
                    <p>{innerText}</p>
                </div>
            </div>
        );
   }
}

export default DrawerDiv;