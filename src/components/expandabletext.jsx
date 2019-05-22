import React, { Component } from 'react';
import '../css/expandabletext.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faHandPointLeft);


class ExpandableText extends Component {
   render() {
        const {text, textStyle} = this.props;
        let sp = "";
        return (
            <div className={textStyle ? "expText extDivMiddle" : "expTextUnStyled extDivMiddle"}>
                {
                    text.split(' ').map(w => {
                        // console.log(w);
                        return (
                            w.split('').map((l, i) => {
                                // console.log(l,i, w.length-1);
                                if(i === 0) {
                                    return <span>{l}</span>
                                }
                                else if(i === w.length-1)
                                {
                                    return (
                                        <React.Fragment>
                                            <span class="extHidden">{l}</span>
                                            <span>&nbsp;</span>
                                        </React.Fragment>
                                    )
                                }
                                else
                                {
                                    return <span class="extHidden">{l}</span>
                                }
                            })                     
                        )
                    })
                }
                <FontAwesomeIcon icon={faHandPointLeft} 
                    className="point-finger" />
                
            </div>
        );
   }
}

export default ExpandableText;