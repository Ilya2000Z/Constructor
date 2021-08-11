import React,{Component} from "react"

export default class constructor extends Component{
    render (){
        var catalog=this.props.DataProducts.map((item,i)=>
        <div>
            <p>{item.id}</p>
        </div>); 
        return(
            <div>{catalog}</div>
        )
    }
}