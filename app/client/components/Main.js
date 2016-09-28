import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import AuthBar from './authorization/AuthBar'

const Main = React.createClass({

  onRouteChange(loc) {
    if(loc.pathname !== '/' && !this.props.game.logged) {
      this.props.isUserAuth();
    }
  },

  render() {
    browserHistory.listen(this.onRouteChange)
    return (
      <div>
        <AuthBar changeLogin={this.props.changeLogin} logout={this.props.logout} game={this.props.game}/>
        <h1 className ='title'>
          <Link to='/map'>Cyber Mimes</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;