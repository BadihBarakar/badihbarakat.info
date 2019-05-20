import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const NavBarElement = (props) => {
    const { label, path } = props;

    return(
        <Link to={path} >
            <i className="btn navbar-item">
                {label}
            </i>
        </Link>
    );
};

export default NavBarElement;