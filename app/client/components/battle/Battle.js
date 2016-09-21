import React from 'react';
import { render } from 'react-dom';

import HealthBar from './HealthBar';
import ActionGroup from './ActionGroup'
import Log from './Log'

import { battleActions, spells } from './actionNameMap'



export default class Battle extends React.Component {

  componentWillUpdate() {
    if(this.props.game.enemyTurn)
      this.props.enemyAttack(this.props.hero, this.props.enemy, this.props.game.enemyId);
  }

  render(){
    const { hero, game, changeEnemy, enemy} = this.props;
    const { enemyId } = game;
    const currentEnemy = enemy[game.enemyId];
    return(
      <div className="battleScreen" onClick = {scroll}>

        {this.props.enemy.map((k, i) =>
          <button type="button" key={i} onClick={changeEnemy.bind(this, enemy, i)}>{"Click Me to fight a " + enemy[i].name}</button>
        )}

        <HealthBar health={currentEnemy.status.health}/>
        <Log log={game.log}/>
        <HealthBar health={hero.status.health}/>
        <HealthBar health={hero.status.mana}/>

        <div className="actionsContainer">
          <ActionGroup {...this.props} actions={battleActions} name="Actions" id={enemyId}/>
          <ActionGroup {...this.props} actions={spells} name="Spells" id={enemyId}/>
          <ActionGroup {...this.props} actions={[]} name="Items" id={enemyId}/>
        </div>

    </div>
    )
  }
}

function scroll(){
  setTimeout(() => {document.getElementById('log').scrollTop = document.getElementById('log').scrollHeight} , 100)
}