import React from 'react';
import { Rate, Button, Card, Icon, Spin, message } from 'antd';
import './Product.css';
import w from './watch.jpg';
import {Link} from 'react-router-dom';
import AuthStateAction from '../Actions/AuthSate';
import { Auth, db } from '../../config';
import { connect } from 'react-redux';
class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heart: false,
			loginState: false,
			displayMessage: false,
			phone: '',
			email: '',
			loginStateforContact: false,
			urls: [],
			productName: '',
			description:"",
			specification:"",
			category:"",
			tags:[],
			areaofuseage:"",
			color:"",
			weight:"",
			sellerName: '',
			spin: true,
			price:"",
			rating: '',
			sellerLocation:"",
			expand:false,
		};
	}

	static getDerivedStateFromProps(props,state){
		if(props.user !== state){
			return{
				user:props.user
			}
		}
		null

	}
	componentDidMount() {
		this.props.AuthStateAction();
		var that = this;
		var sellerid = "/seller/";
		db.ref('products').child(this.props.match.params.id).on('value', function(oath) {
			const data = oath.val();
			if (data.ratings) {
				var rate = 0;
				var num = 1;
				var calc = 0;
				const ratings = Object.values(data.ratings);
				ratings.map((item, index) => {
					(rate = rate + item.value), (num = num + index);
				});
				calc = rate / num;
				that.setState({ rating: calc });
			}
      var url = sellerid+data.seller
			that.setState({
				urls: data.urls,
				productName: data.productName,
        		ratings: data.ratings,
				sellerid:url,
				price:data.price,
				description:data.description,
				specification:data.specififcation,
				category:data.category,
				weight:data.weight,
				color:data.color,
				areaofuseage:data.areaofusage,

			});

			db.ref('users').child(oath.val().seller + '').child("details").on('value', function(data) {
				that.setState({ sellerName: data.val().name,sellerLocation:data.val().location, spin: false });
			});
		});
		
	}
	changeHeart() {
		this.setState({
			heart: !this.state.heart
		});
	}
	onGetPhoneNo() {
		var that = this;
		var user = this.state.user
			if (user) {
				this.setState({ loginState: true });
				db.ref('users').child(user.uid + '').child("details").on('value', function(data) {
					that.setState({ phone: data.val().phone });
				});
			} else {
				this.setState({ displayMessage: true });
			}
		
	}
	onRate = (value) => {
		this.setState({ ratings: value });
		var rate = [];

		if (this.props.user) {
			db
				.ref('products')
				.child(this.props.match.params.id)
				.child('ratings')
				.child(this.props.user.uid)
				.set({ value });
		} else {
			message.error('Please Login to Rate a Product');
		}
	};
	onContactClick() {
		var that = this;
		var user = this.state.user
			if (user) {
				db.ref('users').child(user.uid + '').child("details").on('value', function(data) {
					that.setState({ email: data.val().email });
				});
				this.setState({ loginStateforContact: true });
			} else {
				this.setState({ displayMessage: true });
			}
		
	}
	onClickMore = () =>{
		this.setState({expand:!this.state.expand})
	}
	render() {
		return (
			<div className="product">
				{this.state.spin ? (
					<div className="spinClass">
						<Spin style={{ margin: 'auto' }} />
					</div>
				) : (
					<div style={{width:'100%'}}>
						<Card className="card">
							<div className="details">
								<div className="productpic">
									<div className="bigpic">
										<img src={this.state.urls[0]} style={{ width: '100%' }} />
									</div>
									<div className="smallpics">
										<img src={this.state.urls[1]} style={{ width: '33%' }} />
										<img src={this.state.urls[2]} style={{ width: '33%' }} />
										<img src={this.state.urls[3]} style={{ width: '33%' }} />
									</div>
								</div>
								<div className="description">
									<span className="name">
										<span style={{ display: 'flex', flexDirection: 'column' }}>
											<h1 style={{ marginBottom: '0px' }}>{this.state.productName}</h1>
											<Rate
												value={this.state.rating}
												style={{ float: 'left', display: 'inline-block' }}
												onChange={this.onRate}
											/>
										</span>
										<span>
											{this.state.heart ? (
												<Icon
													type="heart"
													style={{ fontSize: '25px', color: 'red' }}
													onClick={this.changeHeart.bind(this)}
												/>
											) : (
												<Icon
													type="heart-o"
													style={{ fontSize: '25px' }}
													onClick={this.changeHeart.bind(this)}
												/>
											)}
											<Icon type="share-alt" style={{ fontSize: '25px' }} />
										</span>
									</span>
								<div>

								<div><Link to={this.state.sellerid}>	{this.state.sellerName},</Link>{this.state.sellerLocation}</div>
												
								</div>
									<div className="rate">
										<h3>Price</h3>
										<h2>{this.state.price}</h2>
									</div>
									<div className="textval">
									<h3>Category:</h3>
										<p>
											{this.state.category}
										</p>
									</div>
									<div className="textval">
									<h3>Color:</h3>
										<p>
											{this.state.color}
										</p>
									</div>
									{this.state.expand ? <div>

									<div className="textval">
									<h3>Weight:</h3>
										<p>
											{this.state.weight}
										</p>
									</div>
									<div className="textval">
									<h3>Area Of Usage:</h3>
										<p>
											{this.state.areaofuseage}
										</p>
									</div>
									<div className="textval">
									<h3>Description:</h3>
										<p>
											{this.state.description}
										</p>
									</div>
									<div className="textval">
									<h3>Specification:</h3>
										<p>
											{this.state.specification}
										</p>
									</div>

									</div> : null}
									<div style={{ display: 'flex', marginTop: '3%' }} onClick={this.onClickMore}> {this.state.expand ? <div style={{cursor:'pointer'}}>Less</div> : <div style={{cursor:'pointer'}}>More</div>}</div>
									<div className="bottomBut">
										{this.state.loginState ?  (
											<div className="phoneNo">
												Phone No:
												{this.state.phone}
											</div>
										) : (
											<Button
												type="primary"
												ghost
												style={{ margin: '10px' }}
												onClick={this.onGetPhoneNo.bind(this)}
											>
												View Phone No
											</Button>
										)}
										{this.state.loginStateforContact ? (
											<div className="phoneNo">
												Email:
												{this.state.email}
											</div>
										) : (
											<Button
												type="danger"
												ghost
												style={{ margin: '10px' }}
												onClick={this.onContactClick.bind(this)}
											>
												Contact seller
											</Button>
										)}
									</div>
								</div>
							</div>
						</Card>
					</div>
				)}
			</div>
		);
	}
}
const mapStateToProps = (state) => (console.log(state),{
	user: state.user,
	authenticated: state.authenticated
});
const mapActionsToProps = {
	AuthStateAction: AuthStateAction
};
export default connect(mapStateToProps, mapActionsToProps)(Product);
