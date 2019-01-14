import { Upload, Icon, Modal,Spin,Button } from "antd";
import React from "react";
import {storage, db} from '../../../config'
import LatestOffers from "./LatestOffers";

class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      fileList: [],
      defaultFileList:[],
      currentFile:[],
      load:true
    };
  }
componentDidMount(){ 
  var that = this
  db.ref("latestOffers").on("value",function(data){
    var defaultlist = []
    var count = 0
    data.forEach((t)=>{
        count ++
        defaultlist.push({uid:count,url:t.val()})
    })
    that.setState({fileList:defaultlist,load:false})
  })
}
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({file,fileList }) =>{
    console.log(fileList);
    
  //  var that = this
  //  var url = []
  //  const path = db
  //  .ref('LatestOffers')
  //  .push();
  //   //this.props.value(this.state.fileList);
    
      
  //     storage
  //     .ref("latestOffers/")
      
  //     .child(file.originFileObj.name)
  //     .put(file.originFileObj)
  //     .then(function(data) {
  //       data.ref
  //       .getDownloadURL()
  //       .then(function(downloadURL) {
  //         url=downloadURL
          
  //       })
  //     }).then(function(aim){
  //       console.log("sad");
        
  //       path.set({fileName:file.originFileObj.name,url:url})

  //     })
  //     console.log(url);
      
 }
onRemove = (a) =>{
  console.log(a);
  
  storage
  .ref("latestOffers/")
  
  .child(a.originFileObj.name)
  .delete().then(o=>{
    console.log(o);
    
  })
}
  render() {
    console.log(this.state.defaultFileList);
    
    
    return (
      <div className="clearfix">
      {this.state.load ? <Spin></Spin>:
       <Upload defaultFileList={this.state.fileList} onRemove={this.onRemove} onChange={this.handleChange}>
    <Button>
      <Icon type="upload" /> Upload
    </Button>
  </Upload>
      }
       
      </div>
    );
  }
}
export default PicturesWall;
