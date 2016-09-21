import React from 'react';
import { Link } from 'react-router';
import South from './South';
import Start from './Start';
import Souther from './Souther';
import Southerer from './Southerer';
import EvenMoreSouth from './EvenMoreSouth';
import Southest from './Southest';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap:'start',
      message:"Alex:Welcome to our game! It isn't much yet (we're still coding it as you play:D ) but we hope you enjoy it so far"
    }

  }

  switchPage(page, message) {

    this.state.currentMap = page;
    this.state.message = message
  }

  render(){
    let toRender;
    if (this.state.currentMap === 'start'){
      toRender = <Start {...this.props} switchPage={this.switchPage.bind(this)}/>
    } else if (this.state.currentMap === 'south'){
      toRender = <South {...this.props} switchPage={this.switchPage.bind(this)}/>
    } else if (this.state.currentMap === 'souther'){
      toRender = <Souther {...this.props} switchPage={this.switchPage.bind(this)}/>
    } else if (this.state.currentMap === 'southerer'){
      toRender = <Southerer {...this.props} switchPage={this.switchPage.bind(this)}/>
    } else if (this.state.currentMap === 'evenMoreSouth'){
      toRender = <EvenMoreSouth {...this.props} switchPage={this.switchPage.bind(this)}/>
    } else if (this.state.currentMap === 'southest'){
      toRender = <Southest {...this.props} switchPage={this.switchPage.bind(this)}/>
    }

    let imgs = [
      "//placebacon.net/200/150",
      "//placebacon.net/300/300",
      "//placebacon.net/400/400",
      "//placebacon.net/800/800"
    ]
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

