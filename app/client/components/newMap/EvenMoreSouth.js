import React from 'react';
import { Link } from 'react-router';

export default class EvenMoreSouth extends React.Component {

  render(){
    return(
      <div>
        Even More South of Start
        <div onClick={goNorth.bind(this)} >Can't click this //DEV: wait, are you leaving this in but just changing the name??</div>
        <div onClick={goSouth.bind(this)} >Go the opposite of north</div>
      </div>
    )
  }
}


function goNorth (){
  this.props.switchPage('southerer', "I sincerely do apologize, I honestly thought you would listen to instructions and not click on the thing you were told you not to click")
  this.props.render()
}

function goSouth (){
  this.props.switchPage('southest', "HEY! THEY FINISHED IT! ")
  this.props.render()
}