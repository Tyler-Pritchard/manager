import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore,  applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyAn5dhay7lToYBFR0GmdpMai2OxbS3QAas",
            authDomain: "manager-d83ee.firebaseapp.com",
            databaseURL: "https://manager-d83ee.firebaseio.com",
            projectId: "manager-d83ee",
            storageBucket: "",
            messagingSenderId: "621697879817",
            appId: "1:621697879817:web:7298e881a73203aa"
        };
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