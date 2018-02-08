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
            images: {},
            name: "", 
            description: "", 
            rate: 0.0
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.uploadButton = this.uploadButton.bind(this);     
        
    }
    componentDidMount(){
$(document).on('cloudinarywidgetdeleted', function(e, data) {
    let imagesDict = this.state.images; 
    delete imagesDict[data.public_id]; 
    this.setState({images: imagesDict});
}.bind(this));     
    }
    uploadButton(){
        let currObj = this; 
cloudinary.openUploadWidget({upload_preset: 'fjpbxars', cloud_name: "dycjqocml", thumbnails: '.upload_multiple_images_holder', form: '.upload_multiple_images_holder', thumbnail_transformation: [ {width: 200, height: 200, crop: 'fit'} ], multiple: true, theme: "minimal", folder: auth.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getId(), sources: [ 'local', 'url', 'dropbox', 'facebook', 'instagram']}, 
  function(error, result) {
    if (!error){
        console.log(result);  
        console.log("image uploaded, this - ", currObj); 
        console.log(currObj.state);
        let imagesDict = currObj.state.images; 
        imagesDict[result[0].public_id] = result[0].secure_url;
        currObj.setState({images: imagesDict});
    }                          
                          });
    
    }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }    
  handleRateChange(event) {
    this.setState({rate: event.target.value});
  }    
  handleSubmit(event) {
      //POST ITEM TO API WITH STATE PARAMS
    event.preventDefault();
  }    
    render() {
        return (
            <div class="container-fluid">
      <form onSubmit={this.handleSubmit} width="auto">
        <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" value={this.state.name} onChange={this.handleNameChange} />
            </div>
        <div class="form-group">    
        <label>Description:</label>
          <textarea type="text" class="form-control" value={this.state.description} onChange={this.handleDescriptionChange} />
            </div>
        <div class="form-group">    
        <label>Rate Per Day:</label>            
        <input type='number' min="0" step='0.01' value='0.00' placeholder='0.00' class="form-control" value={this.state.rate} onChange={this.handleRateChange}/>
            </div>
           <div class="upload_multiple_images_holder"><button type="button" class="btn btn-success" onClick={this.uploadButton}>Upload Pictures</button></div>         
            <br />
        <button type="submit" class="btn btn-primary">Post Item</button>    
      </form>            
            </div>
        ); 
  }
}

export default PostItem