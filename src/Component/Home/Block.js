import React, { Component } from 'react';
import './Block.css';
export default class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ""
        }
    }

    render() {
        return (
            <div>

                <div className='element'>
                    <img src={this.props.pic} alt="maga" style={{ minWidth: '160px', maxHeight: '160px' }} />
                    <div className='overlay1'>
                        <span className="detail">
                            <h1>{this.props.name}</h1>
                            {this.props.text}
                        </span>
                        <span className="detail">
                            <h2>{this.props.price}</h2>
                        </span>
                    </div>
                </div>
            </div>

        )
    }
}