import React, { Component } from 'react'
import {db } from '../../config';
import Frame from './Frame';
export default class extends Component {
  constructor(props){
    super(props)
    this.state={value:[],done:false}
  }
  componentDidMount(){
    
    var that = this
    var item = {}
    var products = []
    db.ref("users").child("2Bjx7eeWGLPcNtcjrwArLD55iy03").on("value",function(data){
      
      var products = []
      data.forEach(e=>{
        
        item = e.val()
        item['uid'] = e.key
        products.push(item)
      })
      that.setState({done:true,value:products})
      console.log(that.state.value);
    })

  }
  render() {
    return (
      <div>
        {this.state.done ? <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-evenly]"}}>
          {this.state.value.map(p=>(
          <div style={{margin:'20px'}}>
           <Frame value={p} />
          </div>
        ))}

        </div> : null}
       
      </div>
    )
  }
}