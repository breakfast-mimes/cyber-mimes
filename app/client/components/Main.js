import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import AuthBar from './authorization/AuthBar'

const Main = React.createClass({

  onRouteChange(loc) {
    if(loc.pathname !== '/' && !this.props.game.logged) {
      this.props.isUserAuth();
    }
    if(loc.pathname == '/' && this.props.game.logged) {
      browserHistory.push('/map')
    }
  },

  componentWillUnmount() {
    window.localStorage.setItem('hero', null);
  },

  render() {
    browserHistory.listen(this.onRouteChange)
    return (
      <div>
        <AuthBar changeLogin={this.props.changeLogin} logout={this.props.logout} game={this.props.game}/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;