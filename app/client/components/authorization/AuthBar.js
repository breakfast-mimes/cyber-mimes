import React from 'react';
import { Link } from 'react-router';

const AuthBar = React.createClass({
  render() {
    return (
      <div>
        {
          !this.props.game.logged ?
          <div>
            <Link to="/" onClick={this.props.changeLogin.bind(null, true)}>Login </Link>
            <Link to="/" onClick={this.props.changeLogin.bind(null, false)}>Sign Up</Link>
          </div> :
          <div onClick={this.props.logout}>Logout</div>
        }
      </div>
    )
  }
});

export default AuthBar;