import React,{Component}from "react"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


export default class Woo extends Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
    componentDidMount(props){
  const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
 const WooCommerce = new WooCommerceRestApi({    
//  url: 'https://fuser:k73k73k73@test.fidele-food.ru/',
  url: 'https://test.fidele-food.ru/',
  consumerKey: 'ck_3e64e47983096edc8b12e1f2af1b1ad6bf33c0e4',
  consumerSecret: 'cs_4877d2071218b8a288e96b582b7fedeed3a74940',
  version: 'wc/v2',
});

for(var i=1;i<10;i++)
WooCommerce.get("products", { per_page:100,page:i})

  .then((response) => {
    console.log("get")
    var  topars =[162,167,173,172,165,168,839]
    for(var i=0;i<topars.length;i++)
// console.log(categor.map((item)=>item))
    response.data.map((item)=>
 
      // item.catalog_visibility=="visible"?this.props.Dataprodukt.push(item):null
      // &&item.categories.map((item)=>item.id)==192
     
      item.categories.map((item)=>item.id)==topars[i] ?this.props.DataProducts.push(item):null
     
  )
 })
  setTimeout(()=>{console.log(this.props.DataProducts)},5000)
  //  .catch((error) => {
  //   console.log(error.response.data);
  // });
  // console.log(Dataproduct)
  return (<div></div>)

    }
    
    render(){
      return(<div></div>)
    }

}

