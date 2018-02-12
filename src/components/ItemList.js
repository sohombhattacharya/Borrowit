import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import AuthButton from "./AuthButton.js"     
import Item from "./Item.js"
    
class ItemList extends React.Component {
    constructor(props){
        super(props);  
    }
    getItemList(){
        var items = this.props.items; 
        console.log("items - ", items);
        var itemHtmlObjectList = []
        if (items.length != 0){
            var i; 
            for (i = 0; i < items.length; i++){
                console.log(items[i]);
                itemHtmlObjectList.push(<Item item={items[i]} />); 
            }
        }
        console.log(itemHtmlObjectList);
        return itemHtmlObjectList; 
    }
    
    render() {
        let items = this.getItemList();
        return(
            <div>
            {items}

            </div>
        
              );       
  }
}

export default ItemList