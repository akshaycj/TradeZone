import { Upload, Icon, Modal,Button } from "antd";
import React from "react";
class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      file: {},
      fileList:[],
    };
  }



  handleChange({ fileList,file }) {
    this.setState({ file: file,fileList});
    this.props.value(this.state.file);
  }

  render() {
    
    return (
      <div className="clearfix">
        <Upload
          //action="//jsonplaceholder.typicode.com/posts/"
          fileList={this.state.fileList}
          onChange={this.handleChange.bind(this)}
        > 
         <Button>
      <Icon type="upload" /> Upload Logo
    </Button>
        </Upload>
        
      </div>
    );
  }
}
export default PicturesWall;
