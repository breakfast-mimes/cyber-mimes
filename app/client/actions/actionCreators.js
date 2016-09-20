export function updateCharacter(group, prop, amount) {
  return {
    type: 'UPDATE_CHARACTER',
    group,
    prop,
    amount
  }
}

export function submitCharacter(name) {
  return {
    type: 'SUBMIT_CHARACTER',
    name
  }
}


export function fireball(hero, enemy, id) {
  let amount = hero.stats.int + 1
  return {
    type: 'FIREBALL',
    amount,
    id,
    message: ["you throw a giant fireball for " + amount + " damage","the enemy cowers!"]
  }
}

export function enemyAttack(attacker) {
  let amount = attacker.stats.str
  return {
    type: 'ENEMY_ATTACK',
    amount,
    message: "the enemy attacks for " + amount + " damage!"
  }
}

export function heal(hero, enemy, id) {
  let amount = hero.stats.int
  return {
    type: 'HEAL',
    amount,
    message: "You heal yourself for " + amount + " health."
  }
}

export function enemyMurder() {
  return {
    type: 'ENEMY_MURDER'
  }
}

export function changeMap(location) {
  return {
    type: 'CHANGE_MAP',
    location
  }
}

//function to call if you just want the thing to re render
export function render() {
  return {
    type: 'render'
  }
}
