import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
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
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Rent A Shirt</a>
    </div>
    <ul class="nav navbar-nav">
        <li><Link to="/public">Public Page</Link></li>   
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login Page</Link></li> 
    </ul>
  </div>
</nav>
      <Route path="/login" component={Login}/>
      <Route path="/public" component={Public}/>
      <PrivateRoute path="/home" component={Home}/>
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



export default App