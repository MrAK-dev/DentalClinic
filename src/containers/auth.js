import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { auth, register } from '../actions/auth';

import {SignUpForm} from '../components/auth/signUp';
import {SignInForm} from '../components/auth/signIn';
import Loader from '../components/hooks/loader';

class Auth extends Component {
  state = { auth: true };

  toggleAuth = () => this.setState(prevState => ({ auth: !prevState.auth}));

  render() {
    const { auth } = this.state;
    const { user } = this.props

    
    if(user) 
    {if(Object.keys(user).length !== 0 && !user.role && !user.doctor) {
      return <Redirect to="/user" />
      }

      if(Object.keys(user).length !== 0 && user.role && !user.doctor) {
        return <Redirect to="/admin" />
      }
      
      if(Object.keys(user).length !== 0 && user.doctor && !user.role) {
        return <Redirect to="/reviews" />
      }
    }

    return (
      <div className="main">
        <div className="auth-wrapper">
        <Loader flag={this.props.isFetching}>
            <div className="auth">
              <div className="auth__content">
                { auth ? (
                    // <Loader flag={this.props.isFetching}>
                      <SignInForm error={this.props.errorFromAuth} submitHandler={this.props.auth} />
                    // {/* </Loader> */}
                ) : (
                    // <Loader flag={this.props.isFetching}>
                      <SignUpForm 
                        error={this.props.errorFromAuth}
                        submitHandler={this.props.register}
                        successRegister={this.props.successRegister}
                      />
                    // {/* </Loader> */}
                )}

                <div className="auth__additional-content">
                  {auth ? (
                    <p className="auth__text">
                    У вас нет акаунта ? {" "}
                      <span className="auth__toggle-span" onClick={this.toggleAuth}>
                        Зарегистрироваться
                      </span>
                    </p>
                  ) : (
                    <p className="auth__text">
                      У меня есть акаунт{" "}
                      <span className="auth__toggle-span" onClick={this.toggleAuth}>
                       Войти
                      </span>
                    </p>
                  )}
                </div>
            </div>
          </div>        
          </Loader>
        </div>
     </div>

    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isFetching: state.auth.isFetching,
  errorFromAuth: state.auth.error,
  successRegister: state.auth.successRegister
})

export default connect(
  mapStateToProps,
  { auth,register }
)(Auth);
