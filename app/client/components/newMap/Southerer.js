import React from 'react';
import { Link } from 'react-router';

export default class Southerer extends React.Component {

  render(){
    return(
      <div>
        Southerer of Start
        <div onClick={goNorth.bind(this)} >Go North //DEV: I give up</div>
        <div onClick={goSouth.bind(this)} >Go the opposite of north</div>
      </div>
    )
  }
}


function goNorth (){
  this.props.switchPage('souther', "Trust me, nothing back here")
  this.props.render()
}

function goSouth (){
  this.props.switchPage('evenMoreSouth', "Crap, I really thought it'd be done by now... ")
  this.props.render()
}
