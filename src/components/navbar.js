import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import NavBarElement from './navbarelement';
// import HeaderSeparator from './headerseparator';
import '../css/menustyle.css';
import '../css/navbarEx.css';

// import ExpandableText from './expandabletext';

// const topRowStyle = {backgroundColor: "#3f74fa"};
// const menuBarStyle = {textAlign: "center"};

class NavBar extends Component {

    render () {
        return (
            <React.Fragment>
                <div className="middle ">
                    <div className="menu rolldownmenu-list" id="myList">
                        <li className="item" id="Profile">
                            <Link to="/" className="menubtn">
                                <i className="fas fa-user"></i>Home
                            </Link>
                            {/* <div className="smenu">
                                <a href="#">Posts</a>
                                <a href="#">Picture</a>
                            </div> */}
                        </li>

                        <li className="item" id="Profile">
                            <Link to="/overview" className="menubtn">
                                <i className="fas fa-user"></i>Overview
                            </Link>
                            {/* <div className="smenu">
                                <a href="#">Posts</a>
                                <a href="#">Picture</a>
                            </div> */}
                        </li>

                        <li className="item" id="Messages">
                            <span className="menubtn">
                                <i className="fas fa-user"></i>Professional Background
                                {/* <ExpandableText text="Professional Background" /> */}
                            </span>
                            <div className="smenu">
                                <Link to="/skills">Skills</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/samples">Samples</Link>
                            </div>
                        </li>
                        
                        <li className="item" id="Settings">
                            <span className="menubtn">
                                <i className="fas fa-sliders-h"></i>Work Experience
                            </span>
                            <div className="smenu">
                                <Link to="/wegt">Golden Tulip Seeb Hotel</Link>
                                <Link to="/weat">Al Ajdan Trading &amp; Services</Link>
                            </div>
                        </li>

                        <li className="item">
                            <span className="menubtn">
                                <i className="fas fa-sign-out-alt"></i>Education and Learning
                            </span>
                            <div className="smenu">
                                <Link to="/certificates">Earned Certificates</Link>
                                <Link to="/ocourses">Online Courses</Link>
                                <Link to="/acourses">Attended Courses</Link>
                            </div>
                        </li>

                        <li className="item">
                            <span className="menubtn">
                                <i className="fas fa-sign-out-alt"></i>How to contact me
                            </span>
                            <div className="smenu">
                                <Link to="/contactme">Contact Details</Link>
                                <Link to="/emailme">Send me an Email</Link>
                            </div>
                        </li>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default NavBar;