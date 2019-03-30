import React, { Component } from 'react';
import DataPanel from './DataPanel';
import TablePanel from './TablePanel';
import { connect } from 'react-redux';
import  * as actionCreator from '../store/actions/actions';

class Mainbar extends Component {

    render() {
        return (
            <div className="main">
                <DataPanel />
                <TablePanel />
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
      data: state.data
    }
  }
  
  const MapDispatchToProps = (dispatch) => {
    return {
    }  
  }

export default connect(MapStateToProps,MapDispatchToProps)(Mainbar);