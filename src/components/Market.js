import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {auth} from "./Constants.js"
import CarouselList from "./CarouselList.js"    
    
class Market extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
        
            items: [
                {
                    id: 123,
                    thumbnail: "thumbnail.jpeg", 
                    name: "test", 
                    description: "test description", 
                    rate: 245.32,
                    pic: "actual.jpeg"
                },
                {
                    id: 2345,
                    thumbnail: "thumbnail.jpeg", 
                    name: "test1", 
                    description: "test description", 
                    rate: 245.32,
                    pic: "actual.jpeg"
                },
                {
                    id: 351,
                    thumbnail: "thumbnail2.jpeg", 
                    name: "test2", 
                    description: "test description", 
                    rate: 245.32,
                    pic: "actual.jpeg"
                }                
            ]
        
        }
    }
    
    getItems(){
        return this.state.items; 
    }

    render() {
        return(<div><CarouselList items={this.state.items}/></div>)
    }
}

export default Market