import React, { Component } from 'react';
import { Link } from 'react-router';

const LogIn = React.createClass({
  getInitialState() {
    return {
      name: '',
      pass: ''
    }
  },

  updateName(event) {
    this.setState({name: event.target.value});
  },

  updatePass(event) {
    this.setState({pass: event.target.value});
  },

  render() {
    return (
      <div>
        <div className='stats'>
          <div className='statTitle'>USER LOGIN</div>
          <input type="text" placeholder="username" onChange={this.updateName} className="statTitle"/>
          <input type="password" placeholder="password" onChange={this.updatePass} className="statTitle"/>
        </div>
        <button type="submit" onClick={this.props.login.bind(null, this.state.name, this.state.pass)}>submit</button>
      </div>
    )
  }
});

export default LogIn;
