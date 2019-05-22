import React, { Component } from 'react';
import '../css/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinStars, faStarOfLife, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import DrawerDivsContainer from '../common/drawer-divs-container';
import DrawerDivRow from '../common/drawer-div-row';
import DrawerDiv from '../common/drawer-div';

import skills from '../resources/skills.json';

class MySkills extends Component {
   render() {
        console.log("Skills: ", skills[4]);
        let r = 0, i = 0;
        return (
            // <div id="divSkillsContainer">
                
            //     <ul className="rolldown-list" id="myList">
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">
            //                     Project Management
            //                 </div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star-half" />
            //                 </div>
            //                 <div className="skill-rem">
                                
            //                 </div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">
            //                     Agile SW Development (Scrum)
            //                 </div>
            //                 <div className="skill-stars">
            //                 <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem">
                                
            //                 </div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">
            //                     React.js
            //                 </div>
            //                 <div className="skill-stars">
            //                 <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star-half" />
            //                 </div>
            //                 <div className="skill-rem">
                                
            //                 </div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">React Native</div>
            //                 <div className="skill-stars">
            //                 <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">Angular</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">PHP7</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star-half" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">RESTful API</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">HTML5</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">CSS3, SASS, SCSS, Less</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">JavaScript, TypeScript &amp; AJAX</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">jQuery</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">Node.js</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star-half" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">Git, Github</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">ASP.NET (C#)</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">Database Administration (MS-SQL, MySQL, Oracle)</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star-half" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //         <li>
            //             <div className="colGrid">
            //                 <div className="skill-desc">Software Development Life Cycle (SDLC)</div>
            //                 <div className="skill-stars">
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                     <FontAwesomeIcon icon="star" />
            //                 </div>
            //                 <div className="skill-rem"></div>
            //             </div>
            //         </li>
            //     </ul> 
            // </div>

            <DrawerDivsContainer 
                items={skills.length} 
                itemsPerRow={3} 
                itemHeight={"40vh"} 
                spacing={"5vh"}
                >                                
                <DrawerDivRow
                    itemsPerRow={3}  
                    spacing={"5vh"} >
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[0].skill} 
                        innerText={skills[0].description} />
                    
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[1].skill} 
                        innerText={skills[1].description} />

                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[2].skill} 
                        innerText={skills[2].description} />
                        
                </DrawerDivRow>
                <DrawerDivRow
                    itemsPerRow={3}  
                    spacing={"5vh"} >
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[3].skill} 
                        innerText={skills[3].description} />
                    
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[4].skill} 
                        innerText={skills[4].description} />

                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[5].skill} 
                        innerText={skills[5].description} />
                        
                </DrawerDivRow>
                <DrawerDivRow
                    itemsPerRow={3}  
                    spacing={"5vh"} >
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[6].skill} 
                        innerText={skills[6].description} />
                    
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[7].skill} 
                        innerText={skills[7].description} />

                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[8].skill} 
                        innerText={skills[8].description} />
                        
                </DrawerDivRow>
                <DrawerDivRow
                    itemsPerRow={3}  
                    spacing={"5vh"} >
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[9].skill} 
                        innerText={skills[9].description} />
                    
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[10].skill} 
                        innerText={skills[10].description} />

                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[11].skill} 
                        innerText={skills[11].description} />
                        
                </DrawerDivRow>
                <DrawerDivRow
                    itemsPerRow={3}  
                    spacing={"5vh"} >
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[12].skill} 
                        innerText={skills[12].description} />
                    
                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[13].skill} 
                        innerText={skills[13].description} />

                    <DrawerDiv 
                        itemsPerRow={3} 
                        itemHeight={"40vh"} 
                        spacing={"5vh"}
                        width={"30%"}
                        mainText={skills[14].skill} 
                        innerText={skills[14].description} />
                        
                </DrawerDivRow>
            </DrawerDivsContainer>
      );
   }
}

export default MySkills;

