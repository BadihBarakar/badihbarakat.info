import React, { Component } from 'react';
import '../css/homepage.css';
import "../css/skills.css";
import ReactLogo from '../common/reactlogo';

class HomePage extends Component {
   render() {
      return (
        <div id="divSkillsContainer">
            <ul className="rolldown-list" id="myList">
                <li>
                  <div>
                      <p style={{fontSize: 22, fontWeight: "bold"}}>Welcome to BadihBarakat.info</p>
                  </div>
                </li>
                <li>
                  <div className="textFormat">
                      <p class="first-letter">
                          Welcome to my <i>show-case</i> website. I aim to demonstrate my skills and abilities 
                          in website and web applications development through CSS animations and screen effects 
                          as well as data forms and data manipulation and processing.
                      </p>
                  </div>
                </li>
                <li>
                  <div  className="textFormat react-app-site" >
                    <div className="logo-div">
                      <ReactLogo />
                    </div>
                    <div className="react-desc">
                      This site is a React.js web app.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="textFormat">
                      <p class="justy-p">
                          In addition to being a show-case, this website is going to be my profile, though which 
                          I'll be providing professional details and portfolio.
                      </p>
                  </div>
                </li>
                <li>
                  <div className="textFormat">
                      <p class="justy-p">
                          If you have any inquiries, feel free to drop me an email by going to "Email Me", 
                          There you'll find an inquiry form. Fill and Send.
                      </p>
                  </div>
                </li>
            </ul>
        </div>
      );
   }
}

export default HomePage;
