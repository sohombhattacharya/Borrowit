import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import AuthButton from "./AuthButton.js"     
    
class Item extends React.Component {
    
    constructor(props){
        super(props);
    }
    render() {
        let postStyle = {float: "left"}
        let afterStyle = {clear: "left"}
        let item = this.props.item; 
        return(
            <div class="row well">
<div class="col-1">
<p>
<img src={item.src}/>
</p>
</div>
            
<div class="col-2">
<p>Item name: {item.name}</p>
<br/>
<p>Description: {item.description}</p>
<br/>
<p>Rate per day: {item.rate}</p>
<br/>
<p>(miles) away from you</p>
<button type="button" class="btn btn-success">Get it!</button>        
</div>
            
</div>
        
              );       
  }
}

export default Item