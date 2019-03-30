import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/actions';

class App extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.props.onScr, true);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.props.onScr, true);
}



  render() {
    return (
      <div className="App">
        <Header />
        <MainBody />
        <Footer />
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

export default connect(MapStateToProps,MapDispatchToProps)(App);
