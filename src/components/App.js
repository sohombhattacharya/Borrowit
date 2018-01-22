import React, { Component } from 'react';
class App extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return(<h3>Hello {this.props.name}</h3>);
        
        }
    }
               
export default App;