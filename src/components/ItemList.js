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
<div>
<p style={postStyle}>
<img src="http://res.cloudinary.com/dycjqocml/image/upload/c_limit,h_350,w_200/v1518381376/107148825167274594085/ls85k8h8xj4llemos3rk.jpg"  border="1px"/>
</p>
<p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
</div>
<div style={afterStyle}>
<p style={postStyle}><img src="https://res.cloudinary.com/dycjqocml/image/upload/v1518372624/107148825167274594085/vgpib756jebw2yrpl0zz.jpg" width="200px" height="300px" border="1px"/></p>
    <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p></div>
<div style={afterStyle}>
<p style={postStyle}><img src="https://res.cloudinary.com/dycjqocml/image/upload/v1518372624/107148825167274594085/vgpib756jebw2yrpl0zz.jpg" width="200px" height="300px" border="1px"/></p>
    <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p></div>
<div style={afterStyle}>
<p style={postStyle}><img src="https://res.cloudinary.com/dycjqocml/image/upload/v1518372624/107148825167274594085/vgpib756jebw2yrpl0zz.jpg" width="200px" height="300px" border="1px"/></p>
    <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p></div>
                </div>
        
              );       
  }
}

export default ItemList