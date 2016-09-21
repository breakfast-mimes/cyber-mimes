import React from 'react';
import { Link } from 'react-router';

export default class South extends React.Component {

  render(){

    return(
      <div>
        South of Start
        <div onClick={goNorth.bind(this)} >Go North //DEV: why are we letting them go back to start? There's lit nothing there...</div>
        <div onClick={goSouth.bind(this)} >Go Souther</div>
      </div>
    )
  }
}


function goNorth (){
  this.props.switchPage('start', "Wait why are you back here? if you would kindly go back south, that'd be much appreciated")
  this.props.render()
}

function goSouth (){
  this.props.switchPage('souther', "You like it so far? we worked real hard on this...")
  this.props.render()
}
