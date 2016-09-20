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


export function fireball(attacker, target) {
  return {
    type: 'FIREBALL',
    attacker,
    target
  }
}

export function enemyAttack(attacker) {
  return {
    type: 'ENEMY_ATTACK',
    attacker
  }
}

export function heal(amount,target) {
  return {
    type: 'HEAL',
    amount,
    target
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
