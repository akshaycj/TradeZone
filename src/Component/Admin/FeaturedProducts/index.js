import React, { Component } from 'react'
import {db} from '../../../config';
import {Spin,Icon,Modal,Button} from 'antd';
import Frame from './Frame';
import './index.css';
import LoadingProduct from './LoadingProduct';
export default class  extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
            spin:true,
            modal:false,
            prodLoad:true,
            select:[]
        }
    }
    componentDidMount(){
        var that = this
        var item = {}
        db.ref("featuredProducts").on("value",function(data){
            var products = []
            data.forEach(e=>{
                item = e.val()
                item['uid'] = e.key
                products.push(item)
            })
            that.setState({spin:false,products:products})
        })
    }
    RemoveItem = (u) =>{
        db.ref("featuredProducts").child(u).set({})
    }
    addProduct= () =>{
       var selection = []
       var that = this
        this.setState({modal:true})
        db.ref("products").on("value",function(prod){
            prod.forEach(tr =>{
                selection.push({value:tr.val(),key:tr.key})
            })
            that.setState({prodLoad : false,select:selection})
        })
    }
    onSelectProd =(a) =>{
        this.setState({modal:false})
        var t = a.key
        var d= a.value
        
        db.ref("featuredProducts").child(t).set(d)
        
    }
    handleCancel = () =>{
        this.setState({modal:false})
    }
  render() {
    return (
      <div>
        {this.state.spin === true ? <Spin/> : <div className="frame-top">
            {this.state.products.map(l =>(
                <div className="frame"><Frame data={l} RemoveItem={this.RemoveItem}/></div>
            ))}
              <Modal
          title="Basic Modal"
          visible={this.state.modal}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
           
          ]}
        >
        <div>
            {this.state.prodLoad === true ? <Spin/> : <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.state.select.map(w =>(
                    <LoadingProduct data={w} style={{width:'200px'}} clickProd={this.onSelectProd}/>
                ))}
            </div>}
        </div>
        </Modal>
            {this.state.products.length ===  6 ? null : <Icon type="plus" style={{fontSize:40,alignSelf:'center'}} onClick={this.addProduct} /> }
        </div>}

      </div>
    )
  }
}
