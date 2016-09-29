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
          <LogIn login={this.props.login}/> :
          <SignUp signup={this.props.signup}/>
        }
      </div>
    )
  }
});

export default Auth;
