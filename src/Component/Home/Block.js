import React,{Component} from 'react';
import './Block.css';

export default class Block extends Component{
render(){
    return(
           <div className='element'>
                <img src={this.props.pic} alt="maga" style={{width:'100%'}} />
                <div className='overlay1'>
                    <span className="detail">
                        <h1>{this.props.name}</h1>
                        {this.props.text} 
                    </span>
                    <span className="price"> 
                        <h6>AED</h6>
                        <h2>{this.props.price}</h2>
                    </span>
                </div>
           </div>

    )
}
}