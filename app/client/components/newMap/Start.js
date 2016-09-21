import React from 'react';
import { Link } from 'react-router';
import South from './South';


export default class Start extends React.Component {

  render(){
    return(
      <div>
        Start!
        <div onClick={goSouth.bind(this)} >Go South</div>
      </div>
    )
  }
}


function goSouth (){
  console.log(this)
  this.props.switchPage('south', 'Woo! you made it to the next page. we totally had that finished before you started...')
  this.props.render()
}
