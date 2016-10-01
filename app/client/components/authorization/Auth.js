import React, { Component } from 'react';
import { Link } from 'react-router';

import LogIn from './LogIn'
import SignUp from './SignUp'

const Auth = React.createClass({

  render() {
    return (
      <div>
        {
          this.props.game.login ?
          <LogIn login={this.props.login} logSuccess={this.props.game.logSuccess} logReset={this.props.logReset}/> :
          <SignUp signup={this.props.signup} logSuccess={this.props.game.usernameSuccess} userReset={this.props.userReset}/>
        }
      </div>
    )
  }
});

export default Auth;
