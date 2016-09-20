import React from 'react';
import spells from './spells'

const SpellEntry = React.createClass({
  render() {
    const {spell, loop} = this.props
    return (
      <div className="spellEntry noSelect">
        <div onClick={() => loop(spell)}>
          {spells[spell].name}
        </div>
      </div>
    )
  }
})

export default SpellEntry;