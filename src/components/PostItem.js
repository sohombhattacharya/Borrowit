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
    constructor(props){
        super(props);
        this.state = {
            images: [],
            name: "", 
            description: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    uploadButton(){
cloudinary.openUploadWidget({upload_preset: 'fjpbxars', cloud_name: "dycjqocml", thumbnails: '.upload_multiple_images_holder', form: '.upload_multiple_images_holder', thumbnail_transformation: [ {width: 200, height: 200, crop: 'fit'} ], multiple: true, cropping: 'server', theme: "minimal", folder: 'user_photos', sources: [ 'local', 'url', 'dropbox', 'facebook', 'instagram']}, 
  function(error, result) {console.log(error, result)});
    
    
    }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }    

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }    
    render() {
        return (
            <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Description:
          <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
        </label>           
           <div class="upload_multiple_images_holder"><button type="button" class="btn btn-danger" onClick={this.uploadButton}>Upload</button></div>         
        <input type="submit" value="Submit" />
      </form>            
            </div>
        ); 
  }
}

export default PostItem