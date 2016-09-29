import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import HealthBar from './HealthBar';
import ActionGroup from './ActionGroup'
import Log from './Log'
import HeroStatus from './HeroStatus'
import Inventory from './Inventory'

export default class Battle extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillUpdate() {
    if(this.props.game.enemyTurn && this.props.enemy[this.props.game.enemyId].status.health > 0)
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
    if(this.props.hero.status.health === 0) {
      this.props.heroDeath();
    }
  }

  render(){
    const { hero, game, changeEnemy, enemy, battle} = this.props;
    const { enemyId } = game;
    let healthStyle, logStyle, actionsStyle, spellsStyle,itemsStyle,inventoryStyle
    healthStyle=logStyle=actionsStyle=spellsStyle=itemsStyle=inventoryStyle={display:'none'}
    if (battle.log) {
      logStyle = {};
    }
    if (battle.healthBar) {
      healthStyle = {};
    }
    if (battle.actions) {
      actionsStyle = {};
    }
    if (battle.spells) {
      spellsStyle = {};
    }
    if (battle.items) {
      itemsStyle = {};
    }
    if (battle.inventory) {
      inventoryStyle = {};
    }
    return(
      <div className="battleScreen">
        <Link to='/map'>Map</Link>

        <div>{"Fighting " + enemy[enemyId].name}</div>
        <HealthBar style={healthStyle} health={enemy[enemyId].status.health} max={enemy[enemyId].status.maxHealth} color="darkred"/>

        <Log style={logStyle} log={game.log}/>

        <HeroStatus style={healthStyle} hero={hero}/>

        <div className="actionsContainer">
          <ActionGroup {...this.props} style={actionsStyle} actions={hero.battleActions} name="Actions" id={enemyId}/>
          <ActionGroup {...this.props} style={spellsStyle} actions={hero.spells} name="Spells" id={enemyId}/>
          <ActionGroup {...this.props} style={itemsStyle} actions={hero.items} name="Items" id={enemyId}/>
          <Inventory {...this.props} style={inventoryStyle} />
        </div>

    </div>
    )
  }
}
