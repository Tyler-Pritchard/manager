import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;