import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import datareducer from './store/reducers/datareducer';
import otherreducer from './store/reducers/otherdatareducer';
import sampledatareducer from './store/reducers/sampledatareducer';
import scrollreducer from './store/reducers/scrollreducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    rA: datareducer,
    rB: sampledatareducer,
    rC: otherreducer,
    rD: scrollreducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));


