import React from 'react';
import { Link } from 'react-router';
import South from './South';
import North from './North';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap:'north'
    }

  }

  switchPage(page) {
    console.log(this)
    this.state.currentMap = page;
  }

  render(){
    let toRender;
    if (this.state.currentMap === 'north'){
      toRender = <North {...this.props} switchPage={this.switchPage.bind(this)}/>
    } else if (this.state.currentMap === 'south'){
      toRender = <South {...this.props} switchPage={this.switchPage.bind(this)}/>
    }

    let imgs = [
      "//placebacon.net/200/150",
      "//placebacon.net/300/300",
      "//placebacon.net/400/400",
      "//placebacon.net/800/800"
    ]
    return(
      <div>
        MAP
        {toRender}
      </div>
    )
  }
}

