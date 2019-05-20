import React, { Component } from 'react';
import '../css/drawer-divs.css';

class DrawerDivsContainer extends Component {
    render() {
        return (
            <div class="slider-container">
                {this.props.children}
            </div>
        );
    }
}

export default DrawerDivsContainer;