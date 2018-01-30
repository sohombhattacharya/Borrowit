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
            redirect: false
        }
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
      this.setState({ redirect: true });
      currentObj.props.history.push("/home");
    }
     onFailure(error) {
      console.log(error);
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
  render() {
          const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (this.state.redirect){
            return (<Redirect to={from}/>);
        }
            console.log(from);
            return (<div><h2>Please login to view {from.pathname}</h2>
                    <div id="my-signin2"></div></div>);

      
      
        

    
  }
}

export default withRouter(Login)