import React, { Component } from 'react'

export default class About extends Component {
    state={
Name:'esmael',
age :22,
salary:5000,
href:'https://www.google.com'

    }
    welcome=(name)=>{
        alert(`Hello${name}`)
    }
  render() {
    return (
  <>
  <h1>Hello {this.state.Name}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aperiam? {this.state.age}</p>
  <span>My salary is {this.state.salary}</span>
  <a href={this.state.href}>Google</a>
  <button className='btn btn-info'onClick={()=>this.welcome('Mosaad')}>click me</button>
  </>
    )
  }
}
