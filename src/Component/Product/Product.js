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
			sellerName: '',
			spin: true,
			rating: ''
		};
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
        sellerid:url
			});

			db.ref('usersDetails').child(oath.val().seller + '').on('value', function(data) {
				that.setState({ sellerName: data.val().name, spin: false });
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
		Auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loginState: true });
				db.ref('usersDetails').child(user.uid + '').on('value', function(data) {
					that.setState({ phone: data.val().phone });
				});
			} else {
				this.setState({ displayMessage: true });
			}
		});
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
		Auth.onAuthStateChanged((user) => {
			if (user) {
				db.ref('usersDetails').child(user.uid + '').on('value', function(data) {
					that.setState({ email: data.val().email });
				});
				this.setState({ loginStateforContact: true });
			} else {
				this.setState({ displayMessage: true });
			}
		});
	}
	render() {
		return (
			<div className="product">
				{this.state.spin ? (
					<div className="spinClass">
						<Spin style={{ margin: 'auto' }} />
					</div>
				) : (
					<div>
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
								<Link to={this.state.sellerid}>	<div>{this.state.sellerName}</div></Link>
									<div className="rate">
										<h3>Price</h3>
										<h2>240.00</h2>
									</div>
									<div className="textval">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the
											1500s,
										</p>
									</div>
									<div style={{ display: 'flex', marginTop: '3%' }}>More</div>
									<div className="bottomBut">
										{this.state.loginState ? (
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
const mapStateToProps = (state) => ({
	user: state.user,
	authenticated: state.authenticated
});
const mapActionsToProps = {
	AuthStateAction: AuthStateAction
};
export default connect(mapStateToProps, mapActionsToProps)(Product);
