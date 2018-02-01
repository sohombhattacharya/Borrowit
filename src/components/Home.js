import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {auth} from "./Constants.js"
    
class Home extends React.Component {
    
    uploadButton(){
cloudinary.openUploadWidget({upload_preset: 'fjpbxars', cloud_name: "dycjqocml", cropping: 'server', folder: 'user_photos', sources: [ 'local', 'url', 'dropbox', 'facebook', 'instagram']}, 
  function(error, result) {console.log(error, result)});
    
    
    }
    render() {
        return (<div><button type="button" class="btn btn-danger" onClick={this.props.signOut}>Sign Out</button><button type="button" class="btn btn-danger" onClick={this.uploadButton}>Upload</button></div>); 
  }
}

export default Home