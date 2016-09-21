import React from 'react';
import { Link } from 'react-router';

export default class Souther extends React.Component {

  render(){
    return(
      <div>
        Souther of Start
        <div onClick={goNorth.bind(this)} >Go North //DEV: STOP LETTING THEM GO BACK</div>
        <div onClick={goSouth.bind(this)} >Go Souther-er</div>
      </div>
    )
  }
}


function goNorth (){
  this.props.switchPage('south', "Our developers made a mistake, there's really nothing back here...")
  this.props.render()
}

function goSouth (){
  this.props.switchPage('southerer', "Ok, you probably want to do something besides go south right? well just you wait, we got somethign EXCITING coming up")
  this.props.render()
}
