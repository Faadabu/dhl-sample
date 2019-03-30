import React, { Component } from 'react';
import logo from "../logo.svg.png";
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions';

class Header extends Component {
 

    render() {
        return (
            <div>
                	<header className="header">
                    <h1 className="logo">
                    {this.props.scrolling? <img src={logo}  alt="logo" /> : <img src={logo} className="scroll"  alt="logo" /> }
                    </h1>
                    <ul className="main-nav">
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Request</a></li>
                        <li><a href="#">Trips</a></li>
                        <li><a href="#">Routes</a></li>
                        <li><a href="#">Battlefield</a></li>
                        <li><a href="#">Wallet</a></li>
                        <li><a href="#">Notification | 234</a></li>
                        <li><a href="#" className="nav">Settings
                            <span className="sub-nav">
                                <span>Manage Assets</span>
                                <span>Manage Drivers</span>
                            </span>
                        </a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </header> 
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
      scrolling: state.rD.scrolling
    }
  }
  
  const MapDispatchToProps = (dispatch) => {
    return {
        onScr: () => dispatch(actionCreator.onScr())
    }  
  }
  
  export default connect(MapStateToProps,MapDispatchToProps)(Header);