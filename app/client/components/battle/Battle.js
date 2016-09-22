import React from 'react';
import { render } from 'react-dom';

import HealthBar from './HealthBar';
import ActionGroup from './ActionGroup'
import Log from './Log'

import { battleActions, spells } from './actionNameMap'

export default class Battle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alive: true
    }
  }

  componentWillUpdate() {
    if(this.props.game.enemyTurn && this.props.enemy[this.props.game.enemyId].status.health > 0 && this.state.alive)
      this.props.enemyAttack(this.props.hero, this.props.enemy, this.props.game.enemyId);
  }

  componentDidUpdate() {
    if(this.props.enemy[this.props.game.enemyId].status.health === 0) {
      this.props.enemyDeath(this.props.enemy, this.props.game.enemyId);
      this.props.changeEnemy(this.props.enemy, (this.props.game.enemyId + 1) % this.props.enemy.length);
    }
    if(this.props.hero.status.health === 0 && this.state.alive) {
      this.state.alive = false;
      this.props.heroDeath()
    }
  }

  render(){
    const { hero, game, changeEnemy, enemy} = this.props;
    const { enemyId } = game;
    return(
      <div className="battleScreen" onClick = {scroll}>

        <div>{"Fighting " + enemy[enemyId].name}</div>
        <HealthBar health={enemy[enemyId].status.health}/>

        <Log log={game.log}/>

        <div>{hero.name + " " + hero.level.exp}</div>
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