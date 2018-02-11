import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import AuthButton from "./AuthButton.js"     
    
class ItemList extends React.Component {
    
    render() {
        console.log(this.props);
        let postStyle = {float: "left"}
        let afterStyle = {clear: "left"}
        return(
            <div>
<div style={afterStyle}>
<p style={postStyle}>
<img src="https://res.cloudinary.com/dycjqocml/image/upload/c_fit,h_350,w_200/v1518389085/107148825167274594085/stasmiirabgibqlhza0x.jpg"  border="1px" class="responsive" hspace="50"/>
</p>
<div>
<p>(Name)</p>
<br/>
<p>Description</p>
<br/>
<p>Rate</p>
<br/>
<p>(miles) away from you</p>
</div>
            
</div>
</div>
        
              );       
  }
}

export default ItemList