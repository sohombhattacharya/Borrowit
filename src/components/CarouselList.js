import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import AuthButton from "./AuthButton.js"     
    
class CarouselList extends React.Component {
    render() {
        console.log(this.props);
        return(<div>Test</div>);       
  }
}

export default CarouselList