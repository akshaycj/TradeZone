import React from 'react';
import { Rate, Button, Card, Icon } from 'antd';
import './Product.css';
import w from './watch.jpg';
export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heart: false
        }
    }
    changeHeart() {
        this.setState({
            heart: !this.state.heart
        })

    }
    render() {
        return (
            <div className='product'>
                <Card className='card'>
                    <div className='details'>
                        <div className='productpic'>
                            <div className='bigpic'>
                                <img src={w} style={{ width: '100%' }} />
                            </div>
                            <div className='smallpics'>
                                <img src={w} style={{ width: '33%' }} />
                                <img src={w} style={{ width: '33%' }} />
                                <img src={w} style={{ width: '33%' }} />
                            </div>
                        </div>
                        <div className='description'>
                            <span className='name'>
                                <span style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h1 style={{ marginBottom: '0px' }}>Watch-Marius</h1>
                                    <Rate style={{ float: 'left', display: 'inline-block' }} />
                                </span>
                                <span>

                                    {this.state.heart ? <Icon type="heart" style={{ fontSize: '25px', color: 'red' }} onClick={this.changeHeart.bind(this)} /> : <Icon type="heart-o" style={{ fontSize: '25px' }} onClick={this.changeHeart.bind(this)} />

                                    }
                                    <Icon type="share-alt" style={{ fontSize: '25px' }} />
                                </span>
                            </span>
                            <div className='rate'>
                                <h3>Price</h3>
                                <h2>240.00</h2>
                            </div>
                            <div className='textval'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            </div>
                            <div style={{ display: 'flex', marginTop: '3%' }}>More</div>
                            <div className='bottomBut'>
                                <Button type="primary" ghost style={{ margin: '10px' }}>View Phone No</Button>
                                <Button type="danger" ghost style={{ margin: '10px' }}>Contact seller</Button>

                            </div>
                        </div>

                    </div>
                </Card>
                    
            </div>
        )
    }
}
