import React, { Component } from 'react';
// import '../css/overview.css';
import "../css/skills.css";

import puc from "../images/puc.gif";

class UnderConst extends Component {
   render() {
      return (
        <div id="divSkillsContainer">
            <ul className="rolldown-list" id="myList">
                <li style={{background: "white"}}>
                  <div className="textFormat">
                        <center>
                            <img src={puc} height="300em" />
                        </center>
                  </div>
                </li>
            </ul>
        </div>
      );
   }
}

export default UnderConst;
