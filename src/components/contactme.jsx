import React, { Component } from 'react';
import '../css/contactme.css';
import '../css/skills.css';

class ContactMe extends Component {
   render() {
      return (
            <div class="divSkillsContainer">
                <ul id='myList' className="rolldown-list">
                    {/* <li>
                        <div className='flexcol styled'>
                            Sydny - Australia
                            <div class="flexrow">
                                <div class="i1 bolded">
                                    Mobile: 
                                </div>
                                <div class="i2">
                                    + (61) 4 888 1 0009  
                                </div>
                                <div class="i3">
                                    (Australia)
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flexcol styled">
                            Muscat - Sultanate of Oman
                            <div class="flexrow">
                                <div class="i1 bolded">
                                    Mobile:
                                </div>
                                <div class="i2">
                                    + (968) 95 147 178
                                </div>
                                <div class="i3">
                                    (Oman)
                                </div>
                            </div>
                        </div>
                    </li> */}
                    <li>
                        <div class="flexrow">
                            <div class="i1 bolded">
                                Email:
                            </div>
                            <div class="i2">
                                badih.barakat@badihbarakat.info
                            </div>
                            <div class="i3"></div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactMe;

const contactContain = {
    display: "flex",
    width: "100%"
}
