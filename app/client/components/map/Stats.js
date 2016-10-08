import React from 'react';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    const {hero} = this.props

    return(
      <div className='noSelect'>
        <span>
            Stats: STR:{hero.stats.str} DEX:{hero.stats.dex} INT:{hero.stats.int} END:{hero.stats.end} LUCK:{hero.stats.luck}
        </span>
        <br/>
        <span>
            Skills: Fighting:{hero.skills.fighting} Ranged Combat:{hero.skills.rangedCombat} Martial Arts:{hero.skills.martialArts} Armor:{hero.skills.armor} Magic:{hero.skills.magic} Healing:{hero.skills.healing}
        </span>
      </div>
    )
  }
}