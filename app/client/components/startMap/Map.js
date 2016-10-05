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
    let locationY = this.props.startMap.locationY;
    let locationX = this.props.startMap.locationX;
    if (locationY >= 0 && locationY < 5 && locationX < 1){
      toRender.push(<GoNorth {...this.props} />)
    }

    if (locationY === 4 && locationX < 1) {
      toRender.push(<GoEast {...this.props} />)
    }

    if (locationY >= 1 && locationX < 1){
      toRender.push(<GoSouth {...this.props}/>)
    }
    console.log(this.props)
    if (this.props.startMap.prevlocationY <= this.props.startMap.locationY) {
      this.state.message = messages.descriptionTwoDForward[this.props.startMap.locationY]
    } else {
      this.state.message = messages.descriptionTwoDBackward[this.props.startMap.locationY]
    }

    if (locationX >= 1) {
      this.state.message = "Whoa, we made it! And check out that font for the 'create character' button. Looks like we are making some progress. Click it and lets see if we have our 'Create Character' screen complete"
      toRender.push(<Link to='/'>Create Character</Link>)
    }

    return(
      <div className='startMap'>
        MAP <br/>
        {this.state.message}
        <br/> <br/>
        {toRender}
      </div>
    )
  }
}
