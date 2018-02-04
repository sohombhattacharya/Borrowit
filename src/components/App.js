import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
    Switch
} from 'react-router-dom'
import PostItem from "./PostItem.js"
import {auth} from "./Constants.js"
import AuthButton from "./AuthButton.js"    
import Login from "./Login.js"
import Header from "./Header.js"
    
class App extends React.Component{
    
    constructor(props){
        super(props);
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
      <PrivateRoute path="/protected" component={PostItem}/>
    </Switch>

    </div>
    </Router>
          );
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

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>



export default App