import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyComponent from './MyComponent';
import './App.css';
import comp from './comp';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={comp} />
                <Route exact path="/test" component={MyComponent} />
            </Switch>
        </Router>
    );
}

export default App;
