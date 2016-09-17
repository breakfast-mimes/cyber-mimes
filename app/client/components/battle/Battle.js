import React from 'react';
import { render } from 'react-dom';

import Game from './game';

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Game(this.props.hero, this.props.enemy)
    }
  }

  render(){
    // var logStyle = {height:"100px",width:"300px",overflow:"auto",border:"8px solid red",padding:"2%"}
    var itemsListStyle = {display:"none"}
    // var itemsStyle =
    return(
      <div>
        <progress id="enemyHealth" value={this.props.enemy[0].status.health} max="100">Enemy bar</progress>
        <div id="log" >
          {this.props.hero.log.map((line ,i)=> <p key={i}>{line}</p>)}
        </div>
        <progress id="heroHealth" value={this.props.hero.status.health} max="100"></progress>
        <div onClick = {attack.bind(this)}>
          Attack!
        </div>
        <div>
          Defend!
        </div>
        <div onClick={showItems}>
          Items
          <div id="items">
            Itemss
          </div>
        </div>

        <div onClick = {cry.bind(this)}>
          Cry
        </div>
        <div>
          MAGIC?!
        </div>
    </div>
    )
  }
}

function showItems() {
  var displayString = document.getElementById('items').style.display
  console.log("test", displayString)
  if (displayString === "block"){
    document.getElementById('items').style.display = "none"
  } else {
    document.getElementById('items').style.display = "block"
  }
}

function cry() {
  this.state.game.setHeroAction(this.props.cry);
  this.state.game.nextTurn();
}

function attack() {
  this.state.game.setHeroAction(this.props.attack.bind(null, 10, this.props.hero, this.props.enemy));
  this.state.game.nextTurn();
}