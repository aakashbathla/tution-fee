import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
class Logout extends Component {
    constructor(props){
        super(props);
    }
    
    componentWillMount() {
        this.props.onLogout()
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch( actions.logout() )
    };
};

export default withRouter(connect( null, mapDispatchToProps )( Logout ));