import React from 'react';
import { render } from 'react-dom';

import HealthBar from './HealthBar';
import ActionEntry from './ActionEntry'
import Log from './Log'

import { battleActions, spells } from './actionNameMap'



export default class Battle extends React.Component {

  componentWillUpdate() {
    if(this.props.game.enemyTurn)
      this.props.enemyAttack(this.props.enemy[this.props.game.enemyId]);
  }

  render(){
    const { hero, game } = this.props;
    const { enemyId } = game;
    const enemy = this.props.enemy[game.enemyId];
    return(
      <div className="battleScreen" onClick = {scroll}>

        <button type="button" onClick = {this.props.changeEnemy.bind(this,0)}>Click Me to fight a weak laZer enemy!</button>
        <button type="button" onClick = {this.props.changeEnemy.bind(this,1)}>Click Me to fight a normal laZer enemy!</button>
        <button type="button" onClick = {this.props.changeEnemy.bind(this,2)}>Click Me to fight a super laZer enemy</button>

        <HealthBar health={enemy.status.health}/>
        <Log log={game.log}/>
        <HealthBar health={hero.status.health}/>

        <div className="battleActions">
          {Object.keys(battleActions).map((k, i) => <ActionEntry {...this.props} action={k} id={enemyId} key={i}/>)}

          <div onClick={showMenu.bind(null,'items')}>
            Items
            <div id="items">
              Items
            </div>
          </div>

          <div onClick={showMenu.bind(null,'magics')}>
            MAGIC
            <div id="magics">
              MAGIC?!
              {Object.keys(spells).map((k, i) => <ActionEntry {...this.props} action={k} id={enemyId} key={i}/>)}
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