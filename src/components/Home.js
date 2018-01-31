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
  render() {
        return (<div><button type="button" class="btn btn-danger" onClick={this.props.signOut}>Sign Out</button></div>); 
  }
}

export default Home