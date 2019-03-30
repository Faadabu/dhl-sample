import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryGroup, VictoryStack } from "victory";
import { connect } from 'react-redux';
import  * as actionCreator from '../store/actions/actions';

class DataPanel extends Component {
    render() {
        return (
            <div className="data-panel">
                <h2>Shipping and Trip report</h2>
                <div>
                    <VictoryChart domainPadding={{ x: 20 }} width={700} height={350}>
                        <VictoryGroup offset={-23} style={{ data: { width: 20 } }}>
                        <VictoryStack  style={{ data: { fill: {color: '#fff'}}}}>
                            {[1].map((data, index) => {
                            return <VictoryBar key={index} data={this.props.sampleData}/>;
                            })}
                        </VictoryStack>
                        <VictoryStack colorScale={"blue"}>
                            {[1].map((data, index) => {
                            return <VictoryBar key={index} data={this.props.otherData}/>;
                            })}
                        </VictoryStack>
                        </VictoryGroup>
                    </VictoryChart>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
      sampleData: state.rB.sampleData,
      otherData: state.rC.otherData
    }
  }
  
  const MapDispatchToProps = (dispatch) => {
    return {
    }  
  }

export default connect(MapStateToProps,MapDispatchToProps)(DataPanel);
