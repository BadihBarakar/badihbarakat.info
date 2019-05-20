import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../components/overview';
import ContactMe from '../components/contactme';
import MySkills from '../components/skills';
import EmailMe from '../components/emailme';
import HomePage from '../components/homepage';
import UnderConst from '../components/underconstruction';

class NavRedirect extends Component {

    render() {
        // const { handleSignin, handleSignout, handleTokenUpdate, handleSuccessfulSignin } = this.props.authFunc;
        // const { menuVisible } = this.props;
        
        return (
            
            <Switch>
                <Route exact path="/" 
                    render={(props) => <HomePage />}
                />
                <Route exact path="/overview" 
                    render={(props) => <Overview />}
                />
                <Route exact path="/contactme" 
                    render={(props) => <ContactMe />}
                />
                <Route exact path="/skills" 
                    render={(props) => <MySkills />}
                />
                <Route exact path="/emailme" 
                    render={(props) => <EmailMe />}
                />
                
                <Route exact path="/projects" 
                    render={(props) => <UnderConst />}
                />
                <Route exact path="/samples" 
                    render={(props) => <UnderConst />}
                />
                <Route exact path="/wegt" 
                    render={(props) => <UnderConst />}
                />
                <Route exact path="/weat" 
                    render={(props) => <UnderConst />}
                />
                <Route exact path="/certificates" 
                    render={(props) => <UnderConst />}
                />
                <Route exact path="/ocourses" 
                    render={(props) => <UnderConst />}
                />
                <Route exact path="/acourses" 
                    render={(props) => <UnderConst />}
                />


                {/* <Route  render={(props) => <Login   onSignin={handleSignin} 
                                                onSuccessfulSignin={handleSuccessfulSignin} 
                                                updateToken={handleTokenUpdate} 
                                                onSignOut={handleSignout} 
                                                {...props} /> } 
                /> */}
            </Switch>
        );
    }
};

export default NavRedirect;