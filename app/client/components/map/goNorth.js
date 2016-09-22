import React from 'react';
import { Link } from 'react-router';
import messages from './messages'

export default class goNorth extends React.Component {
  render(){
    return(
      <div onClick={() => this.props.goNorth()}>Go {messages.goNorth[this.props.map.locationY]}</div>
    )
  }
}
