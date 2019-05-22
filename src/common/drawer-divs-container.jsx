import React, { Component } from 'react';
import '../css/drawer-divs.css';

class DrawerDivsContainer extends Component {
    state = {
        containerHeight: 0
    }

    constructor(props)
    {
        const { itemHeight, items, itemsPerRow, spacing } = props;
        super(props);

        console.log("Props: ", props);

        let containerHeight = this.state.containerHeight;
        // ($item-height * ($items / $row-items)) 
        // + ((($items / $row-items) - 1) * $spacing)
        containerHeight = (parseFloat(itemHeight) * (items / itemsPerRow)) + (((items / itemsPerRow) - 1) * parseFloat(spacing));
        console.log("Spacing: ", parseInt(props.spacing));
        
        containerHeight += "vh";
        console.log('Height: ', containerHeight);
        this.state.containerHeight = containerHeight;
    }

    render() {
        return (
            <div class="slider-container" >
                {this.props.children}
            </div>
        );
    }
}

export default DrawerDivsContainer;