import React from 'react';
import spells from './spells'

const SpellEntry = React.createClass({
  render() {
    const {spell, hero, enemy, id} = this.props
    return (
      <div className="spellEntry noSelect">
        <div onClick={() => this.props[spell](hero, enemy, id)}>
          {spells[spell].name}
        </div>
      </div>
    )
  }
})

export default SpellEntry;