import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/radialmenu.css';

class RadialMenu extends Component {
    state = {
        chkInput: false
    }

    toggleCheck = () => {
        console.log("State: ", this.state.chkInput);
        let chkInput = !this.state.chkInput;
        console.log("chkInput: ", chkInput);
        this.setState({ chkInput });

    }

    changeCheck = (event) => {
        console.log(event.currentTarget.checked);
        this.setState({ chkInput: event.currentTarget.checked })
    }

    render() {   
        return (
            <label for="chkInput2" 
                className="lblMenuButton" 
                >
                <input type="checkbox" 
                    id="chkInput2" 
                    className="chk" 
                    checked={this.state.chkInput}
                    onChange={this.changeCheck}
                    />
                <div id="innerButton"></div>
                <div class="half-circle"></div>
                <ul className="rmItems">
                    <li onClick={this.toggleCheck}>
                        <Link to="/" className="rmMenubtn">
                            <i className="fas fa-user"></i>My Home Page
                        </Link></li>
                    <li onClick={this.toggleCheck}>
                        <Link to="/overview" className="rmMenubtn">
                            About Myself
                        </Link>
                    </li>
                    <li onClick={this.toggleCheck}>
                        <Link to="/skills" className="rmMenubtn">Professional Skills</Link>
                    </li>
                    <li onClick={this.toggleCheck}>
                        <Link to="/wegt" className="rmMenubtn">Work Experience</Link>
                    </li>
                    <li onClick={this.toggleCheck}>
                        <Link to="/contactme" className="rmMenubtn">Contact Details</Link>
                    </li>
                    <li onClick={this.toggleCheck}>
                        <Link to="/emailme" className="rmMenubtn">Email Me</Link>
                    </li>
                </ul>  
            </label>
        );
    }
}

export default RadialMenu;