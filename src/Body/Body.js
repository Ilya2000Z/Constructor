import React,{Component} from "react"
import Woo from "../woo/woo"
import Constructor from "../Constructor/constructor"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Bootsrap from "../bootstrap.css"

export default class Body extends Component{
    render(){
        
        return (
            <div>
                <Woo DataProducts={this.props.DataProducts}></Woo>
                {this.props.rendConst==true?<Constructor DataProducts={this.props.DataProducts}></Constructor>:
                 <Loader
                 type="TailSpin"
                 color="#00878E"
                 height={100}
                 width={100}
                />
                }
            </div>
            
        )
    }

} 