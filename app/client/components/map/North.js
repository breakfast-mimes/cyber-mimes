import React from 'react';
import { Link } from 'react-router';
import South from './South';

export default class North extends React.Component {

  constructor(props) {
    super(props);
  }
  render(){

    let imgs = [
      "//placebacon.net/200/150",
      "//placebacon.net/300/300",
      "//placebacon.net/400/400",
      "//placebacon.net/800/800"
    ]
    console.log(this)
    return(
      <div>
        North

        <img src={imgs[1]} onClick={goSouth.bind(this)} />
      </div>
    )
  }
}

function goSouth (){

  // this.props.changeMap()
  console.log(South)
}