import React from 'react';
import Block from './Block';
import BlockBroad from './BlockBroad';
import './Grid.css';
import {Link } from 'react-router-dom';
import i from './pics/watch.jpg';
import j from './pics/bag.jpg';
import k from './pics/dialer.jpg';
import l from './pics/drone.jpg';
import m from './pics/gadget.jpg';
import n from './pics/phone.jpg';
import o from './pics/mouse.jpg';
class Grid extends React.Component{
    render(){
        return(
            <div className='sub'>
                <h1>{this.props.heading}</h1>
                <div className='grid1'>
                    <Link to='/product'><BlockBroad name={'Watch'} text={'Loren Ipsum'} pic={i} price={250} /></Link>
                    <Link to='/product'><BlockBroad name={'Watch'} text={'Loren Ipsum'} pic={i} price={250} /></Link>
                    <Link to='/product'><BlockBroad name={'Watch'} text={'Loren Ipsum'} pic={i} price={250} /></Link>
                 
                </div>
                <div className='grid2'>
                <Link to='/product'><Block name={'Watch'} text={'Loren Ipsum'} pic={i} price={250} /></Link>
                <Link to='/product'><Block name={'Watch'} text={'Loren Ipsum'} pic={i} price={250} /></Link>
                <Link to='/product'><Block name={'Watch'} text={'Loren Ipsum'} pic={i} price={250} /></Link>
                <Link to='/product'><Block name={'Watch'} text={'Loren Ipsum'} pic={i} price={250} /></Link>
                </div>
            </div>
        )
        
    }
}
export default Grid;