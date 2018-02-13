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
                    name: "Item1", 
                    description: "item1 description", 
                    rate: 5.50,
                    src: "http://res.cloudinary.com/dycjqocml/image/upload/c_fit,h_200,w_200/v1518491646/107148825167274594085/zjaydeutwwopefmtkgsu.jpg",
                    location: null
                },
                {
                    id: 2345,
                    name: "Item2", 
                    description: "item2 description", 
                    rate: 6.70,
                    src: "http://res.cloudinary.com/dycjqocml/image/upload/c_fit,h_200,w_200/v1518491646/107148825167274594085/zjaydeutwwopefmtkgsu.jpg",
                    location: null
                },
                {
                    id: 351,
                    name: "Item3", 
                    description: "item3 description", 
                    rate: 10,
                    src: "https://res.cloudinary.com/dycjqocml/image/upload/c_fit,h_350,w_200/v1518389085/107148825167274594085/stasmiirabgibqlhza0x.jpg",
                    location: null
                }                
            ]
        
        }
    }
    
    getItems(){
        return this.state.items; 
    }

    render() {
        return(
            
            <div>
            <div align="center">
                <p>Filter options</p>
                <p>Search box</p>
            </div>
            <ItemList items={this.state.items}/>
            </div>
              
              
              );
    }
}

export default Market