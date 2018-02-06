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
import Market from "./Market.js"

    
class App extends React.Component{
    
    constructor(props){
        super(props);
    }
    
  render(){
      return(
      <Router>
    <div>
    <Header />       
    <Switch>
      <Route exact path="/" component={Market}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/sellItem" component={PostItem}/> 
// HAVE TO SEND IN GOOGLE USER INFO AS PROPS TO COMPONENTS 
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

export default App