import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {fakeAuth} from "./Constants.js"
    
class Login extends React.Component {
    constructor(props){
        super(props);
          this.state = {
            redirect: false
          };
        this.login= this.login.bind(this);
    }

  login(){
      console.log(this.props)
      let currentObj = this; 
      fakeAuth.authenticate(() => {
      currentObj.setState({ redirect: true });
    })
      this.props.history.push("/public");
  }

  render() {
      console.log("rendering login")
      console.log(this.props.location.state);
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (this.state.redirect) {
        console.log("redirect");
      return (
       this.props.history.push("/home")
      )
    }
    
    return (
      <div>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default withRouter(Login)