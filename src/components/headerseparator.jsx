import React from 'react';
import sperarator from '../images/separator3.png';

const HeaderSeparator = () => {
    return (
        <div className="row">
            <div className="col-sm-12 separator-embose" style={{textAlign: "center"}}>
                <img src={sperarator} 
                    alt="separator" 
                    className="separator-embose" 
                    height="50%" />
            </div>
        </div>
    );
};

export default HeaderSeparator;