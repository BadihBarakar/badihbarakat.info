import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import sperarator from '../images/separator1.png';

import "../css/slidenavbar.css";

const libIcons = [faBars];
  
library.add(libIcons);
  
const menuBurger = {
    fontSize: "2em", 
    color: "#d2974a", 
    textAlign: "right",
    backgroundColor: "brown"
};
  
class SlideNavBar extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="social">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light social">
                        <div className="row">
                            <div className="col-sm-2" style={menuBurger}></div>
                            <div className="col-sm-8" >
                                <div  style={{textAlign: "center", color: "brown"}} id="navbarNav">
                                    <Link to="/"><i className="btn nav-item active">
                                        Home <span className="sr-only">(current)</span>
                                    </i></Link>
                                    <Link to="/" ><i className="btn nav-item">
                                            Features
                                    </i></Link>
                                    <Link to="/"><i className="btn nav-item">
                                            Pricing
                                    </i></Link>
                                </div>
                            </div>
                            <div className="col-sm-2" style={menuBurger}>
                                <FontAwesomeIcon icon="bars" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12" style={{textAlign: "center"}}>
                                <img src={sperarator}  />

                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default SlideNavBar;
