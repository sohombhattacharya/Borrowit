import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Login from "./Login.js"
import {fakeAuth} from "./Constants.js"    

class App extends React.Component {
    constructor(props){
        super(props);
        this.onSignIn = this.onSignIn.bind(this);
    }

 onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
    
    render(){
      return(<Router>
        <div>
          <AuthButton/>
        <div class="g-signin2" data-onsuccess={this.onSignIn}></div>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/home" component={Protected}/>
        </div>
      </Router>)
    }
}





const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p></p>
  )
))


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Protected = () => <h3>Logged In</h3>



export default App