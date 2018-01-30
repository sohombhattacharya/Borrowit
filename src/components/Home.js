import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {auth} from "./Constants.js"
    
class Home extends React.Component {
    constructor(props){
        super(props);
        console.log(this);
        this.signOut = this.signOut.bind(this);
        
    }
   signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    auth.signout();
    this.props.history.push("/");
  }
  render() {
        if (this.props.location.state.hasOwnProperty('data'))
            console.log(this.props.location.state.data);
            return (<div><button type="button" class="btn btn-danger" onClick={this.signOut}>Sign Out</button></div>);

      
      
        

    
  }
}

export default withRouter(Home)