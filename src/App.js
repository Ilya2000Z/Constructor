import logo from './logo.svg';
import './App.css';
import Body from "./Body/Body"
import React,{Component} from 'react';

class App extends Component{
  state ={
    DataProducts:[],
    rendConst:false
  }
  
   
 
  render(){
    setTimeout(()=>{this.setState({rendConst:this.state.rendConst=true})},6000)
    return(
      <div>
       <Body DataProducts={this.state.DataProducts}
              rendConst={this.state.rendConst}
              toswitch= {this.toswitch}
       ></Body>
      </div>
    )
  }

}

export default App;
