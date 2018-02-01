import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  HashRouter
} from 'react-router-dom'
import { Switch } from 'react-router'
import Login from "./Login.js"
import {auth} from "./Constants.js" 
import Home from "./Home.js"

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false 
        }
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.signOut = this.signOut.bind(this);
    }
   signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
       console.log();
       console.log(auth2.isSignedIn.get());
       let currThis = this; 
    auth2.signOut().then(function () {
      console.log('User signed out.');
    currThis.setState({ loggedIn: false });    
    });
  }
    
     onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        //BACKEND VERIFICATION
      this.setState({ loggedIn: true });
//      currentObj.props.history.push("/home");       
    }
     onFailure(error) {
      console.log(error);
    }    
    
    render(){
        
        if (!this.state.loggedIn){
            return(
                <Login onSuccess={this.onSuccess} onFailure={this.onFailure} />
                  );
        }
        else{
            return(
                   <Home signOut={this.signOut} />
                  );
        }
//        
//      return(
//  <HashRouter>
//    <div>
//    <Header />
//    <hr/>
//    <hr/>      
//      <Route exact path="/" component={Public}/>
//      <Route path="/login" component={Login}/>
//      <PrivateRoute path="/home" component={Home}/>
//    </div>
//          
//  </HashRouter>
//            )
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