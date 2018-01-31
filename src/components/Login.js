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
     componentDidMount() {
      gapi.signin2.render('my-signin2', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': this.props.onSuccess,
        'onfailure': this.props.onFailure
      });
    }
  render() {
            return (
                <div>
                <h2>Please login</h2>
                <div id="my-signin2"></div>
                </div>
                   
                   );
  }
}

export default Login