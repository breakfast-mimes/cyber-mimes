import React from 'react';
import HealthBar from './HealthBar'

const HeroStatus = React.createClass({
  render() {
    const {hero, style} = this.props
    return (
      <div className="heroStatus">
        <div className='heroStats'>
          { " Name: " + hero.name
          + " Lvl: " + hero.level.level
          + " Exp: " + hero.level.exp
          + " Gold: " + hero.status.gold}
        </div>
        <HealthBar style={style} health={hero.status.health} max={hero.status.maxHealth} color="darkred"/>
        <HealthBar style={style} health={hero.status.mana} max={hero.status.maxMana} color="darkblue"/>
      </div>
    )
  }
})

export default HeroStatus;