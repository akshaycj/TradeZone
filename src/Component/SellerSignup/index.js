import React from 'react'
import { Input , Select , Col , Upload, Icon, Modal} from 'antd'

const InputGroup = Input.Group;
const Option = Select.Option;
const { TextArea } = Input;

export default class AddProduct extends React.Component{
  constructor(props){
    super(props)
    this.state={
      productName : "",
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    }
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleCancel = () => this.setState({ previewVisible: false })

  onProductName = (e) => {
    this.setState({productName:e})
  }

  render(){
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return(
      <div className="sellerSignUp" style={{ width : "100%" , height : "100vh"}}>
        <div style={{display : "flex" ,  backgroundColor : "#e3e3e3" , flexDirection : "column" , alignItems : "center" , justifyContent : "center" , margin : "auto" , padding : "10px"}}>
          <h2>Add Product</h2>
          <Input placeholder="Product Name" style={{ width : "25%"}}/>
          <div style={{width : "25%" , display : "flex" , flexDirection : "row" , margin : "10px"}}>
          <div style={{width : "65%"}}>Product Category</div>
            <InputGroup compact style={{width : "25%"}}>
              <Select defaultValue="Mobile">
                <Option value="Laptos">Laptops</Option>
                <Option value="Mobile">Mobile</Option>
                <Option value="HardDisks">Hard Disk</Option>
              </Select>
            </InputGroup>
          </div>
          <TextArea placeholder="Add Product Description...." style={{width : "25%"}} autosize={{ minRows: 3, maxRows: 8 }} />
          <Input placeholder="Price" style={{ width : "25%" , margin : "10px"}}/>
          <Input placeholder="Product Weight" style={{ width : "25%"}}/>
          <Input placeholder="Colour" style={{ width : "25%" , margin : "10px"}}/>
          <TextArea placeholder="Add Specification Details" style={{width : "25%"}} autosize={{ minRows: 2, maxRows: 5 }} />
          <Input placeholder="Area Of Usage" style={{ width : "25%" , margin : "10px"}}/>
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            style={{margin : "10px"}}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
      </div>
    )
  }
}
