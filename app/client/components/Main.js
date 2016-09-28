import React from 'react';
import { Link } from 'react-router';

import AuthBar from './authorization/AuthBar'

const Main = React.createClass({
  render() {
    return (
      <div>
        <AuthBar changeLogin={this.props.changeLogin} logout={this.props.logout}/>
        <h1 className ='title'>
          <Link to='#'>Cyber Mimes</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;