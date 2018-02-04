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
        console.log(this);
        return (<div></div>);
  }
}

export default Home