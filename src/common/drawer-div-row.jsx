import React, { Component } from 'react';
import '../css/drawer-divs.css';

class DrawerDivRow extends Component {
   render() {
        return (
            <div class="slider-divs-row">
                {this.props.children}
            </div>
        );
    }
}

export default DrawerDivRow;