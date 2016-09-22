import React from 'react';
import { Link } from 'react-router';
import GoSouth from './goSouth';
import GoNorth from './goNorth';
import GoEast from './goEast';
import messages from './messages'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message:"Welcome to our game! It isn't much yet (we're still coding it as you play:D ) but we hope you enjoy it so far",
    }
  }
  render(){
    let toRender = [];
    let locationY = this.props.map.locationY;
    let locationX = this.props.map.locationX;
    if (locationY >= 0 && locationY < 5 && locationX < 1){
      toRender.push(<GoNorth {...this.props} />)
    }

    if (locationY === 4 && locationX < 1) {
      toRender.push(<GoEast {...this.props} />)
    }

    if (locationY >= 1 && locationX < 1){
      toRender.push(<GoSouth {...this.props}/>)
    }
    console.log(this.props.map)
    if (this.props.map.prevlocationY <= this.props.map.locationY) {
      this.state.message = messages.descriptionTwoDForward[this.props.map.locationY]
    } else {
      this.state.message = messages.descriptionTwoDBackward[this.props.map.locationY]
    }

    if (locationX >= 1) {
      this.state.message = "Ya know what? this is kinda boring, how about you create a character instead?"
      toRender.push(<Link to='/'>Create Character</Link>)
    }

    return(
      <div>
        MAP <br/>
        {this.state.message}
        <br/> <br/>
        {toRender}
      </div>
    )
  }
}
