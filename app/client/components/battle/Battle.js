import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

import HealthBar from './HealthBar';
import ActionGroup from './ActionGroup'
import Log from './Log'
import HeroStatus from './HeroStatus'
import InventoryEntry from './InventoryEntry'

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
      if(this.props.hero.level.level * this.props.hero.level.level * 500 >= this.props.hero.level.exp){
        browserHistory.push('/levelup');
      } else {
        browserHistory.push('/map');
      }
    }
    if(this.props.hero.status.health === 0 && this.state.alive) {
      this.state.alive = false;
      this.props.heroDeath();
    }
  }

  render(){
    const { hero, game, changeEnemy, enemy} = this.props;
    const { enemyId } = game;
    return(
      <div className="battleScreen">

        <div>{"Fighting " + enemy[enemyId].name}</div>
        <HealthBar health={enemy[enemyId].status.health} max={enemy[enemyId].status.maxHealth} color="darkred"/>

        <Log log={game.log}/>

        <HeroStatus hero={hero}/>

        <div className="actionsContainer">
          <ActionGroup {...this.props} actions={hero.battleActions} name="Actions" id={enemyId}/>
          <ActionGroup {...this.props} actions={hero.spells} name="Spells" id={enemyId}/>
          <ActionGroup {...this.props} actions={hero.items} name="Items" id={enemyId}/>
          <div className="inventory">
            <span className="actionGroupHeader">Inventory</span>
            {Object.keys(hero.inventory).map((item, i) =>
              <InventoryEntry equip={this.props.equip} dropItem={this.props.dropItem} equipment={hero.inventory[item]} key={i} i={i}/>)}
          </div>
        </div>

    </div>
    )
  }
}
