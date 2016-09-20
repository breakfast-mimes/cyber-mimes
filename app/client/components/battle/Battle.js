import React from 'react';
import { render } from 'react-dom';

import HealthBar from './HealthBar';
import SpellEntry from './SpellEntry'
import BattleActionEntry from './BattleActionEntry'
import Log from './Log'

import messages from './messages'
import spells from './spells'
import battleActions from './battleActions'

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
      hero: {},
      enemy: {},
      enemyId: 0,
      inProgress: true
    }
  }

  render(){
    let enemy = this.props.enemy[this.state.enemyId];
    let hero = this.props.hero;

    if(this.props.game.enemyTurn) this.props.enemyAttack(this.props.enemy[this.state.enemyId]);

    return(
      <div className="battleScreen" onClick = {scroll}>

        <button type="button" onClick = {setEnemyId.bind(this,0)}>Click Me to fight a weak laZer enemy!</button>
        <button type="button" onClick = {setEnemyId.bind(this,1)}>Click Me to fight a normal laZer enemy!</button>
        <button type="button" onClick = {setEnemyId.bind(this,2)}>Click Me to fight a super laZer enemy</button>

        <HealthBar health={enemy.status.health}/>
        <Log log={this.props.game.log}/>
        <HealthBar health={hero.status.health}/>

        <div className="battleActions">
          {Object.keys(battleActions).map((k, i) => <BattleActionEntry {...this.props} action={k} id={this.state.enemyId} key={i}/>)}

          <div onClick={showMenu.bind(null,'items')}>
            Items
            <div id="items">
              Itemss
            </div>
          </div>

          <div onClick={showMenu.bind(null,'magics')}>
            MAGIC
            <div id="magics">
              MAGIC?!
              {Object.keys(spells).map((k, i) => <SpellEntry spell={k} loop={loop.bind(this)} key={i}/>)}
            </div>
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
  if (displayString === "block"){
    document.getElementById(menu).style.display = "none"
    menuArr[0] = false;
    menuArr[1] = 'none';
    return
  } else if (menuArr[0]){
    document.getElementById(menuArr[1]).style.display = "none"
  }
  document.getElementById(menu).style.display = "block"
  menuArr[0] = true;
  menuArr[1] = menu;

}

function loop(act){
  if(this.props.enemy[this.state.enemyId].status.health > 0) {

    updateLog.call(this,messages[act])

    if(act === 'cry') {
      this.props.cry()
      this.props.enemyMurder();
    }

    if(act === 'attack') {
      this.props.attack(this.props.hero, this.props.enemy[this.state.enemyId])
      this.props.enemyAttack(this.props.enemy[this.state.enemyId])
    }

    if(act === 'fireball') {
      this.props.fireball(this.props.hero, this.props.enemy[this.state.enemyId])
    }

    if(act === 'heal') {
      this.props.heal(15, this.props.hero)
    }

    setTimeout(() => {
      if (this.props.enemy[this.state.enemyId].status.health <= 0) {
        updateLog.call(this, messages["enemyDeath"])
      }

      if (this.props.hero.status.health <= 0) {
        updateLog.call(this, messages["heroDeath"])
        this.props.heal(100, this.props.hero)
      }
    }, 0)
  }

}

function setEnemyId(id) {
  updateLog.call(this,["your fightin a " + this.props.enemy[id].name])
  this.state.enemyId = id;
  this.props.render();
}

function updateLog(messageArr) {
  messageArr.forEach((message)=>this.state.log.push(message))
  this.props.render();
}
