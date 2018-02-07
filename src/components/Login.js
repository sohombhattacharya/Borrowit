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
    this.state = {
    redirectToReferrer: false
  }
    this.onSuccess = this.onSuccess.bind(this);
      this.onFailure = this.onFailure.bind(this);      
  }
     componentDidMount() {
      gapi.signin2.render('my-signin2', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': this.onSuccess,
        'onfailure': this.onFailure
      });
    }
     onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
      auth.gapi = gapi; 
        if(auth.authenticate(googleUser)){
            this.setState({ redirectToReferrer: true });
        }
    }
     onFailure(error) {
      console.log(error);
    }    
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    console.log(from);
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <div><div id="my-signin2"></div></div>
      </div>
    )
  }
}

export default Login