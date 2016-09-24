import React from 'react';
import { Link } from 'react-router';
import messages from './messages'

export default class goEast extends React.Component {
  render(){
    return(
      <div onClick={() => this.props.goEastStart()} >GO EAST!</div>
    )
  }
}
