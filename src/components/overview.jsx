import React, { Component } from 'react';
import '../css/overview.css';
import "../css/skills.css";

class Overview extends Component {
   render() {
      return (
        <div id="divSkillsContainer">
            <ul className="rolldown-list" id="myList">
                <li>
                  <div className="textFormat">
                      <p style={{fontSize: 22, fontWeight: "bold"}}>About Myself</p>
                  </div>
                </li>
                <li>
                  <div className="textFormat">
                      <p >
                          I am a Full Stack Software Engineer with nearly 20 years of extensive experience in the 
                          design and development of Desktop, Web and Mobile apps, seeking continuous development 
                          and upscale of my skills and knowledge by restless pursue of latest trends and technologies 
                          in the Software development constantly expanding universe.
                      </p>
                  </div>
                </li>
            </ul>
        </div>
      );
   }
}

export default Overview;
