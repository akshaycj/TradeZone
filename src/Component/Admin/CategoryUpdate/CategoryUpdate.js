import React, { Component } from 'react'
import { List, Button,Input,Spin,Icon } from 'antd';
import { db } from '../../../config';
export default class CategoryUpdate extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],category:'',
            load:true,
        }
    }
    componentDidMount(){
        var that = this
        db.ref("category").on("value",function(data){
            var list = []
            var element ={}
            data.forEach(p=>{
            
                list.push({value:p.val(),key:p.key})
            })
            that.setState({load:false,data:list})
        })
    }
    onAddCategory =() =>{
        if(this.state.category.length > 0){

            db.ref("category").push(this.state.category)
            this.setState({category:''})
        }
    }
    onChangeCategoryInput =(e) =>{
        
this.setState({category:e.target.value})
    }
    onClickDeleteIcon =(key) =>{
       db.ref("category").child(`${key}`).set({})
    }
  render() {
    return (
        <div>
        {this.state.load ? <Spin/> :
        <div>

     <h3 style={{ margin: '16px 0' }}>Category</h3>
    <List
      size="small"
      header={<div>Added Category</div>}
      bordered
      dataSource={this.state.data}
      renderItem={item => (<List.Item>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>

      {item.value}
      <Icon type="close" style={{cursor:'pointer'}} onClick={()=>{this.onClickDeleteIcon(item.key)}}/>
      </div>
      </List.Item>)}
    />
        </div>}
    <br/>
    <br/>
    <Input placeholder="Add category To list" value={this.state.category} onChange={this.onChangeCategoryInput} style={{width:'40%'}} />
    <Button onClick={this.onAddCategory}>Submit</Button>
        </div>
    )
  }
}
