import React from 'react';
import { Link } from 'react-router';
import messages from './messages'

export default class goNorth extends React.Component {

  render(){
    return(
      <div onClick={() => this.props.goNorth()}>{messages.goNorth[10 - this.props.map.locationY]}</div>
    )
  }
}

function goNorth (){
  //edit messages
  this.props.switchPage('start', "You like it so far? we worked real hard on this...")
  this.props.render()
}