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
        let carouselStyle={width:"210px", height:"auto"}
        return(
<div id="myCarousel" class="carousel slide" data-ride="carousel" style={carouselStyle}>
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner" style={carouselStyle}>
    <div class="item active">
      <img src="https://images-na.ssl-images-amazon.com/images/I/518mU6Oi6XL._AC_US218_.jpg" alt="Los Angeles" class="img-responsive"/>
    </div>

    <div class="item">
      <img src="chicago.jpg" alt="Chicago"/>
    </div>

    <div class="item">
      <img src="ny.jpg" alt="New York"/>
    </div>
  </div>

  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>         
            
              );       
  }
}

export default CarouselList