import React, { Component } from 'react';
import {Switch, withRouter, Redirect, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import Login from './containers/Login/Login';
import asyncComponent from './hoc/asyncComponent';
import Dashboard from './components/Dashboard/Dashboard';
import Logout from './containers/Logout/Logout';


class App extends Component {
    render () {

        return (
            <Layout isLoggedIn={this.props.isAuthenticated}>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" exact component={Login} />
                    <Route path="/logout" exact component={Logout} />
                </Switch>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.login.token !== null
    };
}


export default withRouter(connect(mapStateToProps)(App));