import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/imageclip.css';
import './css/pageblocks.css';

import BBImage from './images/MyPic.jpg';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'; 
import NavBar from './components/navbar';
import MyImage from './components/myimage';
import SkillsTable from './components/skillstable';
import ExpandableText from './components/expandabletext';
import NavRedirect from './common/navredirect';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCoffee, 
         faStarHalf, faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import SocialButtons from './common/socialbuttons';
import RadialMenu from './common/radialmenu';

library.add(faStar, faCoffee, 
            faStarHalf, faHandPointLeft);

class App extends Component {
  render() {
    return (
      <React.Fragment>        
        <div className="App">
          <SocialButtons />
          <RadialMenu />
          <header style={headerStyle}>
            <div className="headerGrid">
              <div  >
                <MyImage image={BBImage} />
              </div>
              <div style={headerDivName} >
                <p className="h1 name-embose" 
                  style={{color: "white"}}>
                  Badih I. Barakat
                </p>
                <p className="h3 name-embose" 
                  style={{color: "white"}}>
                  <div style={{float: "right"}}>
                    <ExpandableText 
                      text="Full Stack Software Engineer" />
                  </div>
                </p>
              </div>
            </div>
          </header>        
          <div id="divBody" className="body-contents" >
              <div style={divContainer}>
                {/* <div className="d-none d-md-block col-md-3 menu-block" >
                    <NavBar />
                </div> */}
                <div className=" details-block">
                    <NavRedirect />
                </div>
              </div>      
          </div>
          <footer style={{textAlign: "left"}}>
            <div style={footerGrid}>
              <hr 
                style={{
                  border: "solid 1px blue",
                  width: "100%"
                }}/>
            </div>
          </footer>     
        </div>
      </React.Fragment>
    );
  }
}

export default App;

const footerGrid = {
  // background: "lightblue",
  marginLeft: '10vh',
  marginRight: '10vh',
  display: "flex",
  flexDirection: "row",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
}

const headerDivName = {
  textAlign: "right", 
  flex: "8",
  marginRight: "1em",
  padding: "1.5em",
}

const footerDivName = {
  textAlign: "left", 
  flex: "8",
  marginRight: "1em",
  padding: "1.5em",
  display: "flex",
  alignItems: 'center'
}

const divContainer = {
  margin: '0 5vw 0 5vw',
  padding: 0,
  height: 'auto'
  // width: "100%"
}

const headerStyle = {
  textAlign: "left", 
  position: "sticky", 
  top: 0, 
  left: 0, 
  zIndex: 9999,
  
}