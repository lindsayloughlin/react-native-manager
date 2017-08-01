import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { View , Text } from 'react-native';
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import Router from './Router';


const config = require('../config/firebase.json');

import reducers from './reducers';

class App extends Component {

    componentWillMount() {


        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;