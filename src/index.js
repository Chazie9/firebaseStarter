import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import Login from './screens/Login';


const customHistory = createBrowserHistory();

const Root = () => {
    return (
        <Router history={customHistory}>
            <Switch>
                <Route path="/login" component={Login} />
                {/* <Route path="/show2" component={Home2} />
                <Route path="/about" component={About} />
                <Route path="/myLists" component={MyLists} />
                <Route path="/noImage/:id" component={SingleListNoImage} />
                <Route path="/singleList/:id" component={SingleList} />
                <Route path="/app/home" component={Home2} /> */}
                <Redirect from="/" to="/login" />
            </Switch>
        </Router> 
    )
}
ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
      
