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
    var itemsListStyle = {display:"none"}
    return(
      <div onClick = {scroll}>
        <progress id="enemyHealth" value={this.props.enemy[0].status.health} max="100">Enemy bar</progress>
        <div id="outLog">
          <div id="log">
            {
              this.state.game.log.map((line ,i)=> <p key={i}>{line}</p>)
            }
          </div>
        </div>
        <progress id="heroHealth" value={this.props.hero.status.health} max="100"></progress>
        <div onClick = {attack.bind(this)}>
          Attack!
        </div>
        <div>
          Defend!
        </div>
        <div onClick={showMenu.bind(null,'items')}>
          Items
        </div>

        <div onClick = {cry.bind(this)}>
          Cry
        </div>

        <div onClick={showMenu.bind(null,'magics')}>
          MAGIC
        </div>
        <div id="items">
          Itemss
        </div>
        <div id="magics">
          MAGIC?!
          <div onClick={fireball.bind(this)} id="fireball">
            fireball
          </div>
        </div>
    </div>
    )
  }
}
function scroll(){
  setTimeout(() => {document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight} , 100)
}

var menuArr = [false,'none']
function showMenu(menu) {
  var displayString = document.getElementById(menu).style.display
  console.log("test", menuArr)
  if (displayString === "block"){
    document.getElementById(menu).style.display = "none"
    menuArr[0] = false;
    menuArr[1] = 'none';
  } else if (menuArr[0]){
    document.getElementById(menuArr[1]).style.display = "none"
    document.getElementById(menu).style.display = "block"
    menuArr[0] = true;
    menuArr[1] = menu;
  } else {
    document.getElementById(menu).style.display = "block"
    menuArr[0] = true;
    menuArr[1] = menu;
  }
}

function cry() {
  this.state.game.setHeroAction(this.props.cry);
  this.state.game.updateLog(["you cry and cower in the corner as you beg whatever god that exists to smite the demon creature","they murder you dead"])
  this.state.game.setEnemyAction(this.props.enemyMurder);
}

function attack() {
  this.state.game.updateLog(["you attack","the enemy attacks!"])
  this.state.game.setHeroAction(this.props.attack.bind(null, 10, this.props.hero, this.props.enemy));
  console.log(this.props.enemy, "ENEMY IN ATTACK")
  this.state.game.setEnemyAction(this.props.enemyAttack.bind(null,this.props.enemy[0],this.props.hero));
}

function fireball() {
  this.state.game.updateLog(["you throw a giant fireball","the enemy cowers!"])
  this.state.game.setHeroAction(this.props.fireball.bind(null,10, this.props.hero, this.props.enemy));
}