import React from 'react';
import { render } from 'react-dom';

export default class Battle extends React.Component {

  render(){

    var style = {height:"100px",width:"140px",overflow:"auto",border:"8px solid red",padding:"2%"}
    return(
      <div>
        <progress id="enemyHealth" value={this.props.hero.status.health} max="100">Enemy bar</progress>
        <div style= {style}>
          This scroll box has had a border added to it. You can add borders to anything in HTML - including scroll boxes.
        </div>
        <progress id="heroHealth" value="100" max="100"></progress>
        <div onClick = {this.props.attackEnemy.bind(null,10)}>
          Attack!
        </div>
        <div>
          Defend!
        </div>
        <div>
          Items
        </div>
        <div>
          Cry
        </div>
        <div>
          MAGIC?!
        </div>
    </div>
    )
  }
}
