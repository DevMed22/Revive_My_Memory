import React, { Component } from 'react'
import Child from '../Child/Child';
export default class Parent extends Component {
    state={
       products:[
        {id:1,Name:'Nokia',category:'mobile',price:7000,onSale:true},
        {id:2,Name:'infinix',category:'mobile',price:4000,onSale:false},
        {id:3,Name:'iphone',category:'mobile',price:17000,onSale:true},
        {id:4,Name:'oppo',category:'mobile',price:9000,onSale:true},
        {id:5,Name:'xmi',category:'mobile',price:1000,onSale:true},
       ]
    }
    deleteProduct=(curentproduct)=>{
let curentidex=this.state.products.indexOf(curentproduct);
let product=this.state.products;
product.splice(curentidex,1);
this.setState({products:product})
    }
    UpdateProduct=(curentproduct)=>{
let product=this.state.products;
curentproduct.price++;
this.setState({products:product});
    }
  render() {
    return (
      <>
   <div className='row my-5'>
    {
        this.state.products.map((product)=><Child key={product.id} productInfo={product} x={this.deleteProduct} UpdateProd={this.UpdateProduct}/>)
    }
   {/* <Child  productInfo={this.state.products[0]}/>
   <Child  productInfo={this.state.products[1]}/>
   <Child  productInfo={this.state.products[2]}/>
   <Child  productInfo={this.state.products[3]}/>
   <Child  productInfo={this.state.products[4]}/> */}
   </div>
      </>
    )
  }
}
