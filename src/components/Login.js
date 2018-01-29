import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {auth} from "./Constants.js"
    
class Login extends React.Component {
    constructor(props){
        super(props);
        console.log(this);
        this.onSuccess = this.onSuccess.bind(this);
        
    }
   
    
     onSuccess(googleUser) {
         console.log(googleUser);
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
      console.log(this.props)
      let currentObj = this; 
        //BACKEND VERIFICATION
      auth.authenticate();
      console.log("Auth - " + auth.isAuthenticated);
      currentObj.props.history.push("/home");
    }
     onFailure(error) {
      console.log(error);
    }
     componentDidMount() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': this.onSuccess,
        'onfailure': this.onFailure
      });
    }
  render() {
          const { from } = this.props.location.state || { from: { pathname: '/' } }

            console.log(from);
            return (<div><div id="my-signin2"></div></div>);

      
      
        

    
  }
}

export default withRouter(Login)