import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import { Switch } from 'react-router'    
import Login from "./Login.js"
import {auth} from "./Constants.js" 
import Home from "./Home.js"

class App extends React.Component {
    constructor(props){
        super(props);
        console.log(auth.isAuthenticated);
    }
  
    render(){
      return(
  <Router>
    <div>
    <Header />
    <hr/>
    <hr/>      
    <Switch>
      <Route exact path="/" component={Public}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/home" component={Home}/>
    </Switch>
    </div>
          
  </Router>
            )
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <h3>Public page</h3>
const Header = () => (<div><nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">Rent A Shirt</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><Link to="/">Public Page</Link></li>   
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login Page</Link></li> 
      </ul>
    </div>
  </div>
</nav></div>) 


export default App