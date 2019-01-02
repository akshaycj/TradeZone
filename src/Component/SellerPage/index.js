import React, { Component } from 'react'
import {db } from '../../config';
import Frame from './Frame';
import {Spin} from 'antd';
export default class extends Component {
  constructor(props){
    super(props)
    this.state={value:[],done:false}
  }
  componentDidMount(){
    var that = this
    var item = {}
    var products = []
    db.ref("users").child(this.props.match.params.id).child("products").on("value",function(data){
      
      var products = []
      data.forEach(e=>{
        
        item = e.val()
        item['uid'] = e.key
        products.push(item)
      })
      that.setState({done:true,value:products})
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

        </div> : <div style={{display:'flex',margin:'auto',height:'100vh',justifyContent:'center',alignItems:'center'}}>
        <Spin/>
        </div>
        }
       
      </div>
    )
  }
}