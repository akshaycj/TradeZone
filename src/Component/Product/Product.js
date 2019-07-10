import React from 'react';
import { Rate, Button, Card, Icon, Spin, message } from 'antd';
import './Product.css';
import w from './watch.jpg';
import { Link } from 'react-router-dom';
import AuthStateAction from '../Actions/AuthSate';
import { Auth, db } from '../../config';
import { connect } from 'react-redux';
import Login from '../Login/Login';
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
			urlsForShifting: [],
			productName: '',
			description: "",
			specification: "",
			address: '',
			category: "",
			tags: [],
			areaofuseage: "",
			color: "",
			weight: "",
			sellerName: '',
			spin: true,
			price: "",
			rating: '',
			sellerLocation: "",
			expand: false,
			showLogin: false,
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.user !== state) {
			return {
				user: props.user
			}
		}
		null

	}
	componentDidMount() {
		this.props.AuthStateAction();
		var that = this;
		var sellerid = "/seller/";
		db.ref('products').child(this.props.match.params.id).on('value', function (oath) {
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
			var url = sellerid + data.seller
			that.setState({
				urls: data.urls,
				urlsForShifting: data.urls,
				productName: data.productName,
				ratings: data.ratings,
				sellerid: url,
				seller: data.seller,
				price: data.price,
				description: data.description,
				specification: data.specififcation,
				category: data.category,
				weight: data.weight,
				color: data.color,
				areaofuseage: data.areaofusage,

			});

			db.ref('users').child(oath.val().seller + '').child("details").on('value', function (data) {
				that.setState({ sellerName: data.val().companyName, sellerLocation: data.val().location, spin: false });
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
		var seller = this.state.seller
		if (user) {
			this.setState({ loginState: true });
			db.ref('users').child(seller + '').child("details").on('value', function (data) {
				that.setState({ phone: data.val().phone });
			});
		} else {
			this.setState({ displayMessage: true, showLogin: true });
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
		var seller = this.state.seller
		if (user) {
			db.ref('users').child(seller + '').child("details").on('value', function (data) {
				that.setState({ email: data.val().email, address: data.val().companyAddr });
			});
			this.setState({ loginStateforContact: true });
		} else {
			this.setState({ displayMessage: true, showLogin: true });
		}

	}
	onClickMore = () => {
		this.setState({ expand: !this.state.expand })
	}
	closeLogin = () => {
		this.setState({ showLogin: false })
	}

	onPicChange = (i) => {
		var urls = this.state.urls;
		var urlsForShifting = this.state.urlsForShifting;
		var temp = urlsForShifting[0];
		urlsForShifting[0] = urlsForShifting[i];
		urlsForShifting[i] = temp;
		this.setState({
			urlsForShifting: urlsForShifting
		})
	}

	render() {
		return (
			<div className="product">
				{this.state.spin ? (
					<div className="spinClass">
						<Spin style={{ margin: 'auto' }} />
					</div>
				) : (
						<div style={{ width: '100%' }}>
							{this.state.showLogin ?
								<Login
									value={this.closeLogin}
									button="user"
									showSellerSignUp={false}
								/> : null
							}
							<Card className="card">
								<div className="details">
									<div className="productpic">
										<div className="bigpic" style={{ paddingBottom: "10px" }}>
											<div style={{ width: '100%', borderWidth: "2px", borderColor: "black", borderStyle: "solid", padding: "5px" }}><img src={this.state.urlsForShifting[0]} style={{ width: "95%" }} onClick={() => { this.onPicChange(0) }} /></div>
										</div>
										<div className="smallpics">
											<div style={{ width: '33%', borderWidth: "2px", borderColor: "black", borderStyle: "solid", padding: "5px" }}><img src={this.state.urlsForShifting[1]} style={{ width: '100%' }} onClick={() => { this.onPicChange(1) }} /></div>
											<div style={{ width: '33%', borderWidth: "2px", borderColor: "black", borderStyle: "solid", padding: "5px" }}><img src={this.state.urlsForShifting[2]} style={{ width: '100%' }} onClick={() => { this.onPicChange(2) }} /></div>
											<div style={{ width: '33%', borderWidth: "2px", borderColor: "black", borderStyle: "solid", padding: "5px" }}><img src={this.state.urlsForShifting[3]} style={{ width: '100%' }} onClick={() => { this.onPicChange(3) }} /></div>
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

											<div><span style={{ fontSize: '20px', fontWeight: 600 }}><Link to={this.state.sellerid}>{this.state.sellerName},</Link></span>{this.state.sellerLocation}</div>

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
										<div style={{ display: 'flex', marginTop: '3%' }} onClick={this.onClickMore}> {this.state.expand ? <div style={{ cursor: 'pointer' }}>Less</div> : <div style={{ cursor: 'pointer' }}>More</div>}</div>
										<div className="bottomBut">
											{this.state.loginState ? (
												<div className="phoneNo">
													Phone No:
												<b>{this.state.phone}</b>
												</div>
											) : (
													<div>

														<Button
															type="primary"
															ghost
															style={{ margin: '10px' }}
															onClick={this.onGetPhoneNo.bind(this)}
														>
															View Phone No
											</Button>
													</div>
												)}
											{this.state.loginStateforContact ? (
												<div className="phoneNo" style={{ width: '50%' }}>
													Email:
												<b>{this.state.email}</b>
													<br />
													Address:
												<b>{this.state.address}</b>
												</div>
											) : (
													<div>

														<Button
															type="danger"
															ghost
															style={{ margin: '10px' }}
															onClick={this.onContactClick.bind(this)}
														>
															Contact seller
											</Button>
													</div>
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
const mapStateToProps = (state) => (console.log(state), {
	user: state.user,
	authenticated: state.authenticated
});
const mapActionsToProps = {
	AuthStateAction: AuthStateAction
};
export default connect(mapStateToProps, mapActionsToProps)(Product);
