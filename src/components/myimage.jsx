import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faHandPointLeft);

const MyImage = (props) => {
    const { image } = props;

    return (
        <div className="clip-filter flipV" 
            style={headerDivImg}>
            <img src={image} 
                style={imgStyle}
                className="clip-circle-at" />    
            <FontAwesomeIcon icon={faHandPointLeft} 
                style={{fontSize: "2vw", color: "white"}} />
        </div>       
    );
};

export default MyImage;


const headerDivImg = {
    textAlign: "center", 
    flex: "1",
    marginLeft: "1em", 
    paddingTop: "0.5em",
    paddingBottom: "0"
}

const imgStyle = {
    height: "170px",
    // marginTop: "20px"
}