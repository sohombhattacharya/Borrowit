import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import AuthButton from "./AuthButton.js"     
    
class Header extends React.Component {
    render() {
        return(
<div><nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">Borrowit</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><Link to="/">Market</Link></li>
        <li><Link to="/sellItem">Sell Item</Link></li>
        <AuthButton/>  
      </ul>            
    </div>
  </div>
</nav></div> );       
  }
}

export default Header