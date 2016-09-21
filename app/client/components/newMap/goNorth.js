import React from 'react';
import { Link } from 'react-router';

export default class goNorth extends React.Component {

  render(){
    let dev = [""]
    let devComments = ["Go North//DEV: why are we letting them go back to start? There's lit nothing there...",
                "Go North //DEV: STOP LETTING THEM GO BACK",
                "Go North //DEV: I give up",
                "Can't click this //DEV: wait, are you leaving this in but just changing the name??"
              ]

    return(
      <div onClick={() => this.props.goNorth()}>{dev[0] + devComments[10 - this.props.map.locationY]}</div>
    )
  }
}

function goNorth (){
  //edit messages
  this.props.switchPage('start', "You like it so far? we worked real hard on this...")
  this.props.render()
}