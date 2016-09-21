import React from 'react';
import { Link } from 'react-router';
import messages from './messages'

export default class goSouth extends React.Component {
  render(){
    // let south = ['South', 'Souther', 'Souther-er', 'Even More South' , 'Southest']
    return(
      <div onClick={() => this.props.goSouth()} >Go {messages.goSouth[10 - this.props.map.locationY]}</div>
    )
  }
}
