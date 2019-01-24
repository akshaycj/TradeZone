import React, { Component } from 'react'
import Frame from './Frame';
import {Spin} from 'antd';
import {db} from '../../config';
export default class SearchResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            spin:true,
            result:[]
        }
    }
    componentDidMount(){
      this.fetchData()
    }
    fetchData = () =>{
        let result = [];
        let item ={}
        db.ref("products")
        .orderByChild("productName")
        .startAt(this.props.match.params.id)
        .endAt(this.props.match.params.id + "\uf8ff")
        .once(
          "value",
          function(data) {
            data.forEach(element => {
                item = element.val()
                item['uid'] = element.key
              result.push(item);
            });
    
            this.setState({ result,spin:false });
          }.bind(this)
        );
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props != prevProps){
            this.setState({spin:true})
            this.fetchData()
        }
    }
  render() {
      console.log(this.state.result);
      
    return (
      <div>
        {this.state.spin ? <div style={{display:'flex',margin:'auto',height:'100vh',justifyContent:'center',alignItems:'center'}}>
        <Spin/>
        </div> :
        this.state.result.length > 0 ? 
         <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-evenly]"}}>
          {this.state.result.map(p=>(
          <div style={{margin:'20px'}}>
           <Frame value={p} />
          </div>
          ))}
          </div> :
          <div style={{width:'80%',borderRadius:'20px',backgroundColor:'#f5f9fa',display:'flex',margin:'auto',height:'100vh',justifyContent:'center',alignItems:'center'}}>
              <h1>No Such product found</h1> 
          </div>
        }
      </div>
    )
}
}