import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {auth} from "./Constants.js"
    
//class AuthButton extends React.Component {
//
//    constructor(props){
//        super(props);
//        this.signOut = this.signOut.bind(this);
//    }
//    signOut() {
//    var auth2 = gapi.auth2.getAuthInstance();
//    let currObj = this; 
//    auth2.signOut().then(function () {
//      console.log('User signed out.');
//        console.log(currObj.context);
//    });        
//  }    
//    render(){
//        console.log("authbutton rendered");
//        console.log(auth.isAuthenticated);
//        if (auth.isAuthenticated){
//            return (<a onClick={this.signOut}>Sign out</a>)
//        }
//        else{return (<div></div>);
//                    }
//    }
//}
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
        if(auth.isAuthenticated){
            return (<li><a onClick={this.signout}>Sign out</a></li>);
    }
        else{
            return (<p></p>);
        }
    
    }
}
//const AuthButton = withRouter(({ history }) => (
//  auth.isAuthenticated ? (
//    <p>
//      Welcome! <button onClick={() => {
//        auth.signout(() => history.push('/'))
//      }}>Sign out</button>
//    </p>
//  ) : (
//    <p>You are not logged in.</p>
//  )
//))

export default withRouter(AuthButton)

