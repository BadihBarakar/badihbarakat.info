import React, { Component } from 'react';
import { send, sendForm } from 'emailjs-com';

import '../css/slidingform.css';

class EmailMe extends Component {
    state = {
        state1: "",
        state2: "",
        serviceId: "outlook",
        templateId: "template_thXkwZOj",
        userId: "user_JAD58kchGqB1RVgy1r7Km",
        sendParams: {
            from_email: "",
            from_name: "",
            message_subject: "",
            message_text: ""
        }
    }

    handleSend = () => {
        const { serviceId, templateId, userId } = this.state;
        let sendParams = {...this.state.sendParams};

        send(serviceId, templateId, sendParams, userId)
            .then(result => {
                console.log('Sent Successfully!');
            })
            .catch(err => {
                console.log('Was not sent Successfully!');
            });
    }

    handleChange = (field) => {
        let sendParams = {...this.state.sendParams};

        console.log(field.currentTarget.id, field.currentTarget.value);
        sendParams[field.currentTarget.id] = field.currentTarget.value;

        this.setState({ sendParams });
    } 

    render() {
        const { from_email, from_name, message_subject, message_text } = this.state.sendParams;

        return (
            <React.Fragment>
                <div className="fslides">
                    <div className="slide1">
                        <div className={"example no-padding" + this.state.state1}>
                            <div className="belt">
                                <div className="state state-1">
                                    <div id="divFormContainer">
                                        <ul className="rolldown-flist" 
                                            id="myfList">
                                            <li>
                                                <div className="form-group row" 
                                                        style={{
                                                            marginRight: "1vw",
                                                            fontWeight: "bold"
                                                            }}>
                                                    <label htmlFor="from_name" 
                                                            style={{textAlign: "right"}}
                                                            className="col-sm-2 col-form-label">Your Name:</label>
                                                    <input 
                                                        type="text" 
                                                        id="from_name" 
                                                        className=" col-sm-10 form-control"
                                                        value={from_name}
                                                        onChange={this.handleChange} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group row" 
                                                        style={{
                                                            marginRight: "1vw",
                                                            fontWeight: "bold"
                                                            }}>
                                                    <label htmlFor="from_email" 
                                                            style={{textAlign: "right"}}
                                                            className="col-sm-2 col-form-label">Your Email:</label>
                                                    <input 
                                                        type="text" 
                                                        id="from_email" 
                                                        className="col-sm-10 form-control"
                                                        value={from_email}
                                                        onChange={this.handleChange} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group row" 
                                                        style={{
                                                            marginRight: "1vw",
                                                            fontWeight: "bold" 
                                                            }}>
                                                    <label htmlFor="message_subject" 
                                                            style={{textAlign: "right"}}
                                                            className="col-sm-2 col-form-label">Subject:</label>
                                                    <input 
                                                        type="text" 
                                                        id="message_subject" 
                                                        className="col-sm-10 form-control"
                                                        value={message_subject}
                                                        onChange={this.handleChange} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group row" 
                                                        style={{
                                                            marginRight: "1vw",
                                                            fontWeight: "bold" 
                                                            }}>
                                                    <label htmlFor="message_text" 
                                                            style={{textAlign: "right"}}
                                                            className="col-sm-2 col-form-label">Body:</label>
                                                    <textarea 
                                                        type="text" 
                                                        id="message_text" 
                                                        className=" col-sm-10 form-control"
                                                        rows="5"
                                                        onChange={this.handleChange}>
                                                            {message_text}
                                                    </textarea>
                                                </div>
                                            </li>
                                            <li style={{height: "10vh"}}>
                                                <div style={{float: "right", marginRight: "1vw"}}>
                                                    <button 
                                                        className="btn btn-info fbutton"
                                                        onClick={
                                                            () => { 
                                                                let state1 = this.state.state1;
                                                                state1 = state1 === "" ? " is-transitioned" : ""
                                                                this.setState({ state1 }); 
                                                                this.handleSend();
                                                            }}                                                
                                                        >Submit</button>
                                                    <button 
                                                        className="btn btn-primary rbutton" style={{marginLeft: "1vw"}}>Reset</button>    
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="state state-2">
                                                Submitted
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </React.Fragment>
       )}
}

export default EmailMe; 