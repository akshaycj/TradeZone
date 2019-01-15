import React, { Component } from 'react'
import PictureWall from './Upload';
import { Upload, Icon, Modal,Button,Spin } from "antd";
import { db ,storage} from '../../../config';
import Frame from './Frame';
export default class TopBanner extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:false,
      pics:[],
      load:false,
      uploaded:[],
      initialload:true
    }
  }
  componentDidMount(){
    var that = this
    db.ref("topBanner").on("value",function(data){
      var uploaded = []
      data.forEach(item =>{
          uploaded.push({name:item.val().fileName,url:item.val().url})
      })
      that.setState({uploaded,initialload:false})
    })
  }
  getFile = (file) =>{
    this.setState({pics:file})
    
  }
  onOkClick=()=>{
    var that = this
     var url = ""
  this.setState({load:true})
this.state.pics.forEach(p=>{

   storage.ref('topBanner/').child(p.originFileObj.name).getDownloadURL().then(o=>{
  
        alert("file name alredy exist ")
      that.setState({pics:[],visible:false,load:false})
    
    
  }).catch(function(data){
    storage
  .ref("topBanner/")
  .child(p.originFileObj.name)
  .put(p.originFileObj)
  .then(function(data) {
    data.ref
    .getDownloadURL()
    .then(function(downloadURL) {
      if(downloadURL){

        db.ref("topBanner").push().set({fileName:p.originFileObj.name,url:downloadURL})
        that.setState({load:false})
      }
      else{
        storage
 .ref("topBanner/")
 .child(p.originFileObj.name).delete()
      }
    }).then(function(data){
      that.setState({pics:[],visible:false})
      alert("files uploaded successfully")
    })
  }).catch(err =>{
    alert(err)
  })
  })

  
  
  
})  
}
onRemoveItem = (a) =>{
 storage
 .ref("topBanner/")
 .child(a).delete().then(function(data){
    db.ref("topBanner").orderByChild("fileName").equalTo(a).on("value",data=>{
        data.forEach(o=>{
          db.ref("topBanner").child(o.key).set(null)
        })
   })
   
})

}
render() {
  console.log(this.state.uploaded)
  return (
    <div>
    {this.state.initialload ? <Spin/> :<div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
  {this.state.uploaded.map(u=>(
    <Frame data={u} onRemoveItem={this.onRemoveItem}/>
  ))}
    
      <Button onClick={()=>{this.setState({visible:true})}}>Upload</Button>
    </div>
    }
      <Modal
          visible={this.state.visible}
          onCancel={()=>{this.setState({visible:false})}}
          onOk={this.onOkClick}
        >
         {this.state.load  ? <Spin/> : 
        <PictureWall value={this.getFile}></PictureWall>
         }
        </Modal>
      </div>
    )
  }
}
