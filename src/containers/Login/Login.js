import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import globalClasses from '../../index.css';
import classes from './Login.css';
import Dashboard from '../../components/Dashboard/Dashboard';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

class Login extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                iconClass: 'fa fa-user-circle'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                iconClass: 'fa fa-eye'
            }
        },
        formIsValid: false
    }
    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = updateObject( this.state.controls, {
            [controlName]: updateObject( this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            } )
        } );
        let formIsValid = true;
        for(let controlName in updatedControls){
            formIsValid = updatedControls[controlName].valid && formIsValid;
        }
        this.setState( { controls: updatedControls, formIsValid: formIsValid } );
    }
    submitHandler = ( event ) => {
        event.preventDefault();
        console.log('aakash ')
        this.props.onLogin( this.state.controls.email.value, this.state.controls.password.value);       
    }
    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )}
                iconClass={formElement.config.iconClass} />
        ) );

        let errorMessage = null;

        if ( this.props.error ) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <div className={classes.Bodybackground}>
                <div className={classes.Bodycontentcenter}>
                    <h1>Welcome to Bathla Tution Academy</h1>
                    <div className={classes.Error}>{errorMessage}</div>
                    <div>
                        <div></div>
                        <div>
                            <form  onSubmit={this.submitHandler}> 
                                {form}
                                <div className={globalClasses.textCenter}>
                                     <Button disabled={!this.state.formIsValid} btnType="btn btn-info">Login</Button>      
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        // loading: state.auth.loading,
        error: state.login.error,
        isAuthenticated: state.login.token !== null,
        // buildingBurger: state.burgerBuilder.building,
        // authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: ( email, password, isSignup ) => dispatch( actions.login( email, password, isSignup ) )
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( Login ));
