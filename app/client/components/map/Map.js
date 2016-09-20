import React from 'react';
import { Link } from 'react-router';
import South from './South';
import North from './North';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap:<North {...this.props}/>
    }
  }
  render(){

    return(
      <div>
        {this.state.currentMap}
      </div>
    )
  }
}

