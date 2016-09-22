import React from 'react';
import HealthBar from './HealthBar'

const HeroStatus = React.createClass({
  render() {
    const {hero} = this.props
    return (
      <div className="heroStatus">
        <div>{"Name: " + hero.name + " Lvl: " + hero.level.level + " Exp: " + hero.level.exp}</div>
        <HealthBar health={hero.status.health} color="darkred"/>
        <HealthBar health={hero.status.mana} color="darkblue"/>
      </div>
    )
  }
})

export default HeroStatus;