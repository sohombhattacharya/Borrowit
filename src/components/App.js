import React, { Component } from 'react';
class App extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
const responseGoogle = (response) => {
  console.log(response);
}
        return(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('googleButton')
);
        
        }
    }
               
export default App;