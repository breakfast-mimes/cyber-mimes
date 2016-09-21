import React from 'react';
import { Link } from 'react-router';

export default class goSouth extends React.Component {
  render(){
    let south = ['South', 'Souther', 'Souther-er', 'Even More South' , 'Southest']
    return(
      <div onClick={() => this.props.goSouth()} >Go {south[10 - this.props.map.locationY]}</div>
    )
  }
}
