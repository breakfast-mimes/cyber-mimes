import React from 'react';
import { Link } from 'react-router';
import messages from './messages'

export default class goSouth extends React.Component {
  render(){
    return(
      <div onClick={() => this.props.goSouth()} > {messages.goSouth[this.props.startMap.locationY]}</div>
    )
  }
}
