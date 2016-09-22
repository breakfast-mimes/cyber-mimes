import React from 'react';
import HealthBar from './HealthBar'

const HeroStatus = React.createClass({
  render() {
    const {hero} = this.props
    return (
      <div className="heroStatus">
        <div>{"Name: " + hero.name + " Lvl: " + hero.level.level + " Exp: " + hero.level.exp}</div>
        <HealthBar health={hero.status.health} max={hero.status.maxHealth} color="darkred"/>
        <HealthBar health={hero.status.mana} max={hero.status.maxMana} color="darkblue"/>
      </div>
    )
  }
})

export default HeroStatus;