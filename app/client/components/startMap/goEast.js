import React from 'react';
import { Link } from 'react-router';
import messages from './messages'

export default class goEast extends React.Component {
  render(){
    return(
      <div onClick={() => this.props.goEastStart()} >I'm praying this works..our game depends on this link working...
      [GO EAST!]</div>
    )
  }
}

//style={{cursor:pointer}}