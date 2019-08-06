import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Provider} from 'react-redux';
import store from './store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HomePage/>
            </Provider>
        </div>
    );
}

export default App;

