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
      currentMap:'Start',
      message:"Alex:Welcome to our game! It isn't much yet (we're still coding it as you play:D ) but we hope you enjoy it so far",

    }

  }

  switchPage(currentMap, message) {
    // if (direction === 'south') {
    //   break;
    // }
    this.state.currentMap = currentMap;
    this.state.message = message
  }

  render(){
    let toRender = [];

    if (this.props.map.locationY <= 10){
      toRender.push(<GoSouth {...this.props} switchPage={this.switchPage.bind(this)}/>)
    }
    if (this.props.map.locationY <= 9){
      toRender.unshift(<GoNorth {...this.props} switchPage={this.switchPage.bind(this)}/>)
    }

    if (this.props.map.locationY <= 6) {
      toRender.push(<GoEast {...this.props} switchPage={this.switchPage.bind(this)}/>)
    }
    console.log(toRender)
    if (this.props.map.prevlocationY >= this.props.map.locationY) {
      this.state.message = messages.descriptionForward[10 - this.props.map.locationY]
    } else {
      this.state.message = messages.descriptionBackward[10 - this.props.map.locationY]
    }

    return(
      <div>
        MAP <br/>
        {this.state.message}
        <br/> <br/>
        {this.state.currentMap}
        {toRender}
      </div>
    )
  }
}

