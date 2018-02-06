import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {auth} from "./Constants.js"
    
class PostItem extends React.Component {
    
    uploadButton(){
cloudinary.openUploadWidget({upload_preset: 'fjpbxars', cloud_name: "dycjqocml", thumbnails: '.upload_multiple_images_holder', form: '.upload_multiple_images_holder', thumbnail_transformation: [ {width: 200, height: 200, crop: 'fit'} ], multiple: true, cropping: 'server', theme: "minimal", folder: 'user_photos', sources: [ 'local', 'url', 'dropbox', 'facebook', 'instagram']}, 
  function(error, result) {console.log(error, result)});
    
    
    }
    render() {
        return (<div><div class="upload_multiple_images_holder"><button type="button" class="btn btn-danger" onClick={this.uploadButton}>Upload</button></div></div>); 
  }
}

export default PostItem