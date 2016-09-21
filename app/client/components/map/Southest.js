import React from 'react';
import { Link } from 'react-router';

export default class Southest extends React.Component {

  render(){
    return(
      <div>
        Southest
        <div onClick={goNorth.bind(this)} >IF CLICKED, CONSEQUENCES WILL OCCUR //DEV: this is lazy. fix it plz</div>
        <div onClick={goEast.bind(this)} >Go EAST (REALLY FUN)</div>
        <div onClick={goSouth.bind(this)} >Go south //(real comment, not game comment) stylize to be small</div>
      </div>
    )
  }
}


function goNorth (){
  this.props.switchPage('evenMoreSouth', "You don't know what you've just done, do you?")//make this hinder them in some way, later in the game
  this.props.render()
}

function goEast (){
  this.props.switchPage('east', "BAM, that's what I call O-P-T-I-O-N-S")
  this.props.render()
}

function goSouth (){
  this.props.switchPage('southester', "We really didn't expect you to want to go further south, but we also just took out the north button... so i guess your stuck here")
  this.props.render()
}