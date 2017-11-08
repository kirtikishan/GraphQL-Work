import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { AnimatedSwitch } from 'react-router-transition';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Details from './components/Details';
import './style/all.less';

import App from './components/App';
const client = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomePage}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/make/model/:modelId" component={Details}/>
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root/>,
    document.querySelector('#root')
);
