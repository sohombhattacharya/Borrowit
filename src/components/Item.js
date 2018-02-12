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
            <div>
<div style={afterStyle}>
<p style={postStyle}>
<img src={item.src}  border="1px" class="responsive" hspace="50"/>
</p>
<div>
<p>Item name: {item.name}</p>
<br/>
<p>Description: {item.description}</p>
<br/>
<p>Rate per day: {item.rate}</p>
<br/>
<p>(miles) away from you</p>
</div>
            
</div>
</div>
        
              );       
  }
}

export default Item