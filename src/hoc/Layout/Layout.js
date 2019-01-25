import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    render () {
        let render = this.props.children;
        if(this.props.isLoggedIn){
            render = (
                <div>
                    <Toolbar
                        isAuth={this.props.isAuthenticated}
                        children = {this.props.children}
                    />
                    {/* <SideDrawer
                        isAuth={this.props.isAuthenticated}
                    /> */}
                    {/* <main className={classes.Content}>
                        {this.props.children}
                    </main> */}
                </div>
            )
        }
        return (
            <div>
                {render}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.login.token !== null
    };
};

export default connect( mapStateToProps )( Layout );