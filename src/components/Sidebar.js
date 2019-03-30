import React, { Component } from 'react';
import { connect } from 'react-redux';
import  * as actionCreator from '../store/actions/actions';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="top-sidebar">
                    <h3>Welcome</h3>
                    <p>DHL Worldwide <br />
                    Express</p>
                </div>
                <div className="bottom-sidebar">
                    <div className="sidebar-content">
                        {this.props.data.map(el=> <div key={el.id} className="sidebar-element">
                            <h4>{el.title}</h4>
                            <p>{el.value}</p>
                            <hr />
                            </div>)}
                        
                    </div>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
      data: state.rA.data
    }
  }
  
  const MapDispatchToProps = (dispatch) => {
    return {
    }  
  }

export default connect(MapStateToProps,MapDispatchToProps)(Sidebar);