import React, { Component } from 'react'
import {db } from '../../config'
export default class extends Component {
  constructor(props){
    super(props)
    this.state={value:[],done:false}
  }
  componentDidMount(){
    var that = this
     
    // db.ref("sellers").child("2Bjx7eeWGLPcNtcjrwArLD55iy03").on("value",function(data){
      
    // })

    db.ref("users").child("2Bjx7eeWGLPcNtcjrwArLD55iy03").on("value",function(data){
      data.forEach(o=>{
        that.state.value.push(o.val())
      })
      that.setState({done:true})
      
    })
  }
  render() {
    return (
      <div>
        {this.state.done ? <div>
          {this.state.value.map(p=>(
          <div>
            {p.productName}
            {p.category}
           <img src={p.urls[0]}/>
          </div>
        ))}

        </div> : null}
       
      </div>
    )
  }
}
