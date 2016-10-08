import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import HealthBar from './HealthBar';
import ActionGroup from './ActionGroup'
import Log from './Log'
import HeroStatus from './HeroStatus'
import Inventory from './Inventory'
import HeroDeathModal from './HeroDeathModal'

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      called: false
    }

  }
  setShowModalTrue() {
    if (!this.state.called) {
      this.setState({called: true});
      this.setState({showModal: true});
    }
  };

  //this calls the enemy to attack each time before component renders. Creating an enemy attack after every battle action
  componentWillUpdate() {
    if(this.props.game.enemyTurn && this.props.enemy[this.props.game.enemyId].status.health > 0)
      this.props.enemyAttack(this.props.hero, this.props.enemy, this.props.game.enemyId);
  }
  //if the enemy health is 0, this changes to a new enemy and increases your game level
  componentDidUpdate() {
    if(this.props.enemy[this.props.game.enemyId].status.health === 0) {
      this.props.enemyDeath(this.props.enemy, this.props.game.enemyId);
      this.props.changeEnemy(this.props.enemy, (this.props.game.enemyId + 1) % this.props.enemy.length);
      if(this.props.hero.level.level * this.props.hero.level.level * 500 >= this.props.hero.level.exp){
        if (this.props.enemy[this.props.game.enemyId].mapSend){
          this.props.mapSend(this.props.enemy[this.props.game.enemyId].mapSend)
        }
        browserHistory.push('/levelup');
      } else {
        browserHistory.push('/map');
      }
    }
    if(this.props.hero.status.health === 0) {
      this.setShowModalTrue();
    }
  }

  render(){
    let closeModal = () => {this.setState({showModal: false}); this.props.heroDeath()};
    const { hero, game, changeEnemy, enemy, battle} = this.props;
    const { enemyId } = game;
    let healthStyle, logStyle, actionsStyle, spellsStyle,itemsStyle,inventoryStyle
    healthStyle=actionsStyle=spellsStyle=itemsStyle=inventoryStyle={display:'none'}
    // if (hero.battleFeatures.log) {
      logStyle = {};
    // }
    if (hero.battleFeatures.health) {
      healthStyle = {};
    }
    if (hero.battleFeatures.actions) {
      actionsStyle = {};
    }
    if (hero.battleFeatures.spells) {
      spellsStyle = {};
    }
    if (hero.battleFeatures.inventory) {
      inventoryStyle = {};
    }
    return(
      <div className="battleScreen">
        <div className='fightLog2'>
        <Link className='mapLink' to='/map'>[Map]</Link>
      <div className='fightLog'>
        <div className='fightingEnemy'>{"Fighting " + enemy[enemyId].name}</div>
        <HealthBar style={healthStyle} health={enemy[enemyId].status.health} max={enemy[enemyId].status.maxHealth} color="darkred"/>

        <Log style={logStyle} log={game.log}/>

        <HeroStatus style={healthStyle} hero={hero}/>
      </div>


        <div className="actionsContainer">
          <ActionGroup {...this.props} style={actionsStyle} actions={hero.battleActions} name="Actions" id={enemyId}/>
          <ActionGroup {...this.props} style={spellsStyle} actions={hero.spells} name="Spells" id={enemyId}/>
          <ActionGroup {...this.props} style={itemsStyle} actions={hero.items} name="Items" id={enemyId}/>
          <Inventory {...this.props} style={inventoryStyle} />
        </div>
      </div>

        <div className='instructions'> <span className='battleInstructions'>Battle Instructions</span>
          <p className='intstructionText'>
          As you collect features they will show up in this battle screen under the fight log. The following is instructions for these features.
          <br/>
          <span className='instructionTitles'>Actions</span>
          <br/>
          Select the different methods under 'Action' to attack your enemy and defend his/her attack. 
          <br/>
            <span className='instructionTitles'>Spells</span>
          <br/>
            Select the different methods under 'Spells' to fight your enemy by casting spells.
            <br/>
            <span className='instructionTitles'>Inventory</span>
            <br/>
            Select items from your inventory list. Once a weapon is equipped, you will see an (e), which indicates it can be used.
            <br/>
            <span className='instructionTitles'>Fight Log</span>
            <br/>
            After you launch an attack the fight log will indicate how much damage you have inflicted. Be aware, the enemy will attack you right after your attack.
            Defeat an enemy to level up, and remember to check your stats in the Leaderboard!
            </p>
            
           <span className='instructionTitles'>HealthBar</span>
            <br/>
            The bottom health bar is your health, and the top health bar is your enemies health.
        </div>
        <HeroDeathModal show={this.state.showModal} onHide={closeModal}/>
    </div>
    )
  }
}

