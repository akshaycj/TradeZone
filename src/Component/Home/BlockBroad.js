import React,{Component} from 'react';
import './BlockBroad.css';

export default class BlockBroad extends Component{
render(){
    return(
           <div className='element1'>
                <img src={this.props.pic} alt="maga" style={{width:'100%'}} />
                <div className='overlay2'>
                    <span className="detail1">
                        <h1>{this.props.name}</h1>
                        {this.props.text} 
                    </span>
                    <span className="price1"> 
                        <h6>AED</h6>
                        <h2>{this.props.price}</h2>
                    </span>
                </div>
           </div>

    )
}
}