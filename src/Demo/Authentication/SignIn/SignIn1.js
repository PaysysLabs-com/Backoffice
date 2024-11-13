import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { DEMO } from "../../../store/constant";
import config from "../../../config";
import logo from '../../../assets/images/mojaloop-logo.png';
import * as actionTypes from "../../../store/actions";

class SignUp1 extends React.Component {

    constructor(props) {
        super(props);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.state = {
            username: '',
            password: '',
            displayUserNameErr: 'none',
            displayPasswordErr: 'none',
        };
    }

    componentDidMount(){
        this.props.onLogoutDispatch();
    }
    handleUserNameChange(event) {
        if (event.target.value.match('^[a-zA-Z]*$')){
            this.setState({ username: event.target.value });
            this.setState({ displayUserNameErr: 'none' });
            this.setState({ displayPasswordErr: 'none' });
        }
        else {
            this.setState({ displayUserNameErr: '' });
            this.setState({ displayPasswordErr: 'none' });
        }
    }

    handlePasswordChange(event) {
        if (event.target.value.match('^[a-zA-Z0-9]*$')){
            this.setState({ password: event.target.value });
            this.setState({ displayUserNameErr: 'none' });
            this.setState({ displayPasswordErr: 'none' });
        }
        else {
            this.setState({ displayUserNameErr: 'none' });
            this.setState({ displayPasswordErr: '' });
        }
    }

    onLogin() {
        if (this.state.username !== config.username) {
            this.setState({ displayUserNameErr: '' });
            this.setState({ displayPasswordErr: 'none' });
        } else if (this.state.password !== config.password) {
            this.setState({ displayUserNameErr: 'none' });
            this.setState({ displayPasswordErr: '' });
        } else {
            this.props.history.push({
                pathname: DEMO.TRAN,
            });
            this.props.onLoginDispatch();
        }
    }

    render() {
        return (
            <Aux>
                <Breadcrumb />
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon" />
                                </div>
                                <img src={logo} alt="no logo" style={{ width: '50%' }} />
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input type="username" className="form-control" placeholder="username" maxLength={10} value={this.state.username} onChange={this.handleUserNameChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <span style={{ color: '#D8000C', display: this.state.displayUserNameErr }}>Invalid Username</span>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password" maxLength={10} value={this.state.password} onChange={this.handlePasswordChange} />
                                </div>
                                <div className="input-group mb-4">
                                    <span style={{ color: '#D8000C', display: this.state.displayPasswordErr }}>Invalid Password</span>
                                </div>

                                {/* <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div> */}
                                <button className="btn btn-primary shadow-2 mb-4" onClick={this.onLogin}>Login</button>
                                {/* <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p> */}
                                {/* <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginDispatch: () => dispatch({ type: actionTypes.LOGIN }),
        onLogoutDispatch: () => dispatch({ type: actionTypes.LOGOUT }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp1);