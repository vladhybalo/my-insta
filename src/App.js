import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from './store';

import PhotoPage from './pages/PhotoPage/PhotoPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <div className="App">
            {/* TODO  ask if is any diff what should be the first - Router or Provider*/}
            <Provider store={store}>
                <Router>

                    <Route path='/' exact component={HomePage}/>
                    <Route path={'/img/:id'} component={PhotoPage}/>

                </Router>
            </Provider>
        </div>
    );
}

export default App;

