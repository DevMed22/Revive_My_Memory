import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log(this.props);
    let { id,Name,category,price,onSale}=this.props.productInfo;
    return (
      <>
      <div className='col-md-4'>
        <div className='bg-info text-center'>
<h2>id:{id}</h2>
<p>Name:{Name}</p>
<h3>Category:{category}</h3>
<h3>Price:{price}</h3>
<button className='btn btn-danger me-2'onClick={()=>this.props.x(this.props.productInfo)}>Delete</button>
<button className='btn btn-warning'onClick={()=>this.props.UpdateProd(this.props.productInfo)}>Update</button>
{onSale?<h4 className='bg-success my-2 py-2'>Onsale:{onSale}</h4>:''}
        </div>
      </div>
      </>
    )
  }
}
