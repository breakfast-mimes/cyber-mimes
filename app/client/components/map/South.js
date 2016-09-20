import React from 'react';
import { Link } from 'react-router';

export default class South extends React.Component {

  render(){

    let imgs = [
      "//placebacon.net/200/150",
      "//placebacon.net/300/300",
      "//placebacon.net/400/400",
      "//placebacon.net/800/800"
    ]
    return(
      <div>
        Southz
        <img src={imgs[3]} />
      </div>
    )
  }
}

