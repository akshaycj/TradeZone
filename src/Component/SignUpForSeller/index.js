import React from 'react';
import './index.css';
import { Input } from "antd";
import PicturesWall from "../Login/Upload";
import { connect } from "react-redux";
import { LoginAction, SignOut, setDefault } from "../Actions/Login";
import { SignUpUserAction, SignUpSellerAction, setDefaultSignUp } from "../Actions/SignUp";
import AuthStateAction from "../Actions/AuthSate";


const { TextArea } = Input;


class SignUpForSeller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            companyName: "",
            yearOfEstab: "",
            liscenceNo: "",
            staffNo: "",
            vatNo: "",
            companyAddr: "",
            aboutCompany: "",
            location: "",
            file: {},
        }
    }

    onSignUpSeller = () => {
        console.log("hi")
        this.props.SignUpSellerAction(
            this.state.email,
            this.state.password,
            this.state.name,
            this.state.phone,
            this.state.companyName,
            this.state.yearOfEstab,
            this.state.liscenceNo,
            this.state.staffNo,
            this.state.vatNo,
            this.state.companyAddr,
            this.state.aboutCompany,
            this.state.location,
            this.state.file
        )
    }

    componentDidMount() {
        this.props.AuthStateAction()
        if (this.props.user !== null) {
            this.props.history.push(`/`)
        } else {
            console.log("no user")
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user !== null) {
            this.props.history.push(`/`)
        } else {
            console.log("no user")
        }
    }

    onName = e => {
        this.setState({ name: e.target.value });
    };

    onPhone = e => {
        this.setState({ phone: e.target.value });
    };

    onEmail = e => {
        this.setState({ email: e.target.value });
    };

    onPassword = e => {
        this.setState({ password: e.target.value });
    };

    onCompanyName = e => {
        this.setState({ companyName: e.target.value });
    }

    onYearOfEstab = e => {
        this.setState({ yearOfEstab: e.target.value });
    }

    onLisenceNo = e => {
        this.setState({ liscenceNo: e.target.value });
    }

    onStaffNo = e => {
        this.setState({ staffNo: e.target.value });
    }

    onVatNo = e => {
        this.setState({ vatNo: e.target.value });
    }

    onChangeLocation = (e) => {
        this.setState({ location: e.target.value })
    }

    onCompanyAddress = e => {
        this.setState({ companyAddr: e.target.value });
    }

    onAboutCompany = e => {
        this.setState({ aboutCompany: e.target.value });
    }

    onGetLogo = (e) => {
        console.log(e);
        this.setState({ file: e.originFileObj })
    }

    render() {
        return (
            <div className="signupSellerMainDiv">
                <h1>Seller Sign Up</h1>
                <div className="rowInSignupseller">
                    <div>Enter Your Name :</div>
                    <Input
                        placeholder="Name"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onName}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Your Phone No :</div>
                    <Input
                        placeholder="Phone"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onPhone}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Your Email :</div>
                    <Input
                        placeholder="Email"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onEmail}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Your Password :</div>
                    <Input
                        placeholder="Password"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onPassword}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Company Name :</div>
                    <Input
                        placeholder="Company Name"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onCompanyName}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Year Of Establishment :</div>
                    <Input
                        placeholder="Year Of Est."
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onYearOfEstab}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Commercial Liscence No :</div>
                    <Input
                        placeholder="Liscence Number"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onLisenceNo}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Number Of Staff :</div>
                    <Input
                        placeholder="Number Of Staff"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onStaffNo}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter VAT Number :</div>
                    <Input
                        placeholder="VAT Number"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onVatNo}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Your Location :</div>
                    <Input
                        placeholder="Location"
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onChangeLocation}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>Enter Company Address :</div>
                    <TextArea
                        placeholder="Company Address"
                        autosize={{ minRows: 3, maxRows: 6 }}
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onCompanyAddress}
                    />
                </div>
                <div className="rowInSignupseller">
                    <div>About The Company :</div>
                    <TextArea
                        placeholder="About..."
                        autosize={{ minRows: 3, maxRows: 6 }}
                        style={{ width: "50%", margin: "10px", borderRadius: 15 }}
                        onChange={this.onAboutCompany}
                    />
                </div>
                <PicturesWall value={this.onGetLogo}></PicturesWall>
                <div
                    className="common-button app-primary-dark"
                    style={{ width: "30%", margin: "auto", borderRadius: 15, marginTop: 10 }}
                    onClick={this.onSignUpSeller}
                >
                    SignUp
                </div>
            </div>
        )
    }
}

const mapActionToProps = {
    LoginAction: LoginAction,
    SignUpUserAction: SignUpUserAction,
    SignUpSellerAction: SignUpSellerAction,
    AuthStateAction: AuthStateAction,
    setDefault: setDefault,
    setDefaultSignUp: setDefaultSignUp
};

const mapStateToProps = state => (console.log(state), {
    authenticated: state.authenticated,
    signup: state.signup,
    err: state.err,
    signuperr: state.signuperr,
    user: state.user
});
export default connect(
    mapStateToProps,
    mapActionToProps
)(SignUpForSeller);