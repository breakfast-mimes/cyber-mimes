import React from 'react';
import { Link } from 'react-router';
import messages from './messages'

export default class goSouth extends React.Component {
  render(){
    return(
      <div onClick={() => this.props.goEast()} >GO EAST!</div>
    )
  }
}
