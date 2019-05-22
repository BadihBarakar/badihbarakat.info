import React, { Component } from 'react';

import '../css/socialbuttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faTwitter, faInstagram, faHeart, faThumbsUp);

class SocialButtons extends Component {
   render() {
      return (
        <div class="social-button">
            <div className="vFlipped">
                <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <a href="https://www.facebook.com/badih.barakat" 
                target="_blank" 
                style={{color: "white"}}>
                <div class="facebook-button">
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
            </a>
            <a href="https://twitter.com/badih76" 
                target="_blank" style={{color: "white"}}>
                <div class="twitter-button">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </a>
            <a href="https://www.instagram.com/badihbarakat/" 
                target="_blank" style={{color: "white"}}>
                <div class="instagram-button">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </a>
        </div>
      );
   }
}

export class SocialBar extends Component {
    render() {
       return (
         <div class="social-bar">
             <div className="sb-item" >
                <a href="https://www.facebook.com/badih.barakat" 
                    target="_blank" 
                    style={{color: "white"}}>
                    <div class="facebook-button-bar">
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                </a>
             </div>
             <div className="sb-item" >
                <a href="https://twitter.com/badih76" 
                    target="_blank" style={{color: "white"}}>
                    <div class="twitter-button-bar">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </a>
             </div>
             <div className="sb-item" >
                <a href="https://www.instagram.com/badihbarakat/" 
                    target="_blank" style={{color: "white"}}>
                    <div class="instagram-button-bar">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </a>
             </div>
         </div>
       );
    }
 }
 
export default SocialButtons;