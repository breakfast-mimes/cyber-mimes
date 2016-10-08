import React from 'react';
import { Link } from 'react-router';
import messages from './messages'

export default class goNorth extends React.Component {
  render(){
    return(
      <div className='pointer' onClick={() => this.props.goNorthStart()}>Go {messages.goNorth[this.props.startMap.locationY]}</div>
    )
  }
}

//style={{cursor:pointer}} 