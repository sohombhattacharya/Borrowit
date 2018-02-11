import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {auth} from "./Constants.js"
import ItemList from "./ItemList.js"    
    
class Market extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
        
            items: [
                {
                    id: 123,
                    name: "test", 
                    description: "test description", 
                    rate: 245.32,
                    image: "actual.jpeg",
                    location: null
                },
                {
                    id: 2345,
                    name: "test1", 
                    description: "test description", 
                    rate: 245.32,
                    pic: "actual.jpeg",
                    location: null
                },
                {
                    id: 351,
                    name: "test2", 
                    description: "test description", 
                    rate: 245.32,
                    pic: "actual.jpeg",
                    location: null
                }                
            ]
        
        }
    }
    
    getItems(){
        return this.state.items; 
    }

    render() {
        return(<div><ItemList items={this.state.items}/></div>)
    }
}

export default Market