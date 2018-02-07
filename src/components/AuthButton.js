import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {auth} from "./Constants.js"
    
class AuthButton extends React.Component{
    constructor(props){
        super(props);
        this.signout = this.signout.bind(this);
    }
    signout(){
        var auth2 = gapi.auth2.getAuthInstance();
        let currObj = this;
        auth2.signOut().then(function () {
          console.log('User signed out.');
        auth.signout();
            currObj.props.history.push('/');
        });        
    }
    render(){
        console.log("auth - ", auth);
        console.log(auth.isAuthenticated());
        if(auth.isAuthenticated()){
            return (<li><a onClick={this.signout}>Sign out</a></li>);
    }
        else{
            return (<p></p>);
        }
    
    }
}

export default withRouter(AuthButton)

